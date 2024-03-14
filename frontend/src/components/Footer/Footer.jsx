import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Md.Abdul Hafiz Bhuiyan. I am a Software Engineer.{" "}
          <br />
          <b>MERN Stack Developer</b>
          <br />
          <b>Frontend Developer</b> <br />
          <b>React JS Developer</b> <br />
          <b>Node JS Developer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/MdHafizBhuiyan" target="black">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/hafiz-bhuiyan/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/hafiztonoy" target="black">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/abdulhafizbhuiyan/" target="black">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/mdhafiz_bhuiyan" target="black">
          <BsTwitterX />
        </a>
      </div>
    </div>
  );
};

export default Footer;
