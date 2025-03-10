// import axios from "axios";
import { Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { usePost } from "../../../../hooks/usePost";

const RazorpayPayment = ({ amount }: { amount: number }) => {
  const { postData } = usePost();
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
      postData("/order/create", {}).then((resp: any) => {
        console.log({ resp });
        const options = {
          key: import.meta.env.VITE_REACT_APP_RAZORPAY_KEY_ID, // ✅ From .env file
          amount: resp.amount,
          currency: resp.currency,
          name: "Gut Expert",
          description: "Order Payment",
          order_id: resp.razorpayOrderId, // Razorpay Order ID
          method: "upi",
          handler: async function (response: any) {
            console.log({ response });
            const body = {
              razorpayOrderId: resp.razorpayOrderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: "",
            };
            // 📌 3️⃣ **Verify Payment Signature**
            postData("/api/order/confirm", body).then((resp) => {
              console.log({ resp });
              notifications.show({
                message: "Payment Successful!",
                color: "green",
              });
              notifications.show({
                message: "Payment Verification Failed!",
                color: "red",
              });
            });
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
      });

      //   📌 2️⃣ **Configure Razorpay Checkout**
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
