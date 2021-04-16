import React from 'react'
import {AskAQuestionStyle} from "../AskAQuestion/AskAQuestionStyle";
import {Input} from "../accountBox/common";
const AskAQuestion = () => {
    return (
        <AskAQuestionStyle>
            <div className="container">

            <h1>Ask a question</h1>
                <Input type="email" placeholder="User name" />
        </div>
            </AskAQuestionStyle>
    )
}
export default AskAQuestion;