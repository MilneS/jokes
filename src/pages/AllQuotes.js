import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES=[
  {id: 'q1', author: 'Bob', text: 'Learning is fun!'},
  {id: 'q2', author: 'Bill', text: 'React is awesome!'},
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;
