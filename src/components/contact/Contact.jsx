import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './contact.scss';
import load1 from '../../../src/assets/bb8.gif';
import ScreenHeading from '../../utilities/headings/ScreenHeading';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';




export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);

  const handleName = (i) => {
    setName(i.target.value);
  };

  const handleEmail = (i) => {
    setEmail(i.target.value);
  };

  const handleMessage = (i) => {
    setMessage(i.target.value);
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

  const submitForm = async (i) => {
    i.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };

      setBool(true);
      const res = await axios.post(`/Contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        console.log(res.data.msg)
        toast.error(res.data.msg);
        setBool(false);
        console.log("one param is empty");
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      } 
    } catch (error) {
      setBanner("");
      {setTimeout(refreshPage, 4000)}
    }
  };


  return (
    <div className="contact" id="contact">
      <div className="title">
        <ScreenHeading title="Contact Me" subHeading={"Let's Get in Touch!"} />
      </div>
      <div className="main-form">
        <div className="col">
          <div className="inside-container">
            <div id="overlay" />
            <div className="profile-icons">
              <a href="https://www.linkedin.com/in/christietsang/">
                <LinkedInIcon className="icon" />
              </a>
              <a href="https://github.com/christietsang">
                <GitHubIcon className="icon" />
              </a>
              <a href="mailto:ctsang74@my.bcit.ca">
                <EmailIcon className="icon" />
              </a>
            </div>
            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <div className="name-container">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleName} value={name} />
              </div>
              <div className="email-container">
                <label htmlFor="name">Email</label>
                <input type="text" onChange={handleEmail} value={email} />
              </div>
              <div className="message-container">
                <label htmlFor="name">Message</label>
                <textarea type="text" onChange={handleMessage} value={message} />
              </div>

              <div className="send-btn">
                <button type="submit">
                  Send
                  <SendTwoToneIcon className="icon" />
                </button>
                <div className="bb8">
                  {bool ? (
                    <b className="load">
                      <img src={load1} alt="loading bar" />
                    </b>
                    ) : ("")}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
