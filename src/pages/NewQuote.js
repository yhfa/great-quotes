import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "./../components/quotes/QuoteForm";

export default function NewQuote() {
  const history = useHistory();
  const addQuoteHandler = (quote) => {
    console.log(quote);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}
