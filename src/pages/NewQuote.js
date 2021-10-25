import React from "react";
import QuoteForm from "./../components/quotes/QuoteForm";

export default function NewQuote() {
  const addQuoteHandler = (quote) => {
    console.log(quote);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
