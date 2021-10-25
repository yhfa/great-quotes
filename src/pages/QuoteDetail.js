import React, { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "./../components/comments/Comments";

export default function QuoteDetail() {
  const { quoteId } = useParams();
  return (
    <Fragment>
      <h1>Quote Details page</h1>
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments" component={Comments} />
    </Fragment>
  );
}
