import { IMessageListProps, MessageList } from "react-chat-elements";
import { useEffect, useRef } from "react";
import { Message, useLazyUserMessagesHistoryQuery } from "@/shared/api/chat";
import useUserData from "@/shared/hooks/use-user-data";
import { normalizeFormatMessages } from "@/features/chat/components/chat-message-list/utils";
import { callToastFromError } from "@/shared/components/toast/utils";
import useChatData from "@/shared/hooks/use-chat-data";

export default function ChatMessageList() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [getMessagesHistory] = useLazyUserMessagesHistoryQuery();
  const { userData } = useUserData();
  const { restoreChatHistory } = useChatData();

  useEffect(() => {
    if (userData) {
      try {
       /* // TODO DYNAMIC RECIPIENT ID
        getMessagesHistory({ user_id: userData.id, recipient_id: 27 })
          .unwrap()
          .then((response) => {
          });*/
      } catch (e) {
        callToastFromError(e);
      }
    }
  }, [userData]);
  return (
    <MessageList
      className="message-list"
      lockable={true}
      downButton={true}
      // downButtonBadge={1}
      dataSource={
        userData && userData.id
          ? normalizeFormatMessages(messages, userData.id.toString())
          : []
      }
      referance={ref}
    />
  );
}
