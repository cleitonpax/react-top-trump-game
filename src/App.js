import React, { useState, useRef, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("ws://0.tcp.sa.ngrok.io:10856/ws/chat/lobby/");

    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connection established");
      setConnected(true);
    };

    socket.onmessage = (event) => {
      console.log("Received message:", event.data);
      setMessage(event.data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
      setConnected(false);
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (socketRef.current && connected) {
      socketRef.current.send(JSON.stringify({ username: username }));
    }
  };

  return (
    <div className="container rounded p-3 d-flex align-items-center flex-column">
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
      {connected && (
        <p className="text-center mt-5 text-success">
          Connected to server. Last message received: <strong>{message}</strong>
        </p>
      )}
      {!connected && (
        <p className="text-center mt-5 text-warning">Not connected to server</p>
      )}
    </div>
  );
}

export default App;
