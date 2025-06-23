import SignipForm from "../components/\bSignupForm";
import LoginBackground from "../components/LoginBackground";

export default function Signup() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <LoginBackground />
                <SignipForm />
            </div>
        </>
    );
}
