import React, { useState } from "react";

export const Feedback: React.FC<{ onSubmit: (rating: number, comment?: string) => void }> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    onSubmit(rating, comment);
    setSubmitted(true);
  };

  if (submitted) {
    return <div>Спасибо за отзыв!</div>;
  }

  return (
    <div style={{ marginTop: "16px" }}>
      <p>Оценить ответ:</p>
      <div style={{ display: "flex", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "24px",
              color: (hover || rating) >= star ? "gold" : "lightgray",
              marginRight: "5px",
            }}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      {rating > 0 && (
        <div style={{ marginTop: "10px" }}>
          <textarea
            placeholder="Комментарий (не обязательно)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ width: "100%", minHeight: "60px" }}
          />
          <button onClick={handleSubmit} style={{ marginTop: "8px" }}>
            Отправить
          </button>
        </div>
      )}
    </div>
  );
};
