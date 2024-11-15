import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { aiTiktokVideoIdeas } from "../axios/AIWriterApi";
import { useRouter } from "next/router";
export const useAiTikTokVideoIdeas = (
  hideToast?: boolean
): UseMutationResult<IResult, Error, IFormTikTokVideoIdeas, unknown> => {
  const router = useRouter();
  console.log(hideToast);
  return useMutation({
    mutationFn: aiTiktokVideoIdeas.create,
    onSuccess: (isSuccess) => {
      if (isSuccess) {
        router.push("/ai-writer/ai-tiktok-video-ideas");
      } else {
        if (!(location.pathname === "/home/ai-writer/ai-tiktok-video-ideas")) {
        }
      }
    },
  });
};
