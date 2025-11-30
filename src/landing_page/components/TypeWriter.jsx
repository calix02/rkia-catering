import { useState, useEffect } from "react";

function Typewriter({ message }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
 

  useEffect(() => {
    let timeout;

    if (index < message.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [index, message]);

  return (
    <p className={`poppins lg:text-start text-center lg:mt-10 mt-5  lg:w-160 lg:text-lg text-sm text-black`}>
      {displayedText}
    </p>
  );
}

export default Typewriter;
