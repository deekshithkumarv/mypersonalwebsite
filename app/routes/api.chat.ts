import { json } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";

const SYSTEM_PROMPT = `You are Deekshith's AI assistant, embedded directly on his personal portfolio website. 
Your primary goal is to represent Deekshith professionally, answer questions about his experience, skills, and projects, and help visitors (like recruiters or potential clients) learn more about him.

Here is the key information about Deekshith:
- **Experience:** \~3 years of experience. Currently working as a Software Engineer at Ivoyant Systems.
- **Core Skills:** C#, ASP.NET Core, React, Angular, TypeScript, Snowflake, SQL Server, Microsoft Azure, and more.
- **Key Projects:** 
    1. Enterprise HR Management System
    2. Container Management Platform
    3. Grow-N-Know (an ML-powered application)
- **Contact Info:** Email is vdeekshithkumar@gmail.com. Visitors should also be encouraged to connect on LinkedIn.

Guidelines for your responses:
- Be warm, concise, and highly professional.
- Do NOT make up information. If someone asks about a skill or project not listed here, politely state that you only have information on his core background but they can reach out to him via email to ask directly.
- Keep responses relatively brief (1-3 small paragraphs max) as this is a small chat widget.
- Use conversational formatting (bullet points are okay if listing skills, but keep it tight).`;

export const action = async ({ request }: ActionArgs) => {
    console.log("[Chat API] Action started");

    if (request.method !== "POST") {
        console.warn("[Chat API] Method not allowed:", request.method);
        return json({ error: "Method not allowed" }, { status: 405 });
    }

    // Check for API Key explicitly
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        console.error("[Chat API] GROQ_API_KEY is missing in environment variables!");
        return json({ error: "API configuration error. Please check server logs." }, { status: 500 });
    }

    try {
        const body = await request.json();
        const { messages } = body;

        if (!messages || !Array.isArray(messages)) {
            console.warn("[Chat API] Invalid messages array received");
            return json({ error: "Invalid messages array" }, { status: 400 });
        }

        console.log(`[Chat API] Processing ${messages.length} messages`);

        // Prepend the system prompt to the messages array
        const apiMessages: any[] = [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m: any) => ({
                role: m.role === "ai" ? "assistant" : "user",
                content: m.text, // we map `text` from frontend to `content` for API
            }))
        ];

        console.log("[Chat API] Starting Groq completion API call...");
        const startTime = Date.now();

        // Implement 8-second timeout for fetch to avoid Vercel 10s hard timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        try {
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: apiMessages,
                    temperature: 0.7,
                    max_tokens: 500,
                }),
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            const duration = Date.now() - startTime;
            console.log(`[Chat API] Groq API call finished in ${duration}ms with status ${response.status}`);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("[Chat API] Groq API returned an error:", errorText);
                return json({ error: "Upstream AI service error" }, { status: 502 });
            }

            const data = await response.json();
            const reply = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

            return json({ reply });

        } catch (fetchError: any) {
            clearTimeout(timeoutId);
            if (fetchError.name === 'AbortError') {
                console.error(`[Chat API] Groq API call timed out after 8 seconds`);
                return json({ error: "The AI service took too long to respond." }, { status: 504 });
            }
            throw fetchError;
        }

    } catch (error: any) {
        console.error("[Chat API] Error:", error.message || error);
        return json(
            { error: "An error occurred while communicating with the AI." },
            { status: 500 }
        );
    }
};

