import React from 'react';

import socket from './socket';

import reducer from './reducer';
import JoinBlock from './components/JoinBlock';

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
  });

  const onLogin = () => {
    dispatch({
      type: 'JOINED',
      payload: true,
    });
  };

  console.log(state);

  return (
    <div className="wrapper">
      {!state.joined && <JoinBlock onLogin={onLogin} />}
    </div>
  );
}

export default App;
