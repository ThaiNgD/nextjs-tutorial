import ContentDisplay from "./_lib/ContentDisplay";
import FolderDisplay from "./_lib/FolderDisplay";
import Header from "./_lib/Header";
const page = () => {
  return (
    <>
      <Header />
      <hr className="w-full" />
      <div className="2xl:px-[175px] px-[15px] my-[50px]">
        <FolderDisplay />
        <ContentDisplay />
        {/* <CustomEditor /> */}
      </div>
    </>
  );
};

export default page;
