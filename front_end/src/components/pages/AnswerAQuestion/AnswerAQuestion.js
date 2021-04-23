import React, { useState } from 'react'
import {AnswerAQuestionStyle} from "../AnswerAQuestion/AnswerAQuestionStyle";
import { useForm } from "react-hook-form";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';


const AnswerAQuestion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    const [value, setValue] = useState("1");
    return (
        <AnswerAQuestionStyle>
            <NavbarAfterLogin/>


            <h1>Answer a question</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>

               <FormGroup>
                    <Label>Select question</Label>
                   <select value={value} onChange={(e) => setValue(e.target.value)}>
                       <option value="0">question titles</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                   </select>
                </FormGroup>
                <FormGroup>
                    <Input
                        placeholder = "(keywords, read-only)"
                        disabled
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="textarea"
                        placeholder = "other answers, if available, can be shown here"
                        disabled
                    />
                    <small className="text-danger">
                        {errors.text && <p>Question text is required.</p>}
                    </small>
                </FormGroup>
                <FormGroup>
                    <Label>Your answer</Label>
                    <Input
                        name="answer"
                        type="textarea"
                        {...register('answer')}
                    />
                </FormGroup>
                <div>
                    <Button type="submit">Submit answer</Button>
                    <Button type="cancel">Never mind</Button>
                </div>
            </Form>
        </AnswerAQuestionStyle>
    );
};
export default AnswerAQuestion;