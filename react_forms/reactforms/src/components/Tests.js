import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SignInForm = styled(Form)`
display: flex;
flex-direction: column;
padding:30px;
border:1px solid black;
`
const EmailField = styled(Field)`
height:40px;
font-size:24px;
`
const PasswordField = styled(Field)`
height:40px;
font-size:24px;
`


class Test extends React.Component {
   
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }
  
  handleSubmit(values, actions) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            alert(JSON.stringify(values))
        },5000)
    });
  };
  
  handleValidation(values){
    const errors = {};
    if(!values.email){
        errors.email = 'Email cant be empty';
    }
    return errors;
  }


  render(){
    return (
        <Container>
            <ContentContainer> 
                <Formik 
                initialValues={{email:'', pass:''}}
                validate={this.handleValidation}
                onSubmit={this.handleSubmit}
                >
               {props => (
                <SignInForm>
                    <EmailField name='email' type='text' />
                    <ErrorMessage name='email'>
                        {error => <ErrorLabel>{error}</ErrorLabel>}
                    </ErrorMessage>
                    <PasswordField name='pass' type='password'/>
                    <SubmitButton type="submit" disabled={props.isSubmitting}></SubmitButton>
                </SignInForm>
               )}
                </Formik>
            </ContentContainer>
        </Container>
    );
  }
}

export default Test;