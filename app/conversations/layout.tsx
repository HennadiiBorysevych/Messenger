import React from "react";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import getConversation from "../actions/getConversation";

type Props = {};

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversation();
  return (
    <SideBar>
      <div className="h-full">
        <ConversationList initialsItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
