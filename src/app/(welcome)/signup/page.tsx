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
import { CalendarIcon, PersonStanding } from "lucide-react";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/components/ui/popover";
import { Calendar } from "@repo/components/ui/calendar";
import { format } from "date-fns";
import { PasswordInput } from "@repo/components/ui/password";
import { Checkbox } from "@repo/components/ui/checkbox";
import { useRouter } from "next/navigation";

const accountTypeSchema = z
  .object({
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numOfEmployees: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.accountType === "company") {
      if (!data.companyName || data.companyName === "") {
        ctx.addIssue({
          code: "custom",
          path: ["companyName"],
          message: "Company Name is required",
        });
      }
      if (!data.numOfEmployees || data.numOfEmployees < 1) {
        ctx.addIssue({
          code: "custom",
          path: ["numOfEmployees"],
          message: "No. of employee must be valid",
        });
      }
    }
  });

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Atleast 8 characters")
      .max(14, "Maximum 14 characters")
      .refine(
        (password) => /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password),
        "Atleast 1 special char and 1 upper letter",
      ),
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        path: ["passwordConfirm"],
        message: "Both password should match",
      });
    }
  });

const baseSchema = z.object({
  email: z.email(),
  dob: z.date().refine((date) => {
    const today = new Date();
    const eighteenYrsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0,
      0,
    );
    return date <= eighteenYrsAgo;
  }, "You must atleast 18 years old"),
  acceptTerms: z
    .boolean()
    .refine(
      (isAccepted) => !!isAccepted,
      "You must accept terms and conditions",
    ),
});

const formObject = baseSchema.and(accountTypeSchema).and(passwordSchema);

export default function SignupPage() {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formObject),
    defaultValues: {
      email: "",
      accountType: undefined,
      companyName: undefined,
      numOfEmployees: undefined,
      dob: undefined,
      password: "",
      passwordConfirm: "",
      acceptTerms: false,
    },
  });

  const handleFormSubmit = (data: z.infer<typeof formObject>) => {
    console.log("validated signup");
    router.push("/dashboard");
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
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Type</FormLabel>
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
                                    : Number(filteredVal)
                                  : undefined,
                              );
                            }}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => {
                  const maxAgeYearsBefore = new Date();
                  maxAgeYearsBefore.setFullYear(
                    maxAgeYearsBefore.getFullYear() - 140,
                  );
                  return (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className="flex justify-between normal-case text-muted-foreground"
                            >
                              {!!field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-auto p-0">
                          <Calendar
                            mode="single"
                            defaultMonth={field.value}
                            selected={field.value}
                            onSelect={field.onChange}
                            weekStartsOn={1}
                            fixedWeeks
                            startMonth={maxAgeYearsBefore}
                            captionLayout="dropdown"
                            disabled={{
                              before: maxAgeYearsBefore,
                              after: new Date(),
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  );
                }}
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
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-1 items-center">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>I accept terms and conditions</FormLabel>
                    </div>
                    <FormDescription>
                      By signing up you agree to our{" "}
                      <Link
                        href={"/terms"}
                        className="text-primary hover:underline"
                      >
                        terms and conditions
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
      </Card>
    </>
  );
}
