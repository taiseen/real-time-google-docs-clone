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

  return (
    <LiveblocksProvider
      authEndpoint={`/api/liveblocks-auth`}
      // 🟧🟧🟧 INFO: project is going to crash when trying to authEndpoint by below code...
      // authEndpoint={async () => {
      //   const endpoint = "/api/liveblocks-auth";
      //   const room = params.documentId as string;

      //   const response = await fetch(endpoint, {
      //     method: "POST",
      //     body: JSON.stringify({ room }),
      //   });

      //   return await response.json();
      // }}

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
      // 🟧🟧🟧 INFO: project is going to crash when trying to resolveRoomsInfo by below code...
      // resolveRoomsInfo={async ({ roomIds }) => {
      //   const documents = await getDocuments(roomIds as Id<"documents">[]);
      //   return documents.map((document) => ({
      //     id: document.id,
      //     name: document.name,
      //   }));
      // }}
      resolveUsers={({ userIds }) => {
        return userIds.map(
          (userId) => users.find((user) => user.id === userId) ?? undefined
        );
      }}
      throttle={16}
    >
      <RoomProvider
        id={params.docId as string}
        initialStorage={{ leftMargin: 56, rightMargin: 56 }}
      >
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
