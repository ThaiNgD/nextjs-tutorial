"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";
import { useState } from "react";

const Page = () => {
  const [ckData, setCkData] = useState("");
  return (
    <>
      <ChildHeader
        title="Mở bài Blog"
        description="Viết đoạn mở bài: đặt câu hỏi, nêu vấn đề, nhấn mạnh từ khóa"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] px-[175px] py-[40px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="border-l"></div>
        <CustomEditor data={ckData} />
      </div>
    </>
  );
};

export default Page;