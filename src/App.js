import './App.css';
import Navbar from './navbar';
import Header from './header';
import Listing from './listing';
function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <div className='car-listings'>
        <Listing/>
        <Listing/>
        <Listing/>
        <Listing/>
      </div>
    </>
  );
}

export default App;
