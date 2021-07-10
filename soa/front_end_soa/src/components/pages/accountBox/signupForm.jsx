import React, { useContext,useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {useHistory} from "react-router";
import CircularProgress from '@material-ui/core/CircularProgress';

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const secpasswordRef = React.useRef();
    const history = useHistory();
    const [isloading ,setisloading] = useState(0);
    function onSubmit() {
        setisloading(1)
        if(passwordRef.current.value !== secpasswordRef.current.value){
            console.log("passwords must much")
            alert("passwords must match")
        }else {
            let empInfo = {
                username: emailRef.current.value,
                password: passwordRef.current.value,
            };
            console.log(empInfo);
            const getdata = JSON.stringify(empInfo);
            console.log(getdata);


            let formBody = [];
            for (let property in empInfo) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(empInfo[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            console.log(formBody);
            const fetch = require('node-fetch');
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: emailRef.current.value,
                    password: passwordRef.current.value,
                })
            };
            console.log(requestOptions);
            fetch('https://soa-authentication-service.herokuapp.com/register', requestOptions).then(response => {
                setisloading(0)
                if (response.ok) {
                    switchToSignin();
                } else {
                    alert("There has been an error with your registration ")
                }
            })
        }
    }
    return (

        <BoxContainer>

            <FormContainer>
                <Input type="email" placeholder="Email (user name)" ref={emailRef}/>
                <Input type="password" placeholder="Password" ref={passwordRef} />
                <Input type="password" placeholder="Re-enter password" ref={secpasswordRef}/>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit" onClick={onSubmit}>Signup</SubmitButton>
            <div>
                {isloading?
                    <CircularProgress color="secondary"/>:
                    null
                }
            </div>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                Already have an account?
                <BoldLink href="#" onClick={switchToSignin}>
                    Login
                </BoldLink>
            </MutedLink>

        </BoxContainer>

    );
}