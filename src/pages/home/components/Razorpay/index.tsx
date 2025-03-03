import axios from "axios";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { usePost } from "../../../../hooks/usePost";

const RazorpayPayment = ({ amount }: { amount: number }) => {
  const { loading, error, postData } = usePost();
  const loadRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      notifications.show({
        message: "Razorpay SDK failed to load. Check your connection!",
        color: "red",
      });
      return;
    }

    try {
      // 📌 1️⃣ **Create Order from Backend**
      //   const { data } = await axios.post("/api/payment/order", { amount });
      postData("/order/create", {}).then((resp) => {
        console.log({ resp });
      });

      // 📌 2️⃣ **Configure Razorpay Checkout**
      const options = {
        key: import.meta.env.VITE_REACT_APP_RAZORPAY_KEY_ID, // ✅ From .env file
        amount: data.amount,
        currency: data.currency,
        name: "Your Company Name",
        description: "Order Payment",
        order_id: data.id, // Razorpay Order ID
        handler: async function (response: any) {
          // 📌 3️⃣ **Verify Payment Signature**
          const verifyRes = await axios.post("/api/payment/verify", response);

          if (verifyRes.data.success) {
            notifications.show({
              message: "Payment Successful!",
              color: "green",
            });
          } else {
            notifications.show({
              message: "Payment Verification Failed!",
              color: "red",
            });
          }
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      notifications.show({
        message: "Something went wrong! Try again.",
        color: "red",
      });
      console.error(error);
    }
  };

  return <Button onClick={loadRazorpay}>Pay ₹{amount}</Button>;
};

// 📌 **Utility Function: Load Razorpay Script**
const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default RazorpayPayment;
