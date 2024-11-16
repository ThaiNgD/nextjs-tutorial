"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import { useState } from "react";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const Page = () => {
  const [ckData, setCkData] = useState("");
  return (
    <>
      <ChildHeader
        title="Phân tích ý định người dùng"
        description="Phân tích ý định người dùng, từ khóa, ý định, tiêu đề"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] 2xl:px-[175px] px-[15px] py-[40px] gap-[30px] ">
        <InputContent setCkData={setCkData} />
        <div className="border-l"></div>
        <CustomEditor data={ckData} />
      </div>
    </>
  );
};

export default Page;
