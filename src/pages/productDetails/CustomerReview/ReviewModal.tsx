import React, { useState } from "react";
import {
  Modal,
  Rating,
  TextInput,
  Textarea,
  Button,
  Text,
} from "@mantine/core";

interface ReviewModalProps {
  opened: boolean;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ opened, onClose }) => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");

  const handleSubmitReview = () => {
    console.log({
      rating,
      reviewTitle,
      reviewBody,
    });
    onClose(); // Close modal after submission
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Write a Product Review"
      centered
    >
      <Text fw={600} mb="sm">
        Your Rating
      </Text>
      <Rating value={rating} onChange={setRating} size="lg" mb="md" />
      <TextInput
        label="Review Title"
        placeholder="Enter a title for your review"
        value={reviewTitle}
        onChange={(e) => setReviewTitle(e.target.value)}
        mb="md"
      />
      <Textarea
        label="Review Body"
        placeholder="Write your review here"
        value={reviewBody}
        onChange={(e) => setReviewBody(e.target.value)}
        minRows={4}
      />
      <Button fullWidth mt="md" onClick={handleSubmitReview}>
        Submit Review
      </Button>
    </Modal>
  );
};

export default ReviewModal;
