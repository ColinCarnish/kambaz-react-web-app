import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import * as client from "./client";
import { setCurrentUser } from "../Account/reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) {
        setError("Invalid username or password.");
        return;
      }
      dispatch(setCurrentUser(user));
      navigate("/Kambaz/Account/Profile");
    } catch (err) {
      setError("An error occurred during sign-in. Please try again.");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <Alert variant="danger">{error}</Alert>} {}
      <Form.Control
        type="text"
        placeholder="Username"
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="mb-2"
      />
      <Form.Control
        type="password"
        placeholder="Password"
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="mb-2"
      />
      <Button
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-2"
        onClick={signin}
      >
        Sign in
      </Button>
      <Link id="wd-signup-link" to="../Signup">Sign up</Link>
    </div>
  );
}