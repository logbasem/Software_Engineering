
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../css-html/index.css";

const Profile = () => {
  const profileImage =
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-shBjHQlqEqk6pmZXOCe1PL7Y/user-4GfLNmOgTe4zwPqvEACjJkbH/img-IVK6dnfFku0CCMdP6FPP1FBs.png?st=2024-04-07T20%3A24%3A26Z&amp;se=2024-04-07T22%3A24%3A26Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-04-07T00%3A29%3A14Z&amp;ske=2024-04-08T00%3A29%3A14Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=vdZfyngLzy5L3UM%2BHd/SIPmhd8FNJiMs97bz3FbsPrM%3D";
  const placeholderImage = "https://via.placeholder.com/100";
  const [lists, setLists] = useState([]);
  
  const defaultUser = {first_name: "Joe", last_name: "Biden", username: "", userpassword: "", email: ""};
  const [userData, setUserData] = useState(defaultUser); //hold users information 
 

  //get logged in information from backend
  useEffect(() => {
    console.log('Use effect called');
    const fetchData = async () => {
      console.log('Fetch data called')
      try {
        const response = await fetch('http://localhost:3001/users', {credentials: 'include'});
        if (response.ok) {
          const json = await response.json();
          setUserData(json);
        }
        else {
          console.log(response.status);
          console.log('Something went wrong')
        }
      } catch(error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  const handleAddList = () => {
    const listName = prompt("Enter the name of the list:");
    if (listName) {
      const newList = {
        name: listName,
        items: [],
      };
      setLists([...lists, newList]);
    }
  };

  const handleAddItem = (listIndex) => {
    const itemName = prompt("Enter the name of the item:");
    if (itemName) {
      const updatedLists = [...lists];
      updatedLists[listIndex].items.push(itemName);
      setLists(updatedLists);
    }
  };

  return (
    <>
      <title>KYPer - Know Your Producer</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />

      <link rel="stylesheet" href="styles.css" />

      <div className="container-fluid"
      style={{
        backgroundColor: "var(--dark-color)",
      }}>
        <Row>
          <Col md={3}>
            <div
              className="profile-card text-center text-white p-3"
              style={{
                height: "100vh",
                backgroundColor: "var(--first-color)",
              }}
            >
              <img
                alt="Placeholder image of Joe Biden"
                className="img-fluid rounded-circle"
                src={profileImage || placeholderImage}
                onError={(e) => {
                  e.target.src = placeholderImage;
                }}
                height="100"
                width="100"
              />
              <h3 className="mt-2">{userData.first_name} {userData.last_name}</h3>
              <p>Location: Biden House</p>
              <div className="list-group">
                {[
                  { label: "Profile Settings", link: "/profile-settings" },
                  { label: "Location Settings", link: "/location-settings" },
                  { label: "Manage Saved Lists", link: "/manage-lists" },
                  { label: "FAQ", link: "/faq" },
                ].map((item, index) => (
                  <button
                    type="button"
                    className="list-group-item list-group-item-action"
                    onClick={() => (window.location.href = item.link)}
                    key={index}
                  >
                    <i className="fas fa-chevron-right"></i>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="content-section  pt-4">
              <div className="d-flex justify-content-between">
                <h2 style={{ margin: "0 auto", color: "var(--light-color)" }}>My saved lists:</h2>
              </div>
              {lists.map((list, index) => (
                <div key={index} className="list-box">
                  <h3 className="fs-4" style={{color: "var(--light-color)" }}>{list.name}</h3>
                  {list.items.map((item, itemIndex) => (
                    <p className="mb-1" style={{color: "var(--light-color2)" }} key={itemIndex}>
                      {item}
                    </p>
                  ))}
                  <p className="add-item" style={{color: "var(--light-color)" }} onClick={() => handleAddItem(index)}>
                    + Add item...
                  </p>
                </div>
              ))}
              <p className="mt-5 add-list" style={{color: "var(--light-color)" }} onClick={handleAddList}>
                + Add a list...
              </p>
            </div>
          </Col>
          <Col
            md={1}
            className="d-flex align-items-center pe-3 border-start border-5 border-success "
          ></Col>
          <Col md={2} className="d-flex justify-content-between pt-4">
            <h2 className="content-section" style={{ margin: "0 auto", color: "var(--light-color)" }}>
              Stores near me:
            </h2>
          </Col>
        </Row>
      </div>

      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </>
  );
};

export default Profile;