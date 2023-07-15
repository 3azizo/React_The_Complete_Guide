import React from "react";
import { useParams, Outlet } from "react-router-dom";
import DUMMY_QUOTES from "../DUMMY_QUOTES";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <h1>No qoute found</h1>;
  }
  console.log(params, quote);
  return (
    <>
      <HighlightedQuote {...quote} />
      <Outlet />
    </>
  );
};

export default QuoteDetail;
