"use client";
import { ChatList } from "react-chat-elements";

export default function CustomChatList() {


  const onContactClick = (contactData) => {
    console.log(contactData)
  };
  return (
    <ChatList
      className="chat-list"
      onClick={onContactClick}
      dataSource={[
        {
          id: "29",
          avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
          alt: "kursat_avatar",
          title: "Abdul Afara",
          subtitle: "Why don't we go to the No Way Home movie this weekend ?",
          date: new Date(),
          unread: 3,
        },
        {
          id: "27",
          avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
          alt: "kursat_avatar",
          title: "Nikita Likhachev",
          subtitle: "Why don't we go to the No Way Home movie this weekend ?",
          date: new Date(),
          unread: 3,
        },
      ]}
      id={"1"}
      lazyLoadingImage={""}
    />
  );
}
