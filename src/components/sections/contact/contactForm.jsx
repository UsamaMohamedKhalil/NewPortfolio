import React, { useState } from 'react';
import { RiWhatsappFill } from '@remixicon/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: '',
        budget: '',
        timeToTalk: '',
        goals: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, serviceType, budget, timeToTalk, goals, message } = formData;

        // Create WhatsApp message with emojis
        const whatsappMessage = `📞 New Inquiry \n\n Name: ${name} \n Email: ${email}\n Service Type: ${serviceType}\n Budget: ${budget} Egp \n Time Available to Talk: ${timeToTalk}\n Goals: ${goals} \n Message: ${message}`;

        // Construct WhatsApp link
        const whatsappLink = `https://api.whatsapp.com/send?phone=201094745972&text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp link
        window.open(whatsappLink, '_blank');

        // Optionally, you can reset the form here
        setFormData({
            name: '',
            email: '',
            serviceType: '',
            budget: '',
            timeToTalk: '',
            goals: '',
            message: ''
        });
    };

    return (
        <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contactForm" name="contactForm" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                                <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                                <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="serviceType">Service Type</label>
                                <select id="serviceType" name="serviceType" className="form-control" value={formData.serviceType} onChange={handleChange} required>
                                    <option value="">Select Service Type</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Design">Design</option>
                                    <option value="Website">Website</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="budget">Budget</label>
                                <input type="text" id="budget" name="budget" className="form-control" value={formData.budget} onChange={handleChange} placeholder="Your Budget" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="timeToTalk">Time Available to Talk</label>
                                <input type="time" id="timeToTalk" name="timeToTalk" className="form-control" value={formData.timeToTalk} onChange={handleChange} placeholder="Available Time" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="goals">Goals</label>
                                <textarea name="goals" id="goals" className="form-control" rows="2" value={formData.goals} onChange={handleChange} placeholder="Your Goals" required></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea name="message" id="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} placeholder="Write Your message" required></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button type="submit" className="theme-btn">
                                    Send Whatsapp <i><RiWhatsappFill size={16} /></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
