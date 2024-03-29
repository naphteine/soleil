"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/context/AuthProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
