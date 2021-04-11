import React from 'react'


const Contact = () => {
    return ( <> 
        <section className="section">
            <div className="sec-header">
                <h1>Contact</h1>
            </div>
            <div className="sec-content contact-content">
                <div className="contact-form">

                    <div className="contact-title">
                        <h1>Send a Message</h1>
                    </div>
    
                    <form id="contactForm" name="contact" method="POST" data-netlify="true">
                        <input name="name" id="contactName" type="text" placeholder="Fill your name" required />
                        <input name="companyName" id="contactCompany" type="text" placeholder="Fill your company" required />
                        <input name="email" type="email" id="contactEmail" placeholder="Fill your Email" required />
                        <textarea name="message" id="contactMsg" placeholder="What do you want to tell me" required rows="10" />
                        <div data-netlify-recaptcha="true"></div>
                        <button className="sec-btn" id="submitBtn" type="submit" name="submit">SEND</button>
                    </form>
                    
                </div>
            </div>

        </section>

    
    </>);
}
 
export default Contact;