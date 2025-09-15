import React, { useState, useEffect } from "react";

const Placeholder=({text="Search for books"}) => {
  const [placeholder,setPlaceholder]=useState("");
  const [index,setIndex]=useState(0);
  useEffect(()=>{
    if (index<text.length){
      const timeout = setTimeout(() => {
        setPlaceholder((prev) => prev + text[index]);
        setIndex(index+1);
      }, 150);
      return ()=>clearTimeout(timeout);
    }
  },[index,text]);
  return placeholder;
};

export default Placeholder;