import React from "react";
import { SessionContext } from "../App";

function Card() {
  const session = React.useContext(SessionContext);

  return (
    <div className="container p-3 d-flex align-items-center flex-column text-white">
      <div className="text-center mb-5 mt-3 fixed-top">React Top Trump</div>
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

export default Card;
