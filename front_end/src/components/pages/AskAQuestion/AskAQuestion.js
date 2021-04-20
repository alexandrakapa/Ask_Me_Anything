import React from 'react'
import {AskAQuestionStyle} from "../AskAQuestion/AskAQuestionStyle";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// const AskAQuestion = () => {
//     // return (
//     //     <AskAQuestionStyle>
//     //         <div className="container">
//     //
//     //         <h1>Ask a question</h1>
//     //             <Input type="email" placeholder="User name" />
//     //     </div>
//     //         </AskAQuestionStyle>
//     // )
//     const { register, handleSubmit } = useForm();
//
//
//
//     return (
//         <AskAQuestionStyle>
//         <h1>Ask a question</h1>
//             <input type="text" ref={register} name="firstName" />
//          </AskAQuestionStyle>
//     )
// }
//  export default AskAQuestion;

// function AskAQuestion(props) {
//
//     const { register, handleSubmit } = useForm();
//     const onFormSubmit  = data => console.log(data);
//
//     const onErrors = errors => console.error(errors);
//
//
//     return (
//         <AskAQuestionStyle>
//         <h1>Ask a question</h1>
//
//
//                 <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
//                     <input type="text" {...register('firstName')} name="firstName" />
//                 </form>
//          </AskAQuestionStyle>
//     )
// }
//  // export default AskAQuestion;
//
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<AskAQuestion />, rootElement);
//
// export default withRouter(AskAQuestion)

const AskAQuestion = () => {
    const { register, handleSubmit, errors } = useForm();
    const handleRegistration = (data) => console.log(data);
    const handleError = (errors) => {};
    const registerOptions = {
        name: { required: "Name is required" },
        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };
    return (
        <AskAQuestionStyle>
            <h1>Ask a question</h1>
        <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
            <FormGroup>
                <Label>Question title</Label>
                <Input name="title" {...register('title')} />
                <small className="text-danger">
                    {/*{errors.name && errors.name.message}*/}
                </small>
            </FormGroup>
            <FormGroup>
                <Label>Question text</Label>
                <Input
                    type="textarea"
                    name="text"
                    {...register('text')}
                />
                <small className="text-danger">
                    {/*{errors.email && errors.email.message}*/}
                </small>
            </FormGroup>
            <FormGroup>
                <Label>Keywords</Label>
                <Input
                    name="keywords"
                    {...register('keywords')}
                />
                <small className="text-danger">
                    {/*{errors.password && errors.password.message}*/}
                </small>
            </FormGroup>
            <div>
            <Button type="submit">Submit</Button>
            <Button type="cancel">Cancel</Button>
            </div>
        </Form>
        </AskAQuestionStyle>
    );
};
export default AskAQuestion;