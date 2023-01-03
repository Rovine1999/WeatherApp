
import Search from './components/search/search';
import './App.css';

function App() {

  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
     <Search OnSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
