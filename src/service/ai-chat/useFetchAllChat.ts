import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { conversationApi } from "../axios/conversationApi";

interface ChatListProps {
  conversation: IConversationResult[];
}
export const useFetchAllChat = (
  userId: string
): UseQueryResult<ChatListProps, Error> => {
  return useQuery({
    queryKey: ["all-chat"],
    queryFn: () => conversationApi.getAll(userId), // Thêm conversationId vào đây
    enabled: true,
  });
};
