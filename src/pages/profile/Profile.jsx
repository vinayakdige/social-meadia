import "./profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../../context/authContext";
import React, { useContext } from "react";
import { Email, EmailOutlined } from "@mui/icons-material";
import Posts from "../../components/posts/Posts";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="profile">
      <div className="images">
      <img
        src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
        alt=""
        className="cover"
      />
      <img src={currentUser.profilepic} alt="" className="profilepic"/>
      </div>
      <div className="profilecontainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/" >
              <FacebookIcon  fontSize="large"/>
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href="https://in.pinterest.com/">
              <PinterestIcon fontSize="large"/>
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <span>john doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Besocial.dev</span>
              </div>
             
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
     
    </div>
  );
};

export default Profile;
