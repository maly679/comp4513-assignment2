import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Modal from "react-modal";
//import ProfileModal from "react-modal";
import { Button, Modal, Menu, Divider } from 'antd';
import { UserOutlined, LogoutOutlined, PaperClipOutlined} from '@ant-design/icons';


const { SubMenu } = Menu;


const HeaderBar = (props) => {
  
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isAboutModalVisible, setIsAboutModalVisible] = useState(false);
  
  const showProfileModal = () => {
    setIsProfileModalVisible(true);
  };
  
  const handleProfileClose = () => {
    setIsProfileModalVisible(false);
  };
  
  const showAboutModal = () => {
    setIsAboutModalVisible(true);
  };
  
  const handleAboutClose = () => {
    setIsAboutModalVisible(false);
  };
  
  const userAPILink = `http://comp4513-assignment2.herokuapp.com/api/user/${props.userData.id}`;  
  const current = 'menu';
  
  return (
    <div id="headerBar">
    <div id="homeLogoButton">
    <Link to="/">
    <img src="https://img.icons8.com/office/40/000000/home--v1.png"/>
    </Link>
    </div>
    
    
    <Menu id="menuDropdown" selectedKeys={[current]} mode="horizontal">
    <SubMenu key="SubMenu" icon={<img src="https://img.icons8.com/office/40/000000/menu--v1.png"/>}>
    <Menu.Item key="profile" onClick={showProfileModal} icon={ <UserOutlined/> }>Profile</Menu.Item>
    <Menu.Item key="about" onClick={showAboutModal} icon={<PaperClipOutlined/>}> About </Menu.Item>
    <Divider/>
    <Menu.Item key="logout" onClick={props.logout} icon={<LogoutOutlined />}> Logout </Menu.Item>
    </SubMenu>
    </Menu>
    
    
    <Modal title="About Us" className="aboutModal" visible={isAboutModalVisible} onCancel={handleAboutClose} 
    footer={[ <Button key="close" onClick={handleAboutClose}> Close </Button> ]}>
    <h2>Team Members</h2>
    <p>Anro Tran</p>
    <p>Peter Huang</p>
    <p>Mohamed Aly</p>
    <h2>Github Repo</h2>
    <a href="https://github.com/phuan516/comp4513-assignment1">
    <p>Link to Repository</p>
    </a>
    <h2> Links to APIs </h2>
    
    
    <a href='http://comp4513-assignment2.herokuapp.com/api/list'>
    <p>Full List of Plays</p>
    </a>
    <a href='http://comp4513-assignment2.herokuapp.com/api/play/alls_well_that_ends_well'>
    <p>Specefic Plays</p>
    </a>
    <a href= {userAPILink}>
    <p>Logged in User</p>
    </a>
    <h2>Reference Links</h2>
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
    <a href ="https://expressjs.com/en/resources/middleware/cors.html">
    <p>Express cors</p>
    </a>
    </Modal>
    
    
    
    
    <Modal title="Profile" className="profileModal" visible={isProfileModalVisible} onCancel={handleProfileClose} 
    footer={[ <Button key="close" onClick={handleProfileClose}> Close </Button> ]}>
    <p id="profileimg"> <img src = {props.userData.picture.thumbnail}/> </p>
    <br/>
    <h1>{props.userData.details.firstname + " "}{props.userData.details.lastname}</h1>
    <h2>{props.userData.details.city + ", "} {props.userData.details.country}</h2>
    <h2>{"Date joined: " + props.userData.membership.date_joined}</h2>
    </Modal>
    
    </div>
    );
  };
  
  export default HeaderBar;
  