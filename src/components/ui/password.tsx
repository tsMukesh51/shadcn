import * as React from "react";

import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "./button";
import { cn } from "@repo/lib/utils";

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
      />
      <Button
        variant="ghost"
        className="absolute top-0 right-0"
        onClick={() => setShowPassword((s) => !s)}
      >
        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
      </Button>
    </div>
  );
}

export { PasswordInput };
