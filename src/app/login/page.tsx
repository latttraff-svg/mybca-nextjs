"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("ditawith@gmail.com");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Alur langsung dilempar ke halaman dashboard akun yang baru kita perbaiki
    router.push("/dashboard/accounts");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-sm space-y-6 bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-blue-600">myBCA</h1>
          <h2 className="text-xl font-semibold tracking-tight">Welcome to myBCA</h2>
          <p className="text-sm text-muted-foreground">Enter your credentials to access your account.</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">User ID</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded-md" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border rounded-md" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-md font-medium transition-colors"
          >
            Log In
          </button>
        </form>

        <button className="w-full border border-gray-300 p-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
          Log in with Biometrics
        </button>

        <div className="text-center text-xs text-gray-500">
          <span className="hover:underline cursor-pointer">Forgot password?</span> | <span className="hover:underline cursor-pointer">Need help?</span>
        </div>
      </div>
    </div>
  );
}