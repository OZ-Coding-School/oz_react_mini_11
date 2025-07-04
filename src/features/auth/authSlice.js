import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

export const signin = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return thunkAPI.rejectWithValue(error.message);

    const { data: profile, error: profileError } = await supabase
      .from("user_table")
      .select("name")
      .eq("id", data.user.id)
      .single();

    if (profileError || !profile) {
      return thunkAPI.rejectWithValue(
        profileError?.message ?? "프로필 조회 실패"
      );
    }

    return { id: data.user.id, email: data.user.email, name: profile.name };
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLogin = true;
        state.user = action.payload;
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
