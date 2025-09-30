import React from "react";

export default function welcomeLayout({ children }: { children?: React.ReactNode }) {
    return (<div className="flex flex-col gap-4 min-h-screen items-center justify-center p-24">
        {children}
    </div>)
}