import React from "react";
import { SessionContext } from "../App";

function Board() {
  const session = React.useContext(SessionContext);
  const name =
    session.payload && session.payload.user && session.payload.user.username;
  const counter =
    (session.payload &&
      session.payload.channel &&
      session.payload.channel.userCounter) ||
    0;

  React.useEffect(() => {
    console.log("session.payload", session.payload)
  }, [session.payload]);

  return (
    <div className="container p-3 d-flex align-items-center flex-column text-white">
      <div className="text-center mb-5 mt-3 fixed-top">React Top Trump</div>
      <h4 className="text-center mb-5">{name}</h4>
      <div className="row">
        <p className="text-center mb-0" style={{ fontSize: "80px" }}>
          {counter}
        </p>
        <p className="text-center mb-2">users are waiting to play</p>
      </div>
      <footer className="text-center mb-0 fixed-bottom">
        <button
          type="button"
          className="btn btn-success border-0 text-white rounded-0 p-3 mt-3 btn-block btn-lg w-100"
        >
          PLAY
        </button>
      </footer>
    </div>
  );
}

export default Board;
