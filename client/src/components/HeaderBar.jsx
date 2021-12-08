import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ProfileModal from "react-modal";

const HeaderBar = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  
  const openProfileModal = () => {
    setProfileModalIsOpen(true);
  }
const closeProfileModal = () => {
  setProfileModalIsOpen(false);
}
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="headerBar">
      <div id="homeLogoButton">
        <Link to="/">
        <img src="https://img.icons8.com/office/30/000000/home--v1.png" alt="homeLogo"/>
        </Link>
      </div>

      <div id="profileButton">
      <button onClick={openProfileModal} type="button">
          Profile
      </button>
      </div>
      <div id="profileButton">
      <button onClick={props.logout} type="button">
          logout
      </button>
      </div>
      <div id="aboutButton">
        <button onClick={openModal} type="button">
          About
        </button>
      </div>
      
      <Modal id="modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button id="modalButton" onClick={closeModal}>close</button>
        <div id="modalBackground">
          <h1>About</h1>
          <h3>Team Members</h3>
          <p>Anro Tran</p>
          <p>Peter Huang</p>
          <p>Mohamed Aly</p>
          <h3>Github Repo</h3>
          <a href="https://github.com/phuan516/comp4513-assignment1">
            <p>Link to Repository</p>
          </a>

          <h3>Reference Links</h3>
          <a href="https://blog.logrocket.com/how-to-build-tab-component-react/">
          <p>Building your own tab components</p>
            </a>

            <a href="https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react">
          <p>How to hide or show elements in react</p>
            </a>
            <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar">
          <p>Custom scrollbars with webkit</p>
            </a>
            <a href="https://www.w3schools.com/howto/howto_css_full_page.asp">
          <p>How to add full page background image</p>
            </a>

            <a href="https://stackoverflow.com/questions/4137255/checkboxes-in-web-pages-how-to-make-them-bigger">
              <p>How to make checkboxes bigger with webkit</p> 
            </a>

        </div>
      </Modal>
      <ProfileModal id ="modal" isOpen={profileModalIsOpen} onRequestClose={closeProfileModal}>
      <div>
        <img src = {props.userData.picture.thumbnail}/> 
        <h1>{props.userData.details.firstname}</h1>
        <h2>{props.userData.details.lastname}</h2>
        <h2>{props.userData.details.city}</h2>
        <h2>{props.userData.details.country}</h2>
        <h2>{props.userData.membership.date_joined}</h2>

      
      </div>

      </ProfileModal>
    </div>
  );
};

export default HeaderBar;
