// Issue #74 - Profile Settings Page
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import "../css-html/index.css";

const ProfileSettings = () => {
  // Fallback data
  const [userDataPage, setUserDataPage] = useState({
    first_name: "Joe",
    last_name: "Biden",
    username: "",
    userpassword: "",
    email: "",
  });

  // Holds user data from backend
  const [userDataBackend, setUserDataBackend] = useState(null);

  // Fct to fetch user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/users", {
          credentials: "include",
        });
        if (response.ok) {
          const json = await response.json();
          setUserDataBackend(json);
        } else {
          console.log(response.status);
          console.log("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // use user data from backend, else use fallback
  const userData = userDataBackend || userDataPage;

  // Fallback list
  const [listsPage, setListsPage] = useState([]);

  // Hold list from backend
  const [listsBackend, setListsBackend] = useState(null);

  // Fct to fetch list data
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch("http://localhost:3001/lists", {
          credentials: "include",
        });
        if (response.ok) {
          const json = await response.json();
          setListsBackend(json);
        } else {
          console.log(response.status);
          console.log("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLists();
  }, []);

  // Use list data, else use fallback
  const lists = listsBackend || listsPage;

  // Fct to delete list
  const handleDeleteList = async (listIndex) => {
    try {
      const response = await fetch(`http://localhost:3001/lists/${lists[listIndex].id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        const updatedLists = [...lists];
        updatedLists.splice(listIndex, 1);
        setListsBackend(updatedLists);
      } else {
        console.log(response.status);
        console.log("Failed to delete list");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Edit user info
  const handleEdit = (field, value) => {
    // Update corresponding field in the state
    if (field === "name") {
      const [firstName, lastName] = value.split(" ");
      setUserDataPage({ ...userDataBackend, first_name: firstName, last_name: lastName });
    } else {
      setUserDataPage({ ...userDataBackend, [field]: value });
    }
  };

  return (
    <div className="mt-2" style={{marginLeft:"150px", marginRight:"150px", backgroundColor: "var(--dark-color)", borderRadius: "10px", boxShadow: "4px 4px 8px var(--dark-color)" }}>

    <div className="pt-4 profile-settings" style={{ color: "var(--text-color)" ,textAlign: "center" }}>
      <h2 className="pb-2" >Edit Profile</h2>
      <Form>
        <Form.Group as={Row} className="text-sm-end" controlId="formName">
          <Form.Label column sm={3}>Name:</Form.Label>
          <Col sm={6}>
            <Form.Control 
              type="text" 
              value={`${userData.first_name} ${userData.last_name}`} 
              onChange={(e) => handleEdit("name", e.target.value)} 
            />
          </Col>
        </Form.Group>

        {userData.email && (
          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column sm={2}>Email:</Form.Label>
            <Col sm={8}>
              <Form.Control 
                type="email" 
                value={userData.email} 
                onChange={(e) => handleEdit("email", e.target.value)} 
              />
            </Col>
          </Form.Group>
        )}

        {userData.userpassword && (
          <Form.Group as={Row} controlId="formPassword">
            <Form.Label column sm={2}>Password:</Form.Label>
            <Col sm={8}>
              <Form.Control 
                type="password" 
                value={userData.userpassword} 
                onChange={(e) => handleEdit("userpassword", e.target.value)} 
              />
            </Col>
          </Form.Group>
        )}

        <Form.Group controlId="formLists" className="pt-5">
          <Form.Label>Your Lists:</Form.Label>
          {lists.map((list, index) => (
            <div key={index} className="d-flex align-items-center">
              <span>{list.name}</span>
              <Button variant="danger" size="sm" className="ml-2" onClick={() => handleDeleteList(index)}>
                <FaTrash />
              </Button>
            </div>
          ))}
        </Form.Group>

        <Button variant="success mb-4" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default ProfileSettings;