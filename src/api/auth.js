import { supabase } from "../lib/supabase";

export async function loginUser({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }
    return data;
}

export async function signupUser({ email, password, userName }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        potion: {
            data: {
                name: userName,
            },
        },
    });

    if (error) {
        throw new Error(error.message);
    }
    return data;
}
