import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
export const useFetchComments = ({ postId }) => {
  const queryClient = useQueryClient();

  return useQuery(["postData", { postId }], () =>
    axios(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(
      (res) => res.data
    )
  );
};
