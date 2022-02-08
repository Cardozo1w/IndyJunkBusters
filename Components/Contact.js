import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState(initialValues);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [state, handleSubmit] = useForm("xayvekwj");

  // if (state.succeeded) {
  //   console.log("Working...");
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const send = await axios.post("https://formspree.io/f/mqknpjzl", fields);
    if (send.status === 200) {
      handleShow();
      setFields(initialValues);
    }
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully</Modal.Body>
        <Modal.Footer>
          <Button className="btn-acept" onClick={handleClose}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>

      <section id="contact" className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Indianapolis, Indiana</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>indyjunkbusters@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p style={{ marginBottom: 0 }}>+1 (317) 657-0549</p>
                  <p>+1 (317) 992-9992</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      value={fields.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={fields.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    value={fields.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    value={fields.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <input
                    value="Send Message"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
