import { AuthForm } from "@/components/AuthForm/page";
import { loginAction } from "./login-action";

export default function Login() {
  return <AuthForm action={loginAction} buttonLabel="Login" />;
}
