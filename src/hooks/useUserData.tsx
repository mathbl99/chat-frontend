import { useQuery } from "@tanstack/react-query";
import fetchUserData from "../services/fetchUserData";


export default function useUserData<T>(token: string | null) {
  const query = useQuery({
    queryFn: () => fetchUserData<T>(token),
    queryKey: ['user-data'],
    retry: false,
    refetchOnWindowFocus: false,
  })

  return {
    ...query,
    data: query.data?.data
  };
}