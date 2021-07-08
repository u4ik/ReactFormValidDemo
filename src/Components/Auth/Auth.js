import { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

import './Auth.css';

const Auth = () => {

    const [signup, setSignup] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [cPasswordValid, setCPasswordValid] = useState(false);

    const [theme, setTheme] = useState('Dark');

    const formWrapper = {
        marginInline: '1em',
        width: '24em',
        minWidth: '12em',
        background: theme === 'Dark' ? 'rgba(0,0,0,.5)' : 'rgba(255,255,255, .8)',
        borderRadius: '1em',
        padding: '2em',
        backdropFilter: 'blur(15px)',
        filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,.3))'
    };

    const formFeedBackStyle = {
        fontSize: '1.2em',
        fontWeight: 'bold',
        userSelect: 'none'
    };

    const inputStyle = {
        textAlign: 'center'
    };

    const AuthInputs = () => {

        return (
            <>
            <HeaderMsg signup={signup} />

            <FormGroup>
                <Label htmlFor='email' color='white'>Email</Label>
                <Input required type='email' id='email' style={inputStyle} valid={emailValid} invalid={!emailValid}
                onChange={(e) => {
                    setEmail(e.target.value)
                    if(e.target.value.includes('@') && e.target.value.includes('.')){
                        setEmailValid(true)
                    } else{
                        setEmailValid(false)
                    }
                }}
                />
                <FormFeedback style={formFeedBackStyle} invalid>
                {signup && 'Email must be valid'}
                </FormFeedback>
            </FormGroup>


            <FormGroup>
                <Label htmlFor='password' color='white'>Password </Label>
                <Input id='password' style={inputStyle} type='password' invalid={!passwordValid} valid={passwordValid} onChange={(e) => {
                    setPassword(e.target.value)

                    if(e.target.value.length >= 6){
                        setPasswordValid(true);
                    }else{
                        setPasswordValid(false);
                    }

                    if(cPassword !== e.target.value || cPassword.length === 0) {
                        setCPasswordValid(false);
                    } else{
                        setCPasswordValid(true);
                    }
                }} />
                <FormFeedback style={formFeedBackStyle} invalid>
                    {signup && 'Password must be at least 6 characters'}
                </FormFeedback>

            </FormGroup>


            



            </>
        )

    }


    return (
        <div style={formWrapper} id='formWrapper'>

            <Form>

                {AuthInputs()}



            </Form>


        </div>

    )

}

const HeaderMsg = props => {
    return(
        <h2> {props.signup ? 'Signup' : 'Login'}</h2>
    )
}



export default Auth;