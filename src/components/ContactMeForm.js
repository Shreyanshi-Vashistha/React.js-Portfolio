import "../styles/ContactMeForm.css";

import React from "react";

const ContactMeForm = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactMeForm;
