"use client";
import React, { useState } from "react";
import { CSVLink } from "react-csv";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const csvData = [
    ["name", "age", "email"],
    ["John Doe", "30", "john@example.com"],
    ["Jane Smith", "25", "jane@example.com"],
  ];

  return (
    <div
      className="flex justify-center items-center pb-10"
      style={{
        padding: "20px",
        height: "100vh",
        width: "100vw",
      }}
    >
      {!isAuthenticated ? (
        <div className="flex flex-col justify-center">
          <h2 className="text-xl text-center mb-4">Sign In</h2>
          <div className="p-1">
            <label className="text-sm px-2">
              Username:
              <input
                className="border p-1 rounded-sm ml-1"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="p-1">
            <label className="text-sm px-2">
              Password:
              <input
                className="border p-1 rounded-sm ml-1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button
            className="bg-blue-500 text-sm text-white px-2 py-1 rounded mt-4"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <CSVLink data={csvData} filename={"data.csv"}>
            <button>Download CSV</button>
          </CSVLink>
        </div>
      )}
    </div>
  );
};

export default HomePage;
