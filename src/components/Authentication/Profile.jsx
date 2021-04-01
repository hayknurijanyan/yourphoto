import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  function updateProfile() {
    currentUser
      .updateProfile({
        displayName: "Jane Q. User",
      })
      .then(function () {
        alert("done");
      })
      .catch(function (error) {
        alert("failed");
      });
  }

  return (
    <>
      {console.log(currentUser)}
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <div>
                <strong>Name: </strong> {currentUser.displayName}
              </div>
              <div>
                <strong>Email: </strong> {currentUser.email}
              </div>
              <Link
                onClick={updateProfile}
                to="/update-profile"
                className="btn btn-primary w-100 mt-3">
                Edit Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
