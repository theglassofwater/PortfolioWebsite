import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">contact</h1>
            <form>
                <div className="">
                    <label htmlFor="name" hidden>Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div className="">
                    <label htmlFor="Email" hidden>Email</label>
                    <input type="text" id="Email" name="Email" placeholder="Email" required />
                </div>
                <div className="">
                    <label htmlFor="Message" hidden>Message</label>
                    <textarea type="text" id="Message" name="Message" placeholder="Message" required />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;