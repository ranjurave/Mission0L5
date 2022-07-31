import './App.css';
import Navbar from './navbar';
import Header from './header';
import Listing from './listing';
function App() {
  return (
    <>
      <div className='page-body'>
        <div className='nav-header'>
          <Navbar/>
          <Header/>
        </div>
        <div className='car-listings'>
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
        </div>
      </div>
    </>
  );
}

export default App;
