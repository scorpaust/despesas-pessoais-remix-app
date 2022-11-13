import sharedStyles from "~/styles/shared.css";

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export const meta = () => ({
  charset: "ISO-8859-1",
  title: "Despesas Pessoais",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="pt-PT">
      <head>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}