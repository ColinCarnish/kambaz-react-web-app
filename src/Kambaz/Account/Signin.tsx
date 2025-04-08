import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import * as client from "./client";
import { setCurrentUser } from "../Account/reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Account/Profile");
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <Form.Control
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
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
