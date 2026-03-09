import { ActionFunction, json } from "@remix-run/node";
import OpenAI from "openai";

// Configure Edge Runtime for this route
export const config = {
    runtime: "edge",
};

// Initialize OpenAI client with Groq's base URL and your GROQ_API_KEY
// Assuming GROQ_API_KEY is defined in your .env
const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

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

export async function action({ request }: Parameters<ActionFunction>[0]) {
    console.log("[Chat API] Action started");

    if (request.method !== "POST") {
        console.warn("[Chat API] Method not allowed:", request.method);
        return json({ error: "Method not allowed" }, { status: 405 });
    }

    // Check for API Key explicitly
    if (!process.env.GROQ_API_KEY) {
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
                content: m.text, // we map `text` from frontend to `content` for OpenAI SDK
            }))
        ];

        console.log("[Chat API] Starting Groq completion call...");
        const startTime = Date.now();

        // Call Groq (via OpenAI SDK)
        const response = await openai.chat.completions.create({
            model: "llama-3.1-8b-instant", // Fast model suitable for chat
            messages: apiMessages,
            temperature: 0.7,
            max_tokens: 500, // Keep responses concise for the widget
        });

        const duration = Date.now() - startTime;
        console.log(`[Chat API] Groq completion finished in ${duration}ms`);

        const reply = response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

        return json({ reply });

    } catch (error: any) {
        console.error("[Chat API] Error:", error);
        // Log more details if available
        if (error.response) {
            console.error("[Chat API] OpenAI/Groq API error response:", error.response.status, error.response.data);
        }

        return json(
            { error: error.message || "An error occurred while communicating with the AI." },
            { status: 500 }
        );
    }
}
