import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import LoginBackground from "../components/LoginBackground";
import LoginForm from "../components/LoginForm";

export default function Login() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <LoginBackground />
                <LoginForm />
            </div>
        </>
    );
}
