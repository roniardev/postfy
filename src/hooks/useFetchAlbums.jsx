import { useQueryClient, useQuery } from "react-query";
import axios from "axios";

export const useFetchAlbums = ({ userId }) => {
  const queryClient = useQueryClient();

  return useQuery("postIdData", () =>
    axios(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then(
      (res) => res.data
    )
  );
};
