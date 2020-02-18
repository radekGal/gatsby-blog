import React from 'react';
import '../scss/components/form.styles.scss';
import Button from './button';

const Form = () => {
    return(
        <section className="form">
            <div className="container">
                <div className="form__inner">
                    <div className="form__text">
                        <h3>Write to me</h3>
                        <p>Maecenas sit amet tincidunt quam. Ut accumsan risus a volutpat gravida. Ut sollicitudin sapien in velit tincidunt dignissim. Quisque purus nibh, volutpat eu mi sed, interdum aliquet orci.</p>
                        <div className="form__text__item">
                            <h4>Address</h4>
                            <p>661 Lefferts, NY 11203, USA</p>
                        </div>
                        <div className="form__text__item">
                            <h4>Email</h4>
                            <p>example@example.com</p>
                        </div>
                        <div className="form__text__item">
                            <h4>Telephone</h4>
                            <p>+00 123 456 789</p>
                        </div>
                    </div>
                    <form>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Your name"
                            // value={firstName}
                            // onChange={e =>}
                        />
                        <input
                            type="email"
                            name="lastName"
                            placeholder="Your email"
                        />
                        <textarea
                            placeholder="Enter your message"
                            rows="8"
                        >
                        </textarea>
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;