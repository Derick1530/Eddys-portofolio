import React, { useState } from 'react';

import { useRef } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import emailjs from 'emailjs-com'
import { ImageCont, HeroName, MainContainer } from "./contact.element"
import { FooterSubHeading, FooterSubscribe, FooterSubText, Form, FormInput, TextArea, Button } from "./contact.element"
const Contact = ({ content }) => {
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
        <MainContainer>
            <FooterSubscribe>
                <FooterSubHeading>
                    <h1>Hire Me</h1>
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
            <HeroName to="/">
                <h3 >Derick Zihalirwa</h3>
                <p>Architect</p>
            </HeroName>
            {content.map((item, index) => (
                <ImageCont src={item} alt="home" />
            ))}


        </MainContainer>
    )
}

export default Contact
