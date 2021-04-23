import React from 'react'
import {AskAQuestionStyle} from "../AskAQuestion/AskAQuestionStyle";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
const AskAQuestion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <AskAQuestionStyle>
            <NavbarAfterLogin/>
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