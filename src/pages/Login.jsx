import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import LoginBackground from "../components/LoginBackground";

export default function Login() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <LoginBackground />

                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="text-white text-3xl bg-black bg-opacity-50 px-4 py-2 rounded-md">
                        dasdasdasd
                        <div>asdasdasdas</div>
                    </div>
                </div>
            </div>
        </>
    );
}
