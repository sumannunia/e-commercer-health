import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleApiError = (error: any) => {
  if (axios.isCancel(error)) {
    return "Request canceled";
  } else if (error.response) {
    return error.response.data.message || "Something went wrong";
  } else if (error.code === "ECONNABORTED") {
    return "Request timeout, please try again";
  } else {
    return error.message || "An unknown error occurred";
  }
};
