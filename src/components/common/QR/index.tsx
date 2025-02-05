import QRCode from "react-qr-code";

const QRCodeCustom = () => {
  return (
    <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={"http://gutexpert.in/quiz"}
      viewBox={`0 0 256 256`}
    />
  );
};

export default QRCodeCustom;
