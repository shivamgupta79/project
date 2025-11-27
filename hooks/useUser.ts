import useSWR from "swr";
import { fetcher } from "../lib/api";

export default function useUser() {
  const { data, error } = useSWR("/api/auth/me", fetcher);
  return {
    user: data?.user,
    loading: !error && !data,
    error
  };
}
