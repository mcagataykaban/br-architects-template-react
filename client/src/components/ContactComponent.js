import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
const ContactComponent = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const inputSubjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const inputCommentHandler = (e) => {
    setComment(e.target.value);
  };

  var frm = document.getElementById('frm')

  const formSubmitHandler = () => {
    console.log(name);

    axios({
      method: "post",
      url: "http://localhost:4000/contact",
      data: qs.stringify({
        name: name,
        email: email,
        subject: subject,
        comment: comment,
      }),
    }).then((res)=> {
      setComment("")
      setEmail("")
      setName("")
      setSubject("")     
    }).catch((err) => {
    });

  };

  return (
    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Contact
      </h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form id="frm">
        <input
          value={name}
          className="w3-input w3-border"
          type="text"
          placeholder="Name"
          required
          name="Name"
          onChange={inputNameHandler}
        />
        <input
          value={email}
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Email"
          required
          name="Email"
          onChange={inputEmailHandler}
        />
        <input
          value={subject}
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Subject"
          required
          name="Subject"
          onChange={inputSubjectHandler}
        />
        <input
          value={comment}
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Comment"
          required
          name="Comment"
          onChange={inputCommentHandler}
        />
        <button
          onClick={formSubmitHandler}
          className="w3-button w3-black w3-section"
          type="button"
        >
          <i className="fa fa-paper-plane" /> SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
