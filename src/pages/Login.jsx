import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

export default function Login() {
    return (
        <>
            <motion.div initial={{ x: 500 }} animate={{ x: 0 }}>
                Login page
            </motion.div>
        </>
    );
}
