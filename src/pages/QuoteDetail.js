import { Fragment } from "react";
import { useParams } from "react-router";
import { Route } from "react-router";
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES=[
  {id: 'q1', author: 'Bob', text: 'Learning is fun!'},
  {id: 'q2', author: 'Bill', text: 'React is awesome!'},
]

const QuoteDetail = () => {
  const params = useParams();
const quote=DUMMY_QUOTES.find(quote=>quote.id === params.quoteId)

if(!quote){
  return <p>No quote found.</p>
}

  return(
  <Fragment>
    <HighlightedQuote text={quote.text} author={quote.author}/>
    <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
    </Route>
  </Fragment>
  )
};

export default QuoteDetail;
