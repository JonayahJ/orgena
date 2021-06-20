import React from 'react';
import {
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  Text
} from './ContactElements';

const Contact = () => {
    return (
      <>
          <FormWrap>
            <FormContent>
              <Form method="post" name="Contact Form" netlify data-netlify="true">
                <FormH1>Send us a message</FormH1>
                <Text>Have a question? Need to reach out?  Use the form below to get in touch.</Text>
                <FormLabel htmlFor='name'>Your Name</FormLabel>
                <FormInput type='name' name="name" required />
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput type='email' name="email" required />
                <FormLabel htmlFor='message'>Message</FormLabel>
                <FormTextArea type='textarea' name="message" required />
                <FormButton type='submit'>Submit</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
      </>
    );
  };
  
  export default Contact;