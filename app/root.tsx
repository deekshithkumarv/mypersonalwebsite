import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";

import type { Theme } from "~/utils/theme-provider";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "~/utils/theme-provider";
import { getThemeSession } from "./utils/theme.server";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import ChatWidget from "~/components/ChatWidget";
import ScrollToTop from "~/components/ScrollToTop";

import stylesheet from "~/styles/tailwind.css";
import './routes/style.css';

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "assets/images/dk-image.jpg", type: "image/jpg" },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Deekshith Kumar V — Software Engineer",
  viewport: "width=device-width,initial-scale=1",
  description: "Personal portfolio of Deekshith Kumar V — Software Engineer specializing in full-stack web development.",
});

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };
  return data;
};

function App() {
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary overflow-y-scroll overflow-x-hidden transition-colors duration-300 noise-overlay">
        <div className="min-h-screen flex-col relative">
          <Header />
          <main className="relative overflow-hidden mx-auto my-0 box-border flex-col">
            <Outlet />
          </main>
          <Footer />
        </div>
        <ChatWidget />
        <ScrollToTop />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();
  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}