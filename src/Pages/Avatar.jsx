import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { IoMdAdd } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import AvatarModal from "../component/AvatarModal";

const Avatar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);

  const handleAddUser = (name) => {
    setUser([...user, name]);
    setModalShow(false);
  };

  const handleRemoveUser = (index) => {
    setUser(user.filter((_, i) => i !== index));
  };

  console.log(user);

  return (
    <div className="container page-min-height">
      <div className="row">
        <AvatarModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onAddUser={handleAddUser}
        />
        <h1>Avatar</h1>
        <Card className="avatar d-flex align-items-center justify-content-center">
          <Card.Body>
            <div className="avatar__items-wrapper d-flex align-items-center">
              <ul className="avatar__items list-unstyled mb-0">
                {user.map((name, index) => (
                  <li key={index} className="avatar__item avatar__circle">
                    {name.charAt(0).toUpperCase()}
                    <span className="position-absolute end-0">
                      <IoCloseCircle onClick={() => handleRemoveUser(index)} />
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="avatar__create avatar__circle"
                onClick={() => setModalShow(true)}
              >
                <IoMdAdd />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Avatar;
