import React from 'react'
import {AskAQuestionStyle} from "../AskAQuestion/AskAQuestionStyle";
import { useForm } from "react-hook-form";
import { useLocation , useHistory} from "react-router-dom";
import Footer from '../../Footer/Footer'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import {withRouter} from "react-router-dom";
import "@pathofdev/react-tag-input/build/index.css";

import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
// const AskAQuestion = (props) => {

function AskAQuestion(props) {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [tags, setTags] = React.useState(["example tag"])

    const onSubmit = (data) => {
        console.log(data);
        if (true){
            // console.log(data.title)
            // console.log(data.text)
            // console.log(data.keywords)
            console.log(tags)
            // console.log(tags[0])
            props.history.push({
                pathname: '/home/user',
                state: {  title : data.title, text : data.text, askedFrom: 1, keywords: tags[0]}
            })
            // const tok = localStorage.getItem('token');
            fetch(`http://localhost:3002/question/create`, {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-type':'application/json',
                    // 'x-access-token':tok
                },
                body: JSON.stringify({ title : data.title, text : data.text, askedFrom: 1, keywords: tags})

            })
        }
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    return (
        <AskAQuestionStyle>
            <NavbarAfterLogin/>
            <h1>Hello {localStorage.username}! Here you can ask a question!</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>

            <FormGroup>
                <Label>Question title</Label>
                <Input
                    name="title"
                    placeholder= "Enter the title of your question"
                    required="true" {...register('title', { required: true })}
                />
                <small className="text-danger">
                    {errors.title && <p>Question title is required.</p>}
                </small>
            </FormGroup>
            <FormGroup>
                <Label>Question text</Label>
                <Input
                    type="textarea"
                    name="text"
                    placeholder= "Enter the text of your question"
                    {...register('text', { required: true })}
                />
                <small className="text-danger">
                    {errors.text && <p>Question text is required.</p>}
                </small>
            </FormGroup>
            <FormGroup>
                <Label>Keywords</Label>
                {/*<Input*/}
                {/*    name="keywords"*/}
                {/*    {...register('keywords', { required: true })}*/}
                {/*/>*/}
                {/*<small className="text-danger">*/}
                {/*    {errors.keywords && <p>Keywords are required.</p>}*/}
                {/*</small>*/}
                <ReactTagInput
                    tags={tags}
                    placeholder="Enter a keyword and press enter"
                    maxTags={15}
                    editable={false}
                    readOnly={false}
                    removeOnBackspace={false}
                    onChange={(newTags) => setTags(newTags)}
                />
            </FormGroup>
            <div>
            <Button type="submit">Submit</Button>
            <Button type="cancel">Cancel</Button>
            </div>
        </Form>
            <br/>
            <br/>
            <br/>
        <Footer/>

        </AskAQuestionStyle>
    );
};
// export default AskAQuestion;


export default withRouter(AskAQuestion)