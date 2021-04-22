import React from 'react'
import {AskAQuestionStyle} from "../AskAQuestion/AskAQuestionStyle";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// const AnswerAQuestion = () => {
//     // return (
//     //     <AnswerAQuestionStyle>
//     //         <div className="container">
//     //
//     //         <h1>Ask a question</h1>
//     //             <Input type="email" placeholder="User name" />
//     //     </div>
//     //         </AnswerAQuestionStyle>
//     // )
//     const { register, handleSubmit } = useForm();
//
//
//
//     return (
//         <AnswerAQuestionStyle>
//         <h1>Ask a question</h1>
//             <input type="text" ref={register} name="firstName" />
//          </AnswerAQuestionStyle>
//     )
// }
//  export default AnswerAQuestion;

// function AnswerAQuestion(props) {
//
//     const { register, handleSubmit } = useForm();
//     const onFormSubmit  = data => console.log(data);
//
//     const onErrors = errors => console.error(errors);
//
//
//     return (
//         <AnswerAQuestionStyle>
//         <h1>Ask a question</h1>
//
//
//                 <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
//                     <input type="text" {...register('firstName')} name="firstName" />
//                 </form>
//          </AnswerAQuestionStyle>
//     )
// }
//  // export default AnswerAQuestion;
//
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<AnswerAQuestion />, rootElement);
//
// export default withRouter(AnswerAQuestion)

const AskAQuestion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <AskAQuestionStyle>
            <h1>Ask a question</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label>Question title</Label>
                <Input
                    name="title"
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
                    {...register('text', { required: true })}
                />
                <small className="text-danger">
                    {errors.text && <p>Question text is required.</p>}
                </small>
            </FormGroup>
            <FormGroup>
                <Label>Keywords</Label>
                <Input
                    name="keywords"
                    {...register('keywords', { required: true })}
                />
                <small className="text-danger">
                    {errors.keywords && <p>Keywords are required.</p>}
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