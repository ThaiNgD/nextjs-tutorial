"use client";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  setCkData: Dispatch<SetStateAction<string>>;
}

const InputPost = ({ setCkData }: InputProps) => {
  const formik = useFormik({
    initialValues: {
      outline: "",
      module: "",
      language: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      setCkData(values.outline);
      // Handle form submission
    },
  });
  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 bg-white p-[20px] shadow-xl rounded-xl"
    >
      <TextAreaField
        name={"outline"}
        placeholder="Outline"
        title="Outline"
        clsTitle="font-bold italic"
        className="h-[200px]"
        clsTextArea="min-h-[50px]"
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Model"
        name="module"
        options={configModuleSelector}
        formik={formik}
      />
      <SelectField
        clsLabelWrapper="font-bold italic"
        label="Ngôn ngữ"
        name="language"
        options={configLanguageSelector}
        formik={formik}
      />
      <Button
        form="form-submit"
        type="submit"
        className="bg-blue-500 w-fit mx-auto px-[50px] mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        Tạo bài viết
      </Button>
    </form>
  );
};

export default InputPost;
