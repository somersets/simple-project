"use client";
import { Input } from "react-chat-elements";
import { RefObject, useState } from "react";
import { Message } from "@/shared/api/chat";
import { getUserMessageInfo } from "@/features/chat/components/chat-message-list/utils";
import useUserData from "@/shared/hooks/use-user-data";

export default function ChatInput({ ws }: { ws: RefObject<WebSocket | null> }) {
  const [messageState, setMessageState] = useState("");
  const { userData } = useUserData();

  const onSubmit = (event) => {
    switch (event.type) {
      case "keydown":
        if (event.code !== "Enter") return;
        onSubmitMessage();
        break;
      default:
        return;
    }
  };
  const onSubmitMessage = () => {
    if (userData && ws.current) {
      const message: Message = {
        id: userData.id.toString(),
        sender: getUserMessageInfo(userData),
        recipient: {
          id: 27,
          name: "Nikita",
          last_name: "Likhachev",
          date: new Date().toISOString(),
        },
        content: messageState,
        type: "message",
      };
      ws.current.send(JSON.stringify(message));
      setMessageState("");
    }
  };
  return (
    <Input
      value={messageState}
      onKeyDown={(event) => onSubmit(event)}
      onChange={(event) => setMessageState(event.target.value)}
      onSubmit={(event) => onSubmit(event)}
      placeholder="Type here..."
      maxHeight={60}
    />
  );
}
