'use client'

import { Manrope } from 'next/font/google'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation'

const manrope = Manrope({ subsets: ['latin'] })

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const [ formData, setFormData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    router.push('/dashboard')
  }

  return (
    <section className='p-3 max-w-md mx-auto flex items-center h-screen'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <h1 className={`text-2xl text-gray-900 font-semibold ${manrope.className}`}>Sign in to Skydd Admin</h1>
        <input
          type="email"
          placeholder='Staff email'
          id='email'
          className='p-3 border bg-[#f9f9f9] w-full focus:outline-none'
          required
        />
        <div className="relative flex items-center">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            id="password"
            className='p-3 border bg-[#f9f9f9] w-full pr-10 focus:outline-none'
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-0 mr-3'
          >
            {showPassword ? (
              <FaEye className="text-[#737476]" />
            ) : (
              <FaEyeSlash className="text-[#737476]" />
            )}
          </button>
        </div>
        <button
          className='p-3 rounded-lg bg-[#1AA3A1] text-white font-semibold'
        >
          Sign in
        </button>
        <p className='mt-8 text-sm text-[#AAACAE]'>Skydd Admin © 2023️. Only users invited by their organization can sign in using their org email</p>
      </form>
    </section>
  )
}

export default LoginPage