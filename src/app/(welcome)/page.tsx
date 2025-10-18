import { Button } from "@repo/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon className="text-pink-500" size={50} />
        Support ME
      </h1>
      <p className="">THE dashboard to manage customer support</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href={"/login"}>Log In</Link>
        </Button>
        <small>or</small>
        <Button variant={"outline"} asChild>
          <Link href={"/signup"}>Sign Up</Link>
        </Button>
      </div>
    </>
  );
}
