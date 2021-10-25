import React, { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "jo", text: "Learing react is fun!" },
  { id: "q2", author: "joe", text: "Learing angular is fun!" },
  { id: "q3", author: "youssif", text: "Learing vue is fun!" },
];

export default function QuoteDetail() {
  const { quoteId } = useParams();
  const quote = DUMMY_DATA.find((q) => q.id === quoteId);
  if (!quote) return <p>No quote found!</p>;
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path="/quotes/:quoteId/comments" component={Comments} />
    </Fragment>
  );
}
