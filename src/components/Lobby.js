import React from "react";
import { SessionContext } from "../App";

function Lobby() {
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
      <h1 className="text-center mb-5">React Top Trump</h1>
      <h4 className="text-center mb-5">Welcome {name}</h4>
      <div className="row">
        <p className="text-center mb-0" style={{ fontSize: "80px" }}>
          {counter}
        </p>
        <p className="text-center mb-2">users are waiting to play</p>
        <button
          type="submit"
          className="btn btn-success text-white p-3 mt-3 btn-block btn-lg"
        >
          PLAY
        </button>
      </div>
      <footer className="text-center mb-5 fixed-bottom opacity-50">
        2023 by @cleitonpax and @garusocruz
      </footer>
    </div>
  );
}

export default Lobby;
