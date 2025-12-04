import React from "react";
import ActionLogger from "./components/ActionLogger";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Behaviour Tracker</h1>
      <ActionLogger />
    </div>
  );
};

export default App;
