import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control 
        id="wd-username"
        placeholder="username"
        className="mb-2"
      /><br />
      <Form.Control 
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      /><br />
      <Button id="wd-signin-btn" className="btn btn-primary w-100 mb-2">
        Sign in
      </Button><br />
      <Link id="wd-signup-link" to="../Signup">Sign up</Link>
    </div>
  );
}
