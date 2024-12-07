"use client";
import ChatContainer from "@/components/ChatComponent/ChatContainer";
import { Button } from "flowbite-react";
import { useState } from "react";
import ChatHeader from "./_lib/ChatHeader";
import ChatList from "./_lib/ChatList";
import ChatSearchBar from "./_lib/ChatSearchBar";

const Page = () => {
  const [chat, setChat] = useState<IConversationDetail>();
  return (
    <>
      <div className="grid divide-y h-fit w-full box-border grid-rows-[15%,85%]">
        <ChatSearchBar />
        <div className="row-span-1 py-[2px] w-full flex max-h-full flex-col gap-2 h-[600px]">
          {chat && (
            <Button className="rounded-full w-fit px-[30px] my-5 bg-blue-500 shadow-md font-bold mx-auto border-blue-500 hover:shadow-none hover:translate-y-0.5 duration-200">
              Thêm đoạn chat
            </Button>
          )}
          <ChatList setChat={setChat} />
        </div>
      </div>
      <div className="grid divide-y justify-stretch items-stretch  w-full grid-rows-[15%,85%]">
        <ChatHeader />
        <ChatContainer chat={chat} />
      </div>
    </>
  );
};

export default Page;
