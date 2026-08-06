"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { LoginFormValues, loginSchema } from "./Schema";
import logo from "@/assets/logo.png"
import Image from "next/image";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log(values);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">


      {/* Right Side - Login Form */}
      <div className="flex-1  flex flex-col items-center justify-center px-12 ">
        {/* Login Form */}
        <div className="w-full max-w-lg space-y-6 bg-white p-8 rounded-lg shadow-md">
          <Image src={logo} alt="application logo" className="w-32 mx-auto mb-7" />
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold text-gray-900">Login To Your Account</h2>
            <p className="text-gray-600">
              Please log in to manage your dashboard and access all your administrative tools
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Email/Phone Input */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          type="text"
                          placeholder="Enter your email"
                          className="pl-10 h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Input */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          className="pl-10 pr-10 h-12 border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  href="/forget-password"
                  className="text-sm text-black hover:text-gray-900"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-black hover:bg-gray-900 text-white font-medium text-base"
              >
                Log In
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
