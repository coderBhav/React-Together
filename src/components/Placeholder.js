import React, { useState, useEffect } from "react";

const Placeholder = ({text}) => {
  const words = ["S","e","a","r","c","h"," ", "b","o","o","k","s"];
  const [placeholder, setPlaceholder] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder((prev) => prev + (prev ? " " : "") + words[wordIndex]);
      setWordIndex((prev) => prev + 1);
    }, 150);

    if (wordIndex >= words.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [wordIndex]);

  return placeholder;
};

export default Placeholder;