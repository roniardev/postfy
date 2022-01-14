import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
export const useFetchUser = () => {
  const queryClient = useQueryClient();

  return useQuery(
    "userData",
    () =>
      axios(`https://jsonplaceholder.typicode.com/users`).then(
        (res) => res.data
      ),
    {
      staleTime: 3000000,
    }
  );
};
