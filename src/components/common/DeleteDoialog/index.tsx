import { Modal } from "@mantine/core";

const DeleteDialog = ({ children, isOpened, onClose }: any) => {
  return (
    <Modal
      size={"md"}
      centered
      opened={isOpened}
      onClose={onClose}
      withCloseButton={false}
    >
      {children}
    </Modal>
  );
};

export default DeleteDialog;
