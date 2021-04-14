import React, { useContext } from "react";
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

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email (user name)" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Re-enter password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Signup</SubmitButton>
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