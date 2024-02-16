import { Message, SenderAndRecipientInfo } from "@/shared/api/chat";
import { MessageType } from "react-chat-elements";
import { IUser } from "@/shared/types/user";

export function normalizeFormatMessages(
  messages: Message[],
  userID: string,
): MessageType[] {
  return messages.map((message) => {
    return {
      position: userID === message.sender.id.toString() ? "right" : "left",
      type: "text",
      title:
        userID === message.sender.id.toString()
          ? message.sender.name
          : message.recipient.name,
      text: message.content,
      id: message.id,
      focus: false,
      date: new Date(),
      dateString:
        userID === message.sender.id.toString()
          ? new Date(message.sender.date).toLocaleTimeString()
          : new Date(message.recipient.date).toLocaleTimeString(),
      titleColor: "",
      forwarded: false,
      replyButton: false,
      removeButton: false,
      status: "read",
      notch: false,
      retracted: false,
    };
  });
}

export function getUserMessageInfo(user: IUser): SenderAndRecipientInfo {
  return {
    id: user.id,
    name: user.first_name,
    last_name: user.last_name,
    date: new Date().toISOString(),
  };
}
