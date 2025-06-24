import SignipForm from "../components/SignupForm";
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
