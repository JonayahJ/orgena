import React from 'react';
import emailjs from 'emailjs-com';
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

export function ContactForm () {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Orgena-Consulting', 'orgena-consulting', e.target, 'user_csqhBNWWyCJxueDtV9K4x')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Thank you for submitting an inquiry form.  We will be back in touch with you shortly.")
  }

    return (
      <>
          <FormWrap>
            <FormContent>
              <Form onSubmit={sendEmail} >
                <FormH1>Send us a message</FormH1>
                <Text>Have a question? Need to reach out?  Use the form below to get in touch.</Text>
                
                {/* Name */}
                <FormLabel htmlFor='name'>Your Name</FormLabel>
                <FormInput 
                    type='name' 
                    name="name" 
                    required 
                    id="name" 
                />
                
                {/* Email */}
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput 
                    type='email' 
                    name="email" 
                    required 
                    id="email" 
                />
                
                {/* Phone */}
                <FormLabel htmlFor='phone'>Phone Number</FormLabel>
                <FormInput 
                    type='phone' 
                    name="phone" 
                    required 
                    id="phone" 
                />
                
                {/* Message */}
                <FormLabel htmlFor='message'>Message</FormLabel>
                <FormTextArea 
                    type='textarea' 
                    name="message" 
                    required 
                    id="message" 
                />
                
                {/* Submit Button */}
                <FormButton type='submit' value="Send">Submit</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
      </>
    );
  };


  export default ContactForm;