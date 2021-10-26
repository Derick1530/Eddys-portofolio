import React from 'react'
import { FooterSubHeading, FooterSubscribe, FooterSubText, Form, FormInput, TextArea, Button } from "./contact.element"
const Contact = () => {
    return (
        <FooterSubscribe>
            <FooterSubHeading>
                <h1>Hire Me for</h1>
                <p>lshkly generate box-shadow CSly generate or that helps
                    you quickly generate box-shadow CSS elp easil</p>
            </FooterSubHeading>
            <FooterSubText>
                <Form>
                    <FormInput name="user_name" type="text" placeholder="Name" />
                    <FormInput name="email" type="email" placeholder="Your Email" />
                    <TextArea rows="5" placeholder="Message" name="message" />
                    <Button fontBig>Subscribe</Button>

                </Form>
            </FooterSubText>
        </FooterSubscribe>
    )
}

export default Contact
