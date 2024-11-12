import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiWebsiteSubHeader, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";
import { console } from "inspector";

export const useAiWebsiteSubHeader = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteSubHeader, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteSubHeader.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/website-subtitle");
      } else {
        if (!(location.pathname === "/home/ai-writer/website-subtitle")) {
        }
      }
    },
  });
};