import { json } from "@remix-run/node";
import { destroyUserSession } from "./data/auth.server";

export function action({ request }) {
    if (request.method !== 'POST') {
        throw json({ message: 'Método incorreto no pedido feito ao servidor.'}, { status: 400 });
    }

    return destroyUserSession(request);
}