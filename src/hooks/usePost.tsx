/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

import { notifications } from "@mantine/notifications";
import axiosInstance from "../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface UsePostReturn<T> {
  loading: boolean;
  error: string | null;
  success: boolean;
  data: T | null;
  postData: (url: string, body: any) => Promise<void>;
}

export const usePost = <T = unknown,>(): UsePostReturn<T> => {
  const token = useSelector((state: RootState) => state?.auth?.user?.token);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const postData = useCallback(
    async (url: string, body: any) => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const response = await axiosInstance.post(url, body, {
          headers: {
            token: `${token}`,
          },
        });

        setData(response.data);
        setSuccess(true);
        notifications.show({
          title: "Success",
          message: "Request was successful!",
          color: "green",
        });
        return response?.data;
      } catch (err: any) {
        setError(err);
        notifications.show({
          title: "Error",
          message: "Failed to post data. Please try again later.",
          color: "red",
        });
        return err;
      } finally {
        setLoading(false);
      }
    },
    [token]
  );

  return { loading, error, success, data, postData };
};
