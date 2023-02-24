import React, { useState, useRef, createContext, useEffect } from "react";
import RoutesComponent from "./routes";

export const SessionContext = createContext();

function App() {
  const socketRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [payload, setPayload] = useState({
    route: "signIn",
    user: {
      username: null,
      ip: null,
      id: null,
    },
    channel: { 
      name: null,
      users: null,
      id: null,
      userCounter: null,
    },
    users: [],
    channels: [],
  });
  const [session, setSession] = useState({ socketRef, connected, payload });

  useEffect(() => {
    const socket = new WebSocket("ws://0.tcp.sa.ngrok.io:15392/ws/chat/lobby/");

    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connection established");
      setConnected(true);
    };

    socket.onmessage = (event) => {
      console.log("Received message:", event.data);
      setPayload(event.data);
      // setSession({ socketRef, connected, payload });
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

  return (
    <SessionContext.Provider value={session}>
      <RoutesComponent />
      {connected && (
        <p className="text-center mt-5 text-success">Connected to server</p>
      )}
      {!connected && (
        <p className="text-center mt-5 text-warning">Not connected to server</p>
      )}
    </SessionContext.Provider>
  );
}

export default App;
