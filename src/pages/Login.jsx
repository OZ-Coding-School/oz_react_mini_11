import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import LoginBackground from "../components/LoginBackground";

export default function Login() {
    return (
        <>
            <LoginBackground />
            <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                Login page
            </motion.div>
        </>
    );
}
