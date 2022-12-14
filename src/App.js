import './App.css';
import { useState } from "react";
import Navbar from './navbar';
import Header from './header';
import Listing from './listing';
function App() {
  const [chatwindow, setchatwindow] = useState(true);
  function showchat() {
    setchatwindow(!chatwindow);
    console.log(chatwindow);
  }

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
          <Listing/>
          <Listing/>
          <Listing/>
          <Listing/>
        </div>
        <div className={chatwindow ? 'chat-icon' : 'chat-icon-minimise'}>
          <i onClick={showchat} className="fa-regular fa-comment-dots"></i>
        </div>
        <div className={chatwindow ? 'chat-window-noshow' : 'chat-window'}>
          <i onClick={showchat} class="fa-solid fa-angle-down"></i>
          <iframe onClick={showchat} className = "chatframe" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/164ede99-ea27-42d5-a93c-d75c5305de5e"></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
