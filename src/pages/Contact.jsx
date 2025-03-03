// ContactPage.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));

        // Clear error when user types
        if (formErrors[id]) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                [id]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) errors.name = 'Name is required';

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }

        if (!formData.subject) errors.subject = 'Please select a subject';
        if (!formData.message.trim()) errors.message = 'Message is required';

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Form is valid, simulate submission
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            {/* Font imports */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

            <div className="contact">
                <header className="contact__header">
                    <h1 className="contact__title">Contact Us</h1>
                    <p className="contact__subtitle">We're here to help with any questions or concerns you may have.</p>
                </header>

                <div className="contact__container">
                    <div className="contact-info">
                        <div className="contact-info__item">
                            <h3 className="contact-info__heading">Customer Support</h3>
                            <p className="contact-info__text">Phone: (800) 555-1234</p>
                            <p className="contact-info__text">Email: support@adinath.com</p>
                            <p className="contact-info__text">Hours: Monday - Friday, 8am - 8pm IST</p>
                        </div>

                        <div className="contact-info__item">
                            <h3 className="contact-info__heading">Sales Inquiries</h3>
                            <p className="contact-info__text">Phone: (800) 555-5678</p>
                            <p className="contact-info__text">Email: sales@adinath.com</p>
                            <p className="contact-info__text">Hours: Monday - Friday, 9am - 6pm IST</p>
                        </div>

                        <div className="contact-info__item">
                            <h3 className="contact-info__heading">Media Relations</h3>
                            <p className="contact-info__text">Phone: (800) 555-9012</p>
                            <p className="contact-info__text">Email: media@adinath.com</p>
                        </div>

                        <div className="contact-info__social">
                            <a href="https://facebook.com" className="contact-info__social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://twitter.com" className="contact-info__social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://linkedin.com" className="contact-info__social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://instagram.com" className="contact-info__social-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>

                    </div>

                    <div className="contact-form">
                        <h2 className="contact-form__title">Send Us a Message</h2>

                        {submitted ? (
                            <div className="contact-form__success">
                                <h3 className="contact-form__success-title">Thank you for your message!</h3>
                                <p className="contact-form__success-text">We have received your inquiry and will get back to you as soon as possible.</p>
                                <button onClick={() => setSubmitted(false)} className="contact-form__button">Send another message</button>
                            </div>
                        ) : (
                            <form className="contact-form__form" onSubmit={handleSubmit}>
                                <div className="contact-form__group">
                                    <label className="contact-form__label" htmlFor="name">Full Name*</label>
                                    <input
                                        className={`contact-form__input ${formErrors.name ? 'contact-form__input--error' : ''}`}
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {formErrors.name && <p className="contact-form__error">{formErrors.name}</p>}
                                </div>

                                <div className="contact-form__group">
                                    <label className="contact-form__label" htmlFor="email">Email Address*</label>
                                    <input
                                        className={`contact-form__input ${formErrors.email ? 'contact-form__input--error' : ''}`}
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {formErrors.email && <p className="contact-form__error">{formErrors.email}</p>}
                                </div>

                                <div className="contact-form__group">
                                    <label className="contact-form__label" htmlFor="phone">Phone Number</label>
                                    <input
                                        className="contact-form__input"
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="contact-form__group">
                                    <label className="contact-form__label" htmlFor="subject">Subject*</label>
                                    <select
                                        className={`contact-form__select ${formErrors.subject ? 'contact-form__select--error' : ''}`}
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="support">Technical Support</option>
                                        <option value="sales">Sales Inquiry</option>
                                        <option value="billing">Billing Question</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {formErrors.subject && <p className="contact-form__error">{formErrors.subject}</p>}
                                </div>

                                <div className="contact-form__group">
                                    <label className="contact-form__label" htmlFor="message">Message*</label>
                                    <textarea
                                        className={`contact-form__textarea ${formErrors.message ? 'contact-form__textarea--error' : ''}`}
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {formErrors.message && <p className="contact-form__error">{formErrors.message}</p>}
                                </div>

                                <div className="contact-form__group">
                                    <button type="submit" className="contact-form__button">Send Message</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                <div className="contact-locations">
                    <h2 className="contact-locations__title">Our Offices</h2>
                    <div className="contact-locations__grid">
                        <div className="contact-locations__card">
                            <h3 className="contact-locations__card-title">Bangalore (Headquarters)</h3>
                            <p className="contact-locations__card-text">Adinath</p>
                            <p className="contact-locations__card-text">
                                #13/37, 4th Floor, Sampurna Chambers
                            </p>
                            <p className="contact-locations__card-text">Vasavi Temple Road, VVPuram</p>
                            <p className="contact-locations__card-text">Bangalore 560004</p>
                            <p className="contact-locations__card-text">India</p>
                        </div>

                        <div className="contact-locations__card">
                            <h3 className="contact-locations__card-title">Mumbai</h3>
                            <p className="contact-locations__card-text">Adinath</p>
                            <p className="contact-locations__card-text">12th Floor, Trade Tower</p>
                            <p className="contact-locations__card-text">Nariman Point</p>
                            <p className="contact-locations__card-text">Mumbai 400021</p>
                            <p className="contact-locations__card-text">India</p>
                        </div>

                        <div className="contact-locations__card">
                            <h3 className="contact-locations__card-title">Delhi</h3>
                            <p className="contact-locations__card-text">Adinath</p>
                            <p className="contact-locations__card-text">7th Floor, Connaught Place</p>
                            <p className="contact-locations__card-text">New Delhi 110001</p>
                            <p className="contact-locations__card-text">India</p>
                        </div>

                        <div className="contact-locations__card">
                            <h3 className="contact-locations__card-title">Chennai</h3>
                            <p className="contact-locations__card-text">Adinath</p>
                            <p className="contact-locations__card-text">3rd Floor, IT Park</p>
                            <p className="contact-locations__card-text">Guindy</p>
                            <p className="contact-locations__card-text">Chennai 600032</p>
                            <p className="contact-locations__card-text">India</p>
                        </div>

                        <div className="contact-locations__card">
                            <h3 className="contact-locations__card-title">Hyderabad</h3>
                            <p className="contact-locations__card-text">Adinath</p>
                            <p className="contact-locations__card-text">Hitech City</p>
                            <p className="contact-locations__card-text">Madhapur</p>
                            <p className="contact-locations__card-text">Hyderabad 500081</p>
                            <p className="contact-locations__card-text">India</p>
                        </div>

                        <div className="contact-locations__card">
                            <h3 className="contact-locations__card-title">Pune</h3>
                            <p className="contact-locations__card-text">Adinath</p>
                            <p className="contact-locations__card-text">EON IT Park</p>
                            <p className="contact-locations__card-text">Kharadi</p>
                            <p className="contact-locations__card-text">Pune 411014</p>
                            <p className="contact-locations__card-text">India</p>
                        </div>
                    </div>
                </div>


                <footer className="contact__footer">
                    <p className="contact__footer-text">&copy; 2025 Adinath Tech Solutions. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default ContactPage;