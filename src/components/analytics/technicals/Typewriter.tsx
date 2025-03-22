import { useEffect, useState } from "react";

const Typewriter = ({
  message,
  speed = 38,
}: {
  message: string;
  speed?: number;
}) => {
  const [typedText, setTypedText] = useState("");

  // Type out the message with specified speed
  useEffect(() => {
    const messageToType = message.split("");
    let index = 0;
    setTypedText(messageToType[0]);

    const intervalId = setInterval(() => {
      index++;
      if (index < messageToType.length) {
        setTypedText((prevText) => prevText + messageToType[index]);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    // Cleanup the interval on component unmount or when message changes
    return () => clearInterval(intervalId);
  }, [message, speed]);

  return (
    <div className="typewriter">
      <span className="px-3 text-gray-700">{typedText}</span>
    </div>
  );
};

export default Typewriter;
