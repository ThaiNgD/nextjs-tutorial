"use client";
import CustomEditor from "@/components/CKEditorComponent/CustomEditor";
import SaveContentComponent from "@/components/ContentComponent/SaveContentComponent";
import { useAiContentBlogLongForm } from "@/service/aiwriter/seo_optimization/useAiContentBlogLongForm";
import ChildHeader from "../_lib/ChildHeader";
import InputContent from "./_lib/InputContent";

const Page = () => {
  const { data, mutate: mutateFn, isPending } = useAiContentBlogLongForm();
  return (
    <>
      <ChildHeader
        title="Tạo bài Blog chi tiết"
        description="Tạo bài blog dài và phần FAQ, bao gồm tiêu đề, bảng, hình ảnh (marksdown), với từ khóa chính"
      />
      <div className="grid grid-cols-[35%,calc(65%-30px)] justify-between flex-auto bg-[#F5F9FC] px-[40px] py-[40px] gap-[30px] ">
        <InputContent submitForm={mutateFn} isPending={isPending} />
        <div className="bg-white flex flex-col gap-2 shadow-lg  p-[32px] rounded-xl">
          <SaveContentComponent />
          <CustomEditor data={data?.result} />
        </div>
      </div>
    </>
  );
};

export default Page;
