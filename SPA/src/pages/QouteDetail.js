import React, { useState } from "react";
import { useParams, Outlet, Link } from "react-router-dom";

import DUMMY_QUOTES from "../DUMMY_QUOTES";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetail = () => {
  const [showComments, setShowComments] = useState(false);
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <h1>No qoute found</h1>;
  }
  return (
    <>
      <HighlightedQuote {...quote} />
      {!showComments && (
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/quotes/${quote.id}/comment`}
            onClick={() => setShowComments(true)}
          >
            load comments
          </Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default QuoteDetail;
