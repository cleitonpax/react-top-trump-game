import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { SessionContext } from "../App";

function Home() {
  const session = React.useContext(SessionContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const payload = {
      ...session.payload,
      user: {
        ...session.payload.user,
        username: username,
        ip: "1.1.1.1",
      }
    };
    console.log(username, payload)

    if (session.socketRef.current && session.connected) {
      session.socketRef.current.send(JSON.stringify(payload));
    }

    navigate('/lobby');     
  };

  return (
    <div className="container p-3 d-flex align-items-center flex-column">
      <h1 className="text-center mb-5 text-white">React Top Trump</h1>
      <form
        onSubmit={handleFormSubmit}
        className="text-center d-flex flex-column"
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control text-center p-3"
            placeholder="Type your username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 btn-block btn-lg">
          Enter
        </button>
      </form>
      <footer className="text-center mb-5 text-white fixed-bottom opacity-50">
        2023 by @cleitonpax and @garusocruz
      </footer>
    </div>
  );
}

export default Home;
