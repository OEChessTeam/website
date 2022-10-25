import React, { useState } from "react";
import "./challReq.scss"


const FORM_ENDPOINT = "https://public.herotofu.com/v1/774b7440-5184-11ed-9f58-f3ab7f1a635a"; // TODO - fill on the later step


const ContactForm = () => {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {

        setTimeout(() => {

            setSubmitted(true);

        }, 100);

    };


    if (submitted) {

        return (

            <>

                <h2>Thank you!</h2>

                <div>We'll be in touch soon.</div>

            </>

        );

    }


    return (

        <form

            action={FORM_ENDPOINT}

            onSubmit={handleSubmit}

            method="POST"

            target="_blank"

        >

            <div>

                <input type="text" placeholder="Your name" name="name" required />

            </div>

            <div>

                <input type="email" placeholder="Email" name="email" required />

            </div>

            <div>

                <textarea placeholder="What rank do you want to challenge?" name="message" required />

            </div>

            <div>

                <textarea placeholder="What rank are you?" name="message" required />

            </div>

            <div>

                <button type="submit"> Submit Challenge </button>

            </div>

        </form>

    );

};


export default ContactForm;

