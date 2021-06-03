import React from 'react';
import axios from 'axios';

function JoinBlock({ onLogin }) {
  const [roomId, setRoomId] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Неверные данные');
    }

    const obj = {
      roomId,
      userName,
    };

    setLoading(true);
    await axios.post('https://kindachat.herokuapp.com/rooms', obj);
    onLogin(obj);
  };

  return (
    <div className="join-block">
      <h1>Kindachat</h1>
      <h2>Kinda works ¯\_(ツ)_/¯</h2>
      <input
        type="text"
        placeholder="ID комнаты"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        disabled={isLoading}
        onClick={onEnter}
        className="btn btn-success"
      >
        {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
      </button>
    </div>
  );
}

export default JoinBlock;
