import React, { Component } from "react";
import axios from "axios";
import "../../App.css";

class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        email: email,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div className=" offset-sm-1 invite">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email to invite"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary" id="submit">
            Invite
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
