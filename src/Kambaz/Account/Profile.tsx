import { Form, Button} from "react-bootstrap";

export default function Profile() {
  return (
    <div>
      <h1 className="text-center">Profile</h1>
      <Form.Group className="mb-2">
        <Form.Control defaultValue="alice" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control defaultValue="123" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control defaultValue="Alice" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control defaultValue="Wonderland" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control defaultValue="mmmm-dd-yy" type="date" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control defaultValue="alice@wonderland" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control defaultValue="User" type="user" placeholder="Role" />
      </Form.Group>
      <Button 
        variant="danger" 
        className="w-100"
      >
        Sign out
      </Button>
    </div>
  );
}
