import { Link } from "react-router-dom";
import { Form, Button} from "react-bootstrap";

export default function Signup() {
  return (
    <div>
      <h1 className="text-center">Sign Up</h1>
      <Form.Group className="mb-2">
        <Form.Control placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Button 
        variant="primary" 
        className="w-100 mb-2"
      >
        Sign up
      </Button>
      <div className="text-center">
        <Link to="/Kambaz/Account/Signin">Sign in</Link>
      </div>
    </div>
  );
}
