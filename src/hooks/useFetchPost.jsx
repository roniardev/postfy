import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
export const useFetchPost = ({ page, limit }) => {
  const queryClient = useQueryClient();

  return useQuery(
    ["postData", { page, limit }],
    () =>
      axios(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      ).then((res) => res.data),
    {
      staleTime: 3000000,
      onSuccess: (data) => {
        data.forEach((data) => {
          queryClient.setQueryData(["postData", data.id], data);
        });
      },
    }
  );
};
