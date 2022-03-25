import React, { useState } from "react";

import { quoteObj } from "./list";

function RandomQuote() {
  const [quote,setQuote] = useState('Life is like riding a bicycle. To keep your balance, you must keep moving.');
  const [author,setAuthor] = useState('Albert Einstein');

  const handleRandom = () => {
    const randomQuote = Math.floor(Math.random() * 9)
    setQuote(quoteObj[randomQuote].quote);
    setAuthor(quoteObj[randomQuote].author);
  }

  return (
    <>
      <h2>{quote}</h2>
      <h2>{author}</h2>

      <button
      onClick={handleRandom}
      > Next</button>
    </>
  )
}

export default RandomQuote