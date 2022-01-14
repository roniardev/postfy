import { useQueryClient, useQuery } from "react-query";
import axios from "axios";

export const useFetchPostById = ({ id }) => {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["postData", id]);

  if (!post) {
    return useQuery(
      "postIdData",
      () =>
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
          (res) => res.data
        ),
      {
        staleTime: 3000000,
        onSuccess: (data) => {
          queryClient.setQueryData(["postData", data.id], data);
        },
      }
    );
  }
  return post;
};
