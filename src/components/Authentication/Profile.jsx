import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { signOut } from "../../actions";

const Profile = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  let displayName = currentUser.displayName ? currentUser.displayName : "Guest";
  let displayEmail = currentUser.email ? currentUser.email : "Not provided";

  async function handleLogout() {
    setError("");

    try {
      await logout();
      dispatch(signOut());
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  function editProfile() {
    // currentUser
    //   .updateProfile({
    //     displayName: "Jane Q. User",
    //   })
    //   .then(function () {
    //     alert("done");
    //   })
    //   .catch(function (error) {
    //     alert("failed");
    //   });
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <div>
                <strong>Name: </strong> {displayName}
              </div>
              <div>
                <strong>Email: </strong> {displayEmail}
              </div>
              <div>
                <strong>ID: </strong> {currentUser.uid}
              </div>
              <Link to="/profile">
                <Button
                  disabled={true}
                  onClick={editProfile}
                  className="btn btn-primary w-100 mt-3">
                  Edit Profile
                </Button>
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
