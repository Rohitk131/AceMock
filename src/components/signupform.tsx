import React from "react";
import { Button } from "@/components/Button";
import Link from 'next/link'

const SignUpForm: React.FC = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-2xl border border-neutral-800 bg-[#121212] p-6 sm:p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center gap-4">
    
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white">Join us today</h2>
            <p className="text-neutral-300">Create your account in seconds</p>
          </div>
        </div>

        <Button
          type="button"
          className="w-full flex flex-row gap-2 justify-center items-center mb-3"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google Logo"
            width={20}
            height={20}
          />
          <span>Continue with Google</span>
        </Button>

        <Button
          type="button"
          className="w-full flex flex-row gap-2 justify-center items-center"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
            alt="GitHub Logo"
            width={20}
            height={20}
          />
          <span>Continue with GitHub</span>
        </Button>

        <div className="my-4 text-center text-sm text-neutral-400">or</div>

        <form className="flex flex-col gap-4">
          <label htmlFor="name" className="text-sm text-neutral-400">
            <span className="mb-1.5 block font-medium">Name</span>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-md bg-[#171717] px-3 py-2.5 text-base text-[#737373] outline outline-1 outline-neutral-400/25 focus:outline-neutral-400/70 dark:bg-neutral-900 dark:text-white dark:outline-neutral-800 dark:focus:outline-neutral-600"
              required
            />
          </label>

          <label htmlFor="email" className="text-sm text-neutral-400">
            <span className="mb-1.5 block font-medium">Email</span>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-md bg-[#171717] px-3 py-2.5 text-base text-[#737373] outline outline-1 outline-neutral-400/25 focus:outline-neutral-400/70 dark:bg-neutral-900 dark:text-white dark:outline-neutral-800 dark:focus:outline-neutral-600"
              required
            />
          </label>

          <label htmlFor="password" className="text-sm text-neutral-400">
            <span className="mb-1.5 block font-medium">Password</span>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-md bg-[#171717] px-3 py-2.5 text-base text-[#737373] outline outline-1 outline-neutral-400/25 focus:outline-neutral-400/70 dark:bg-neutral-900 dark:text-white dark:outline-neutral-800 dark:focus:outline-neutral-600"
              required
            />
          </label>

          <Button type="submit" className="w-full justify-center mt-2">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-neutral-300 transition hover:text-neutral-100"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
