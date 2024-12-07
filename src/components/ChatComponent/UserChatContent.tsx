import { cn } from "@/helper/function";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { IoIosCopy } from "react-icons/io";
interface UserChatContentProps {
  imgUrl?: StaticImageData;
  widthCls?: string;
  isUser?: boolean;
  userImage?: StaticImageData;
  message?: string;
  timeStamp?: number;
}
const UserChatContent = ({
  imgUrl,
  widthCls,
  isUser,
  userImage,
  message,
  timeStamp,
}: UserChatContentProps) => {
  const [chat, setChat] = useState("");
  console.log(chat);
  useEffect(() => {
    if (message) {
      let i = 0;
      const intervalId = setInterval(() => {
        setChat(message.slice(0, i));

        i++;

        if (i > message.length) {
          clearInterval(intervalId);
        }
      }, 4);

      return () => clearInterval(intervalId);
    }
  }, [message]);
  return (
    <div className={cn("flex gap-4 w-full", widthCls)}>
      {imgUrl && !isUser ? (
        <Image
          alt="User Avatar"
          src={imgUrl}
          className="flex-shrink-0 w-[30px] h-[30px] bg-gray-300 rounded-full"
        />
      ) : (
        <div className="flex-shrink-0 w-[30px] h-[30px] invisible bg-gray-300 rounded-full" />
      )}
      <div
        className={cn(
          "flex-grow min-h-fit flex rounded-xl",
          !isUser ? "justify-start" : "justify-end"
        )}
      >
        <div className="flex relative group flex-col">
          <div className="w-fit min-w-[100px] max-w-[80%] relative  rounded-xl bg-gray-100">
            <p className="text-sm text-cursor whitespace-normal typewriter-animation w-fit p-2 text-gray-500 dark:text-gray-400">
              {message}
            </p>
            <div
              role="button"
              className={cn(
                "group-hover:block absolute bg-white text-gray-400 border rounded-full -bottom-5 hidden p-[6px]",
                isUser ? "-left-3" : "-right-3"
              )}
            >
              <IoIosCopy size={16} />
            </div>
          </div>
          <span
            className={cn(
              "text-xs opacity-50",
              isUser ? "mr-1 self-end" : "ml-1"
            )}
          >
            {timeStamp}
          </span>
          {/* <div className="absolute invisible group-hover:visible w-[30px] h-[30px] right-0 top-0 bg-gray-300 rounded-full" /> */}
        </div>
      </div>
      {userImage && isUser ? (
        <Image
          alt="User Avatar"
          src={userImage}
          className="flex-shrink-0 w-[30px] h-[30px] bg-gray-300 rounded-full"
        />
      ) : (
        <div className="flex-shrink-0 w-[30px] h-[30px] invisible bg-gray-300 rounded-full" />
      )}
    </div>
  );
};

export default UserChatContent;
