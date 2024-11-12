import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiWebsiteBenefits, IResult } from "../axios/AIWriterApi";
import { useRouter } from "next/router";

export const useAiWebsiteBenefits = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormWebsiteBenefits, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiWebsiteBenefits.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/home/ai-writer/web-benefit");
      } else {
        if (!(location.pathname === "/home/ai-writer/web-benefit")) {
        }
      }
    },
  });
};