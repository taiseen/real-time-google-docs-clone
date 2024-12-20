"use client";

import FullscreenLoader from "./fullscreenLoader";
import { ClerkProvider, SignIn, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";
import {
  ConvexReactClient,
  Unauthenticated,
  Authenticated,
  AuthLoading,
} from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        
        <Unauthenticated>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <SignIn routing="hash"/>
          </div>
        </Unauthenticated>

        <AuthLoading>
          <FullscreenLoader label="Auth Loading..." />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
