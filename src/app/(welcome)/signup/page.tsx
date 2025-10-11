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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/components/ui/select";

const formObject = z.object({
  email: z.email(),
  password: z.string(),
  accountType: z.enum(["personal", "company"]),
  companyName: z.string().optional(),
  numOfEmployees: z.number().optional(),
});

export default function SignupPage() {
  const form = useForm({
    resolver: zodResolver(formObject),
    defaultValues: {
      email: "",
      password: "",
      accountType: "company",
      companyName: undefined,
      numOfEmployees: undefined,
    },
  });

  const handleFormSubmit = (data: z.infer<typeof formObject>) => {
    console.log("validated signup");
  };

  const accountTypeW = form.watch("accountType");

  return (
    <>
      <PersonStanding size={48} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Sign Up to your SupportMe Account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form<z.input<typeof formObject>> {...form}>
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
                      <Input
                        placeholder="p@ssw0Rd"
                        // type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="w-full">Account Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Account Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {accountTypeW === "company" && (
                <>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Pvt Ltd" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numOfEmployees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No. of Employees</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="10"
                            type="text"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            min={0}
                            {...field}
                            onChange={(e) => {
                              const filteredVal = e.target.value.replace(
                                /[^0-9]/g,
                                "",
                              );
                              field.onChange(
                                filteredVal
                                  ? Number.isNaN(filteredVal)
                                    ? undefined
                                    : filteredVal
                                  : undefined,
                              );
                            }}
                            value={field.value?.toString() ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <Button type="submit">Sign Up</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="justify-between">
          <small>Already have an account?</small>
          <Button variant={"outline"} asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        </CardFooter>
      </Card>{" "}
    </>
  );
}
