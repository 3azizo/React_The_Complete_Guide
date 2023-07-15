import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";
const NewQuote = () => {
  const history = useNavigate();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
