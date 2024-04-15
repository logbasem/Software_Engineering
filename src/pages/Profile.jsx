import React, { useState } from "react";

{/*Issue #6, Ticket #1*/}

const Profile = () => {
  const profileImage =
    "https://oaidalleapiprodscus.blob.core.windows.net/private/org-shBjHQlqEqk6pmZXOCe1PL7Y/user-4GfLNmOgTe4zwPqvEACjJkbH/img-IVK6dnfFku0CCMdP6FPP1FBs.png?st=2024-04-07T20%3A24%3A26Z&amp;se=2024-04-07T22%3A24%3A26Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-04-07T00%3A29%3A14Z&amp;ske=2024-04-08T00%3A29%3A14Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=vdZfyngLzy5L3UM%2BHd/SIPmhd8FNJiMs97bz3FbsPrM%3D";
  const placeholderImage = "https://via.placeholder.com/100";
  const [lists, setLists] = useState([]);

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

      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-3">
            <div
              className="profile-card text-center bg-success text-white p-3"
              style={{ height: "100vh" }}
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
              <h3 className="mt-2">Joe Biden</h3>
              <p>Location: Biden House</p>
              <div className="list-group">
                {[
                  "Profile Settings",
                  "Location Settings",
                  "Manage Saved Lists",
                  "FAQ",
                ].map((item, index) => (
                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                    key={index}
                  >
                    <i className="fas fa-chevron-right"></i>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="content-section">
              <div className="d-flex justify-content-between">
                <h2 style={{ margin: "0 auto" }}>My saved lists:</h2>
              </div>
              {lists.map((list, index) => (
                <div key={index} className="list-box">
                  <h3 className="fs-4">{list.name}</h3>
                  {list.items.map((item, itemIndex) => (
                    <p className="mb-1" key={itemIndex}>
                      {item}
                    </p>
                  ))}
                  <p className="add-item" onClick={() => handleAddItem(index)}>
                    + Add item...
                  </p>
                </div>
              ))}
              <p className="mt-5 add-list" onClick={handleAddList}>
                + Add a list...
              </p>
            </div>
          </div>
          <div className="col-md-1 d-flex align-items-center pe-3 border-start border-5"></div>
          <div className="col-md-2 d-flex justify-content-between">
            <h2 className="content-section" style={{ margin: "0 auto" }}>
              Stores near me:
            </h2>
          </div>
        </div>
      </div>

      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </>
  );
};

export default Profile;
