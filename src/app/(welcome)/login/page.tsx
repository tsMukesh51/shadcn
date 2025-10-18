"use client";

import { Button } from "@repo/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/components/ui/card";
import { PersonStanding } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/components/ui/form";
import { Input } from "@repo/components/ui/input";
import { PasswordInput } from "@repo/components/ui/password";
import { useRouter } from "next/navigation";

const formObject = z.object({
  email: z.email(),
  password: z.string(),
});

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formObject>>({
    resolver: zodResolver(formObject),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = () => {
    console.log("validate login");
    router.push("/dashboard");
  };

  return (
    <>
      <PersonStanding size={48} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe Account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="youremail@email.com"
                        // type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      The email you signed up with SupportMe
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>{"Don't have an account?"}</small>
          <Button variant={"outline"} asChild>
            <Link href={"/signup"}>Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>{" "}
    </>
  );
}
