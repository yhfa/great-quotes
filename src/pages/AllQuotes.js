import React from "react";
import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "jo", text: "Learing react is fun!" },
  { id: "q2", author: "joe", text: "Learing angular is fun!" },
  { id: "q3", author: "youssif", text: "Learing vue is fun!" },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_DATA} />;
}
