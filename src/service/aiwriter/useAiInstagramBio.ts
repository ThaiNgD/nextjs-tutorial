import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiInstagramBio, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiInstagramBio = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormInstagramBio, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiInstagramBio.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/instagram-bio-description");
        //!hideToast && toast.success("Thành công");
      } else {
        if (
          !(location.pathname === "/home/ai-writer/instagram-bio-descriptio")
        ) {
          //!hideToast && toast.error("Thất bại");
        }
      }
    },
  });
};