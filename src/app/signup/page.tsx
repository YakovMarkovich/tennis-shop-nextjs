import { AuthForm } from "@/components/AuthForm/page";
import { signupAction } from "./signup-action";

export default function Signup() {
  return <AuthForm action={signupAction} buttonLabel="Sign Up" />;
}
