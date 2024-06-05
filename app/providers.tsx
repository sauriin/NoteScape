'use client'

import { ThemeProvider } from "@/components/theme-providers";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <ClerkProvider publishableKey={process.env.NEXT_CLERK_PUBLISHABLE_KEY}>
                <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                    {children}
                </ConvexProviderWithClerk>
            </ClerkProvider>
        </ThemeProvider>
    )
}