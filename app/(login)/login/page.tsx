"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const ForgotPassword = () => {
    return (
      <div className="flex items-center space-x-2">
        <HelpCircle className="h-4 w-4" />
        <p className="text-primary text-sm hover:underline cursor-pointer">
          Forgot your password?
        </p>
      </div>
    );
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="hidden lg:flex w-[57%] min-h-screen flex-col justify-center bg-foreground text-background p-24">
        <Icons.koopleDark />
        <h1 className="text-5xl font-bold mt-16">
          Release quality software faster with Feature Flags
        </h1>
        <h2 className="text-lg mt-6">
          The easiest, fastest and most convenient way to release your projects
          with confidence. Toggle functionalities on and off during runtime,
          without deploying new code.
        </h2>
      </div>
      <div className="w-[90%] lg:w-[43%] min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome back!</h1>
        <p className="mt-1 opacity-70">Please sign in, to continue.</p>

        <div className="w-[90%] lg:w-1/2 mt-6 lg:mt-10">
          <p className="text-sm">Email</p>
          <Input
            placeholder="Type your email address here"
            type="email"
            className="w-full mt-1"
            autoFocus
          />

          <p className="text-sm mt-6">Password</p>
          <Input
            placeholder="Type your password here"
            type="password"
            className="w-full mt-1"
          />
        </div>

        <div className="mt-6 w-[90%] lg:w-1/2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="rememberMe" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
          </div>

          <div className="hidden lg:block">
            <ForgotPassword />
          </div>
        </div>
        <Button
          size="lg"
          className="w-[90%] lg:w-1/2 mt-6"
          variant="default"
          onClick={() => router.push("/projects")}
        >
          Login
        </Button>

        <div className="block lg:hidden mt-6">
          <ForgotPassword />
        </div>

        <div className="relative w-[40%] flex items-center justify-center mt-12 lg:mt-16">
          <hr className="z-0 absolute inset-0 w-full border border-border" />
          <p className="z-10 -mt-6 text-sm text-muted-foreground bg-background p-4">
            or
          </p>
        </div>

        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-0 lg:space-x-2 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/projects")}
          >
            <Icons.google />
            <p className="ml-2">Login with Google</p>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/projects")}
          >
            <Icons.gitHub />
            <p className="ml-2">Login with GitHub</p>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Don't have an account, yet?{" "}
          <span className="font-bold cursor-pointer text-primary hover:underline">
            Register here!
          </span>
        </p>
      </div>
    </main>
  );
}
