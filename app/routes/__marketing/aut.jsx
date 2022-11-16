import authStyles from "../../styles/auth.css";
import AuthForm from "~/components/auth/AuthForm";
import { validateCredentials } from "../data/validation.server";
import { login, signUp } from "../data/auth.server";

export default function AuthPage() {
    return (
        <>
            <AuthForm />;
        </>
    );
}

export async function action({ request }) {

    const searchParams = new URL(request.url).searchParams;

    const authMode = searchParams.get('modo') || 'entrar';

    const formData = await request.formData();

    const credentials = Object.fromEntries(formData);

    try {
        validateCredentials(credentials)
    } catch (error) {
        return error;
    }

    try {
        if (authMode === 'entrar') {
            return await login(credentials);
        } else {
            return await signUp(credentials);
        }
    } catch (error) {
        return error.message;
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: authStyles
        }
    ]
}

export function headers({ parentHeaders }) {
    return {
        'Cache-Control': parentHeaders.get('Cache-Control')
    }
  }