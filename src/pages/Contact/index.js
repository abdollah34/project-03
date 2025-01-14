import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-details">
                <h2>Our Contact Details</h2>
                <p>Email: info@tourismagency.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
        </div>
    );
};

export default Contact;