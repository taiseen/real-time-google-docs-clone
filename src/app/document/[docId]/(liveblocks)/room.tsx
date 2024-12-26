"use client";

import FullscreenLoader from "@/components/fullscreenLoader";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { getUsers } from "../action";
import { toast } from "sonner";
import {
  LiveblocksProvider,
  ClientSideSuspense,
  RoomProvider,
} from "@liveblocks/react/suspense";

type User = { id: string; name: string; avatar: string };

const Room = ({ children }: { children: ReactNode }) => {
  const params = useParams();

  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useMemo(
    () => async () => {
      try {
        const list = await getUsers();
        setUsers(list);
      } catch {
        toast.error("Failed to fetch users");
      }
    },
    []
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // console.log("key ", configs?.LIVE_BLOCKS_KEY);
  // console.log(process.env.LIVE_BLOCKS_PUBLIC_KEY);

  return (
    <LiveblocksProvider
      authEndpoint={async () => {
        const endpoint = "/api/liveblocks-auth";
        const room = params.documentId as string;

        const response = await fetch(endpoint, {
          method: "POST",
          body: JSON.stringify({ room }),
        });

        return await response.json();
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;
        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
          );
        }
        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={() => []}
      resolveUsers={({ userIds }) => {
        return userIds.map(
          (userId) => users.find((user) => user.id === userId) ?? undefined
        );
      }}
      throttle={16}
    >
      <RoomProvider id={params.docId as string}>
        <ClientSideSuspense
          fallback={<FullscreenLoader label="Room Loading..." />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
