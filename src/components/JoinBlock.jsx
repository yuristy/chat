import React from 'react';
import socket from '../socket';

function JoinBlock() {
    return (
        <div className="join-block">
            <input type="text" placeholder="ID комнаты"></input>
            <input type="text" placeholder="Ваше имя"></input>
            <button className="btn btn-success">ВОЙТИ</button>
        </div>
    )
}

export default JoinBlock;