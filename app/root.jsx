import sharedStyles from "~/styles/shared.css";
import Error from "./components/util/Error";

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useCatch,
  useMatches
} = require("@remix-run/react");

export const meta = () => ({
  charset: "utf-8",
  title: "Despesas Pessoais",
  viewport: "width=device-width,initial-scale=1",
});

function Document({title, children}) {

  const matches = useMatches();

  const disableJS = matches.some(match => match.handle?.disableJS);

  return (
    <html lang="pt-PT">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {!disableJS && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {

  const caughtResponse = useCatch();

  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>{caughtResponse.data?.message || 'Algo de errado aconteceu. Tente, de novo, mais tarde.'}</p>
          <p>Regressar à <Link to="/">página inicial</Link>.</p>
        </Error>
      </main>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document title="Um erro aconteceu...">
      <main>
        <Error title="Um erro aconteceu...">
          <p>{error.message || 'Algo de errado aconteceu. Tente, de novo, mais tarde.'}</p>
          <p>Regressar à <Link to="/">página inicial</Link>.</p>
        </Error>
      </main>
    </Document>
  );
}

export function links() {
  return [
    { 
      rel: "stylesheet", 
      href: sharedStyles 
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
    }
  ];
}