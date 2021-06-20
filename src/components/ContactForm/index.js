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

// Importing Formik
import { useFormik } from 'formik';

export function ContactForm () {
    // Validating the form
    const validate = values => {
        const errors = {}

        // Name validation
        if(!values.name){
            errors.name = "Required"
        }
        else if(values.name.length < 4){
            errors.name = "Must be 5 characters or more."
        }
        // Email Validation
        if(!values.email){
            errors.email = "Required"
        }
        else if(values.email.length < 4){
            errors.email = "Must be 5 characters or more."
        }
        // Message Validation
        if(!values.email){
            errors.email = "Required"
        }
        else if(values.email.length > 1000){
            errors.email = "Must be less than 1000 characters."
        }

        return errors;
    }
    
    // Setting up the returned values
    const formik = useFormik({
        initialValues: {
            name: "",
            email:"",
            message: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
      <>
          <FormWrap>
            <FormContent>
              <Form name="Contact Form" onSubmit={formik.handleSubmit}>
                <FormH1>Send us a message</FormH1>
                <Text>Have a question? Need to reach out?  Use the form below to get in touch.</Text>
                {/* Name */}
                <FormLabel htmlFor='name'>Your Name</FormLabel>
                <FormInput 
                    type='name' 
                    name="name" 
                    required 
                    onChange={formik.handleChange} 
                    value={formik.values.name} 
                    onBlur={formik.handleBlur}
                    id="name" 
                />
                { formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null }
                
                {/* Email */}
                <FormLabel htmlFor='email'>Email</FormLabel>
                <FormInput 
                    type='email' 
                    name="email" 
                    required 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    onBlur={formik.handleBlur}
                    id="email" 
                />
                { formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null }
                
                {/* Message */}
                <FormLabel htmlFor='message'>Message</FormLabel>
                <FormTextArea 
                    type='textarea' 
                    name="message" 
                    required 
                    onChange={formik.handleChange} 
                    value={formik.values.message} 
                    onBlur={formik.handleBlur}
                    id="message" 
                />
                { formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null }
                
                {/* Submit Button */}
                <FormButton type='submit'>Submit</FormButton>
              </Form>
            </FormContent>
          </FormWrap>
      </>
    );
  };


  export default ContactForm;