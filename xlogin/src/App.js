import { useState } from "react";

export default function App() {
  const [obj, setObj] = useState({ username: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj((prevObj) => ({ ...prevObj, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.username === "admin" && obj.password === "admin") {
      setErr("");
      setIsSubmitted(true);
    } else {
      setErr("Incorrect username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {obj.username}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {err && <p className="err">{err}</p>}
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              name="username"
              value={obj.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={obj.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
