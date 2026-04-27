import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSignIn = ()=>{
    navigate("/dashboard")
  }
  
  return (
      <div className="flex-1 flex items-center justify-center w-full max-w-md rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-gray-500 mt-2">
            Sign in to your expense tracker
          </p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Button */}
        <button 
        className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-900 transition"
        onClick={handleSignIn}
        >
          Sign in
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account? 
          <span className="text-black font-medium cursor-pointer ml-1 hover:underline">
            Sign up
          </span>
        </p>

      </div>
  )
}