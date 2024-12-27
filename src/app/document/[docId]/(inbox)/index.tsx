"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import InboxMenu from "./inboxMenu";

const Inbox = () => {
  return (
    <ClientSideSuspense
      fallback={
        <>
          <Button variant="ghost" className="relative" size="icon" disabled>
            <BellIcon className="size-5" />
          </Button>

          <Separator className="h-6" orientation="vertical" />
        </>
      }
    >
      <InboxMenu />
    </ClientSideSuspense>
  );
};

export default Inbox;
