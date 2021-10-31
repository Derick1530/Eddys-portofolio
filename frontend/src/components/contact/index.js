import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FooterSubHeading, FooterSubscribe, FooterSubText, Form, FormInput, TextArea, Button } from "./contact.element"
import { useState } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Contact = () => {
    const formRef = useRef();
    const handleClick = () => {
        if (sent) {
            console.log(formRef.current);
        }
    }
    const [sent, setSent] = useState(false);
    const clickHandle = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            "service_qq7ll4n",
            "template_8tg2vs5",
            formRef.current,
            "user_sF8Dladhb9PcBTOkgzBON"
        ).then(
            (result) => {
                if (result) {
                    setSent(true);
                }
                console.log(result.text);
            }

        )
    }
    return (
        <FooterSubscribe>
            <FooterSubHeading>
                <h1>Hire Me for</h1>
                <p> Please don’t hesitate to contact us for any details you are interested in. Our agents will gladly answer any of your questions.</p>
            </FooterSubHeading>
            <FooterSubText>
                <Form ref={formRef} onSubmit={clickHandle}>
                    <FormInput name="user_name" type="text" placeholder="Name" required />
                    <FormInput name="user_email" type="email" placeholder="Your Email" required />
                    <TextArea rows="5" placeholder="Message" name="message" required />
                    <Button fontBig onClick={handleClick}>Send</Button>
                    {sent && (<Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Message Sent Successfully — <strong>Thank you !</strong>
                    </Alert>)}
                </Form>
            </FooterSubText>
        </FooterSubscribe>
    )
}

export default Contact
