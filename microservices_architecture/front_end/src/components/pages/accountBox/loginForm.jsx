import React, { useContext,useState} from "react";
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
import { useHistory } from "react-router";
import CircularProgress from '@material-ui/core/CircularProgress';

 export function LoginForm(props) {

     const emailRef = React.useRef();
     const passwordRef = React.useRef();
     const { switchToSignup } = useContext(AccountContext);
     const history = useHistory();
     const [isloading ,setisloading] = useState(0);

    function onSubmit() {
        // alert("The form was submitted");
        // console.log(emailRef.current.value)
        // console.log(passwordRef.current.value)
        setisloading(1)

        let empInfo={
            username:emailRef.current.value,
            password:passwordRef.current.value
        };
        console.log(empInfo);
        const getdata= JSON.stringify(empInfo);
        console.log(getdata);


        const fetch = require('node-fetch');

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username:emailRef.current.value,
                password:passwordRef.current.value,
            })
        };
        console.log("login: "+requestOptions);
        fetch('https://micro-authentication.herokuapp.com/auth/login',requestOptions).then(res => res.json() )
            .then( json => {
                setisloading(0)
                // this.props.setUserData(json.accessToken, json.username);
                    // console.log("HEREEEE"+ json);
                    if(json.accessToken ) {
                        console.log("here: "+json.accessToken);
                        localStorage.setItem('token', json.accessToken);
                        localStorage.setItem('id', json.id);
                        localStorage.setItem('username', emailRef.current.value);
                        console.log(localStorage.getItem('username'))
                        console.log(localStorage.getItem('token'));
                        console.log(localStorage.getItem('id'));
                        history.push({pathname:"/home/user"})

                    }else{
                        alert("wrong credentials");
                    }
                    // localStorage.setItem('token', json.token);
                    // const tok = localStorage.getItem('token');
                    // console.log("here")
                    // console.log(tok);
                    // // localStorage.setItem('username', json.username);
                    // const tokf = localStorage.getItem('username');
                    // console.log("here")
                    // console.log(tokf);

                    // console.log(json.token)
                }
            )

            .catch(err => console.log(err));






     //
        // fetch('http://localhost:8001/signin',{
        //     method: 'POST',
        //     body: JSON.stringify(empInfo),
        //     headers:{
        //         // "Access-Control-Allow-Origin": "*",
        //         'Content-type':'application/json'}
        // }).then(res => res.json() )
        //     .then( json => {
        //                 // this.props.setUserData(json.accessToken, json.username);
        //         if(json.token!=="" ) {
        //             localStorage.setItem('token', json.token);
        //             localStorage.setItem('username', empInfo.username);
        //             history.push({
        //                 pathname:  "/home/user"
        //             });
        //         }
        //         // localStorage.setItem('token', json.token);
        //         const tok = localStorage.getItem('token');
        //         console.log("here")
        //         console.log(tok);
        //         // localStorage.setItem('username', json.username);
        //         const tokf = localStorage.getItem('username');
        //         console.log("here")
        //         console.log(tokf);
        //
        //         // console.log(json.token)
        //         }
        //     )
        //     .catch(err => console.log(err));
    }


        return (

            // <Navbar/>
            <BoxContainer>
                <FormContainer>
                        <Input
                            name="email"
                            ref={emailRef}
                            type="email"
                            placeholder="User name"
                        />
                        <Input
                            name="password"
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                        />
                    </FormContainer>
                    <Marginer direction="vertical" margin={10}/>
                    <MutedLink href="#">Forgot your password?</MutedLink>
                    <Marginer direction="vertical" margin="1.6em"/>
                    <SubmitButton type="submit" onClick={onSubmit}>Login</SubmitButton>
                <div>
                    {isloading?
                        <CircularProgress color="secondary"/>:
                        null
                    }
                </div>
                    <Marginer direction="vertical" margin="1em"/>
                    <MutedLink href="#">
                        Don't have an account?{" "}
                        <BoldLink href="#" onClick={switchToSignup}>
                        Signup
                    </BoldLink>
                </MutedLink>
            </BoxContainer>
        );

}


