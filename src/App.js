import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Subject, setSubject] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    sessionStorage.setItem("email", email);
  }, [email]);

  useEffect(() => {
    sessionStorage.setItem("phone", Phone);
  }, [Phone]);

  useEffect(() => {
    sessionStorage.setItem("Subject", Subject);
  }, [Subject]);

  useEffect(() => {
    sessionStorage.setItem("message", message);
  }, [message]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleChangeSubject(e) {
    setSubject(e.target.value);
  }

  function handleChangeMessage(e) {
    setmessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("phone number:", Phone);
    console.log("subject:", Subject);
    console.log("message:", message);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setmessage("");
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Connect with Us</h1>
        <p>
          We love to respond to your queries and help you succeed. <br />
          Feel free to get in touch with us !.
        </p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Send your Request</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChangeName}
                    placeholder="John Prank"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    value={Phone}
                    onChange={handleChangePhone}
                    placeholder="+233 554694601"
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="johnprank@gmail.com"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={Subject}
                    onChange={handleChangeSubject}
                    placeholder="Product demo"
                  />
                </div>
              </div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={message}
                onChange={handleChangeMessage}
                placeholder="your message"
              ></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>Contactus@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>+233 54694601</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Accra, Burma Camp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
