import { useState, useEffect } from "react";

const TypeWriter = ({
  words = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
  className = "",
  cursorClassName = "",
}) => {
  const [index, setIndex] = useState(0);
  const [subindex, setSubindex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    // When word fully typed → wait → start deleting
    if (subindex === words[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    // When word fully deleted → move to next word
    if (subindex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubindex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subindex, index, deleting, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={className}>
      {words[index]?.substring(0, subindex)}
      <span
        className={`inline-block w-0.5 ml-1 animate-pulse ${cursorClassName}`}
        style={{ height: "1em", background: "currentColor" }}
      />
    </span>
  );
};

export default TypeWriter;
