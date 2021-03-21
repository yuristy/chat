import React from 'react'
import io from 'socket.io-client'

function App() {
  const connectSocket = () => {
    io('http://localhost:9999');
  };

  return (
    <div className="wrapper">
      <div className="join-block">
        <input type="text" placeholder="Room ID" value=""></input>
        <input type="text" placeholder="Ваше имя" value=""></input>
        <button class="btn btn-success">ВОЙТИ</button>
      </div>
    </div>
  );
}

export default App;
