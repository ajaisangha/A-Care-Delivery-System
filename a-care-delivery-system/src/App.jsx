// App.jsx
import { useState } from "react";
import Home from "./Home"; // your Home component

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (username === "ajai" && password === "ajai") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
        <button type="submit" style={{ padding: "10px", borderRadius: "4px", backgroundColor: "#4CAF50", color: "white", border: "none" }}>Login</button>
      </form>
    </div>
  );
};

export default App;
