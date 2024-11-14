"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import { Button } from "flowbite-react";
import { useState } from "react";
import InputOutline from "./InputOutline";

interface InputOutlineFormProps {
  setStepsPost: () => void;
}
const InputOutlineForm = ({ setStepsPost }: InputOutlineFormProps) => {
  const [ckData, setCkData] = useState("");

  return (
    <div className="grid grid-cols-[35%,65%] h-[calc(100%-200px)] px-[100px] pr-[125px] py-[40px] gap-[30px] ">
      <InputOutline setCkData={setCkData} />
      <div className="bg-white p-[20px] shadow-xl rounded-xl">
        <CustomEditor data={ckData} />
        {ckData && (
          <Button
            className="bg-blue-500 w-fit mx-auto px-[50px] mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
            onClick={setStepsPost}
          >
            Tạo bài viết với dàn ý này
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputOutlineForm;