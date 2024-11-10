/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useEffect } from "react";

import { notifications } from "@mantine/notifications";
import axiosInstance from "../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useFetch = <T = unknown,>(url: string): UseFetchReturn<T> => {
  const token = useSelector((state: RootState) => state?.auth?.user?.token);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get(url, {
        headers: {
          token: `${token}`,
        },
      });
      setData(response.data);
      console.log({ response });
    } catch (error: any) {
      if (error?.status === 302) {
        setData(error?.response?.data);
      }
      setError({ error });
      console.log({ error });
      notifications.show({
        title: "Error",
        message: "Failed to fetch data. Please try again later.",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  }, [url, token, notifications]);

  // Call fetchData on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
