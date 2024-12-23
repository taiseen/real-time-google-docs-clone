"use client";

import { useParams } from "next/navigation";
import { ReactNode } from "react";
import {
  LiveblocksProvider,
  ClientSideSuspense,
  RoomProvider,
} from "@liveblocks/react/suspense";

const Room = ({ children }: { children: ReactNode }) => {
  const params = useParams();

  // console.log("key ", configs?.LIVE_BLOCKS_KEY);
  // console.log(process.env.LIVE_BLOCKS_PUBLIC_KEY);

  return (
    <LiveblocksProvider throttle={16} authEndpoint={`/api/liveblocks-auth`}>
      <RoomProvider id={params.docId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
