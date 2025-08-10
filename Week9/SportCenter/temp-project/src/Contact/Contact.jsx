import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="section-white p" id="contact">
            <div className="contact">
                <h2>CONTACT US</h2>
                <div className="contact-p">
                    <p className="review-p-1">
                        Lorem ıpsum is not simply random text. It has roots in a piece of
                        classical at
                    </p>
                    <p className="review-p-2">Hampden-Sydney College</p>
                </div>
                <div className="contact-container">
                    <div className="contact-div">
                        <form>
                            <div className="contact-top">
                                <div>
                                    <p>Mobile Number</p>
                                    <p className="phone-p">+135 773 321 4442</p>
                                </div>
                                <div>
                                    <p>Email Address</p>
                                    <p className="email-p">demo@demo.com</p>
                                </div>
                            </div>
                            <div className="contact-bottom">
                                <h3>Make An Appoinment</h3>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Your Message"
                                    ></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="map-div">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24051.690551509048!2d30.674829454821467!3d41.10261500399745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409ddad62ec03b6f%3A0x7a3f164055dabb5f!2sKarasu%2C%20Sakarya!5e0!3m2!1str!2str!4v1750259519288!5m2!1str!2str"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;