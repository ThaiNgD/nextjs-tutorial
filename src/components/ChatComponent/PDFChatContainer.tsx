"use client";
import { avatar } from "@/assets/images/avatar-image";
import { selectRandom } from "@/helper/function";
import { Button } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";
import DragnDropPDF from "../DragnDropPDF";
import ChatInput from "./ChatInput";
import UserChatContent from "./UserChatContent";
import WelcomeUserChatContent from "./WelcomeUserChatContent";

const PDFChatContainer = () => {
  const userImage = selectRandom(avatar);
  const [file, setFile] = useState<File | null>();
  const [isChat, setIsChat] = useState(false);
  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="p-[30px] h-full flex flex-col gap-3 justify-between">
        {isChat ? (
          <>
            <div className="flex flex-col h-full overflow-auto pb-4 gap-4">
              <WelcomeUserChatContent imgUrl={userImage} />
              <UserChatContent isUser={true} userImage={userImage} />
              <UserChatContent imgUrl={userImage} />
            </div>
            <ChatInput />
          </>
        ) : (
          <>
            <DragnDropPDF setFile={setFile} />
            <Button
              className="w-fit self-center px-[50px] bg-blue-500 rounded-xl shadow-lg hover:shadow-none hover:translate-y-0.5 border-blue-500"
              onClick={(): void => {
                if (file) {
                  setIsChat(true);
                } else {
                  toast.error("Chưa có file nhập vào");
                }
              }}
            >
              Bắt đầu Chat
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PDFChatContainer;