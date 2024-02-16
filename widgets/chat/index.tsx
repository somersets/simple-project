import * as S from "./style.styled";
import { ChatInput, ChatMessageList, CustomChatList } from "@/features/chat";
import { ChatInputContainer } from "./style.styled";
import { useEffect, useRef } from "react";
import useUserData from "@/shared/hooks/use-user-data";
import useChatData from "@/shared/hooks/use-chat-data";

export default function Chat() {
  const wsRef = useRef<WebSocket | null>(null);
  const { userData } = useUserData();
  const { addToMessageHistory } = useChatData();

  const onSocketOpen = (event) => {
    console.log("SOCKET OPENED!", event.type);
  };
  const onMessage = (event) => {
    console.log("MESSAGE!", event);
    addToMessageHistory(JSON.parse(event.data));
  };

  useEffect(() => {
    if (userData && userData.id) {
      wsRef.current = new WebSocket(
        `ws://localhost:8080/api/ws/user-chat/${userData?.id}`,
      );
      wsRef.current.addEventListener("open", onSocketOpen);
      wsRef.current.addEventListener("message", onMessage);
    }
    return () => {
      if (wsRef.current) {
        wsRef.current.removeEventListener("message", onSocketOpen);
        wsRef.current.removeEventListener("open", onMessage);
        wsRef.current.close(1000, "exit");
      }
    };
  }, [userData]);

  return (
    <S.Container>
      <S.LeftSide>
        <CustomChatList />
      </S.LeftSide>
      <S.RightSide>
        <S.RightSideHeader>
          <S.RightSideHeaderLeft>
            <S.RecipientName>Recipient Name</S.RecipientName>
            <S.RecipientStatus>online</S.RecipientStatus>
          </S.RightSideHeaderLeft>
          <S.RightSideHeaderRight></S.RightSideHeaderRight>
        </S.RightSideHeader>
        <S.ChatMessageListContainer>
          <ChatMessageList onSetMessages={() => {}} messages={[]} />
        </S.ChatMessageListContainer>
        <ChatInputContainer>
          <ChatInput ws={wsRef} />
        </ChatInputContainer>
      </S.RightSide>
    </S.Container>
  );
}
