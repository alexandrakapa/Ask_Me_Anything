import React, {useEffect, useState} from 'react'
import {AnswerAQuestionStyle} from "../AnswerAQuestion/AnswerAQuestionStyle";
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import Footer from "../../FooterAfterLogin/Footer";
import {Avatar,  FormGroup, Grid, Paper, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Button, Form, Label} from "reactstrap";
import {useForm} from "react-hook-form";
import '@empd/reactable/lib/styles.css';
import {withRouter} from "react-router-dom";
import  Muitable  from "./DisplayTable";
import {columns} from './DisplayColumns';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    paper: {
        minHeight: theme.spacing(25),
        padding: theme.spacing(2),
        width: '75%',
        marginLeft: '12%',
        variant:"outlined",
        backgroundColor: "#b9ffc0",
        borderRadius: 30
    },
    avatar: {
        marginBottom: theme.spacing(1.5)
    },
    [theme.breakpoints.down("xs")]: {
        description: {
            marginTop: theme.spacing(1.5)
        }
    }
}));
function AnswerAQuestion(props) {
// const AnswerAQuestion = () => {
    const location = useLocation();
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const question_id = location.state.question_id;

        useEffect(() => {
            fetch(`http://localhost:3000/question/byId/${question_id}`, {
                // headers:{'Content-type':'application/json'}
            })
                .then(response => response.json())
                .then(fetchedData => {
                        let date;
                        date=fetchedData.askedOn
                        date = date.split("T")
                        let date2;
                        date2 = date[1].split(".")
                        let cut;
                        cut = date[0].concat(" ",date2[0])
                        fetchedData.askedOn = cut

                    setQuestion(() => fetchedData)
                    console.log(fetchedData)
                    console.log(question)
                })

            fetch(`http://localhost:3000/answer/all/${question_id}`, {
                // headers:{'Content-type':'application/json'}
            })
                .then(response => response.json())
                .then(fetchedData => {
                    for (let i=0; i<fetchedData.length; i++) {
                        let date;
                        date=fetchedData[i].answeredOn
                        date = date.split("T")
                        let date2;
                        date2 = date[1].split(".")
                        let cut;
                        cut = date[0].concat(" ",date2[0])
                        fetchedData[i].answeredOn = cut
                    }
                    setAnswer(() => fetchedData)
                    console.log(fetchedData)
                    console.log(answer)
                })

        }, []);

    const classes = useStyles();

    const users = [
        {
            name: question.question_id,
            title: question.title,
            desc: question.text,
            askedOn: question.askedOn
        },

    ];

    const renderPaper = ({ name,title, desc, askedOn }) => (
        <Grid
            className={classes.paper}
            component={Paper}
            container
            alignItems="center"
        >
            <Grid item xs={12} sm={3} md={2}>
                <Grid container direction="column" alignItems="center">
                    <Avatar className={classes.avatar} style={{ height: '50px', width: '50px' }}/>
                    <Typography align="center" variant="subtitle2">Asked From: {name}</Typography>
                    <Typography align="center" variant="subtitle2">Asked On: {askedOn}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={22} sm={9} md={10}>
                <Typography
                    variant="h5"
                    align="center"
                    className={classes.title}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    className={classes.description}
                >
                    {desc}
                </Typography>
            </Grid>
        </Grid>
    );

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data.keywords)
        console.log(data);
        if (true){
            props.history.push({
                pathname: '/home/user',
            })
            // const tok = localStorage.getItem('token');
            fetch(`http://localhost:3001/answer/create`, {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-type':'application/json',
                    // 'x-access-token':tok
                },
                body: JSON.stringify({ text : data.text, answeredFrom: 1, isAnAnswerOf: {question_id}})

            })
        }
    }

    return (
        <AnswerAQuestionStyle>
            <NavbarAfterLogin/>

            <h1>Here you can answer the question you selected! Below are other users answers!</h1>

            <Grid className={classes.root} container direction="column" spacing={4}>
                {users.map(user => (
                    <Grid item>{renderPaper(user)}</Grid>
                ))}
            </Grid>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label>Please fill the form below with your answer:</Label>
                <textarea
                    type="textarea"
                    name="text"
                    rows={4}
                    placeholder= "Enter the text of your answer"
                    {...register('text', { required: true })}
                />
            </FormGroup>
                <Button type="submit">Submit</Button>
                <Button type="cancel">Cancel</Button>
            </Form>

            <div
                style={{ marginLeft: '13%', marginRight: '14%', marginTop: '2%', marginBottom: '3%', padding:'2px'}}>
                <Muitable data={answer} tableName={"Here are the answers of other users!"} columns={columns} />
            </div>
            <Footer/>
        </AnswerAQuestionStyle>
    );
};
// export default AnswerAQuestion;
export default withRouter(AnswerAQuestion)