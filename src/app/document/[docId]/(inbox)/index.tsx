"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import InboxMenu from "./inboxMenu";

const Inbox = () => {
  return (
    <ClientSideSuspense fallback={null}>
      <InboxMenu />
    </ClientSideSuspense>
  );
};

export default Inbox;
