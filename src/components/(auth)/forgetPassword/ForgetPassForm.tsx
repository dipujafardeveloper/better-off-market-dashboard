"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ForgetPassFormValues, forgetPassSchema } from "./Schema";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png";
import Image from "next/image";

export function ForgetPassForm() {
  const form = useForm<ForgetPassFormValues>({
    resolver: zodResolver(forgetPassSchema),
    defaultValues: {
      email: "",
    },
  });
  const router = useRouter();

  const onSubmit = (values: ForgetPassFormValues) => {
    router.push("/verify-email");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Purple Gradient with Logo */}
      {/* <LogoSection /> */}

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-gray-50 flex flex-col items-center justify-center px-12">
        {/* forgot password form */}
        <div className="w-full max-w-lg space-y-6 bg-white p-8 rounded-lg shadow-md">
          <Image src={logo} alt="application logo" className="w-32 mx-auto mb-7" />
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold text-gray-900">
              Recover Password
            </h2>
            <p className="text-gray-600">
             Please provide the email address associated with your account, and we’ll send you verification code to reset your password.
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
                          className="pl-10 h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-black hover:bg-gray-900 text-white font-medium text-base"
              >
                Send OTP
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
