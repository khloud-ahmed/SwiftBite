import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// الـ URL الأساسي للـ Backend (غيريه حسب بورت السيرفر عندك)
const API_URL = "http://localhost:5000/api/auth"; 

// 1. Async Thunk لعملية تسجيل الدخول (Login)
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, formData);
      
      // لو الـ Backend رجع الـ token، بنحفظه في الـ LocalStorage عشان يفضل مسجل دخول
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      
      return response.data; // هيبعت الـ payload (فيه الـ token والـ user والـ redirectTo)
    } catch (error) {
      // إرجاع رسالة الخطأ القادمة من الـ Backend (مثلاً: "Invalid credentials")
      return rejectWithValue(
        error.response?.data?.msg || error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

// 2. Async Thunk لعملية إنشاء حساب جديد (Register)
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }
      
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

// الـ State المبدئية
const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // مسح الأخطاء عند الكتابة (إنتي مستخدماها في الـ Components)
    clearError: (state) => {
      state.error = null;
    },
    // تسجيل الخروج
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // --- LOGIN CASES ---
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // الرسالة اللي جاية من الـ rejectWithValue
      })
      
      // --- REGISTER CASES ---
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.data; // الـ Backend بتاعك بيرجع اليوزر في متغير اسمه data
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, logout } = authSlice.actions;
export default authSlice.reducer;