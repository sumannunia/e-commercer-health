/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

import { notifications } from "@mantine/notifications";
import axiosInstance from "../utils/axiosInstance";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { AxiosResponse } from "axios";

interface UseDeleteReturn {
  loading: boolean;
  error: string | null;
  success: boolean;
  deleteData: (url: string) => Promise<AxiosResponse<any, any>>;
}

export const useDelete = (): UseDeleteReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const token = useSelector((state: RootState) => state?.auth?.user?.token);
  const deleteData = useCallback(
    async (url: string) => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const data = await axiosInstance.delete(url, {
          headers: {
            token: `${token}`,
          },
        });

        setSuccess(true);
        notifications.show({
          title: "Success",
          message: "Item successfully deleted",
          color: "green",
        });
        return data;
      } catch (_: any) {
        setError(_);
        notifications.show({
          title: "Error",
          message: "Failed to delete item. Please try again.",
          color: "red",
        });
        throw new Error(_);
      } finally {
        setLoading(false);
      }
    },
    [token]
  );

  return { loading, error, success, deleteData };
};
