import FormInputContent from "./_lib/FormInputContent";
import FormReport from "./_lib/FormReport";
import Header from "./_lib/Header";

const Page = () => {
  return (
    <>
      <Header />
      <div className="py-[40px] flex-auto bg-[#F5F9FC] px-[50px] grid grid-cols-[55%,calc(45%-16px)] gap-4">
        <FormInputContent />
        <FormReport />
      </div>
    </>
  );
};

export default Page;
