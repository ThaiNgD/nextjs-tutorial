"use client";
import InputField from "@/components/CustomField/InputField";
import { SelectField } from "@/components/CustomField/SelectField";
import TextAreaField from "@/components/CustomField/TextAreaField";
import configLanguageSelector from "@/config/configLanguageSelector";
import configModuleSelector from "@/config/configModule";
import { Button } from "flowbite-react";
import { useFormik } from "formik";

const InputContent = () => {
  const formik = useFormik({
    initialValues: {
      brand: "",
      web_description: "",
      web_keyword: "",
      module: "",
      language: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });
  return (
    <form
      id="form-submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4"
    >
      <InputField
        name={"brand"}
        placeholder="Thương hiệu"
        title="Thương hiệu"
        clsTitle="font-bold italic"
        className="h-[50px]"
        formik={formik}
      />
      <TextAreaField
        name={"web_description"}
        placeholder="Mô tả Web"
        title="Mô tả Web"
        clsTitle="font-bold italic"
        className="h-[150px]"
        formik={formik}
      />
      <InputField
        name={"web_keyword"}
        placeholder="Từ khóa về web"
        title="Từ khóa về webTừ khóa về web"
        clsTitle="font-bold italic"
        className="h-[50px]"
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
        className="bg-blue-500 mt-[30px] shadow-lg duration-200 rounded-full hover:shadow-none hover:translate-y-0.5"
      >
        Tạo nội dung
      </Button>
    </form>
  );
};

export default InputContent;