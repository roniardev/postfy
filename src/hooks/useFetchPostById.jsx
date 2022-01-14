import { useQueryClient, useQuery } from "react-query";
import axios from "axios";

export const useFetchPostById = ({ id }) => {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["postData", id]);

  if (!post) {
    return useQuery("postIdData", () =>
      axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        (res) => res.data
      )
    );
  }
  return post;
};
