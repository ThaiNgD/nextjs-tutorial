"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const page = () => {
  return (
    <>
      <ChildHeader
        title="Công thức FAB - Tối ưu hóa nội dung tiếp thị"
        description="Tạo bài viết Facebook cho thương hiệu, nhấn mạnh đặc điểm, ưu điểm và lợi ích của sản phẩm/dịch vụ"
      />
      <div className="grid grid-cols-[35%,1fr,65%] h-[calc(100%-200px)] px-[175px] py-[40px] gap-[30px] ">
        <InputContent />
        <div className="border-l"></div>
        <CustomEditor />
      </div>
    </>
  );
};

export default page;