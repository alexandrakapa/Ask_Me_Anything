import React, {useEffect, useState} from 'react'
import {AnswerAQuestionStyle} from "../AnswerAQuestion/AnswerAQuestionStyle";
// import { useForm } from "react-hook-form";
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import Footer from "../../Footer/Footer";
import {Avatar, CardMedia, Divider, FormGroup, Grid, Paper, Typography} from "@material-ui/core";
import {Input} from "../accountBox/common";
import { makeStyles } from "@material-ui/core/styles";
import {Button, Form, Label} from "reactstrap";
import {useForm} from "react-hook-form";
import {AskAQuestionStyle} from "../AskAQuestion/AskAQuestionStyle";
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

const AnswerAQuestion = () => {
    const [question, setQuestion] = useState([]);


    useEffect( () => {
        fetch(`http://localhost:3000/question/2`,{
            // headers:{'Content-type':'application/json'}
            })
            .then(response => response.json())
            .then(fetchedData => {

                setQuestion(() => fetchedData)
                console.log(fetchedData)
                console.log(question)


            })

    },[])

    const classes = useStyles();

    const users = [
        {
            name: question.question_id,
            title: question.title,
            desc: question.text,
            askedOn: question.askedOn
        },
      //   {
      //       name: "Jonathan",
      //       desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
      // industry. Lorem Ipsum has been the industry's standard dummy text ever
      // since the 1500s, when an unknown printer took a galley of type and
      // scrambled it to make a type specimen book.`
      //   },
      //   {
      //       name: "Joshua",
      //       desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
      // industry. Lorem Ipsum has been the industry's standard dummy text ever
      // since the 1500s, when an unknown printer took a galley of type and
      // scrambled it to make a type specimen book.`
      //   }
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
    }

    return (
        <AnswerAQuestionStyle>
            <NavbarAfterLogin/>

            <h1>Here you can answer the question you selected!</h1>

            <Grid className={classes.root} container direction="column" spacing={4}>
                {users.map(user => (
                    <Grid item>{renderPaper(user)}</Grid>
                ))}
            </Grid>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label>Answer text</Label>
                <Input
                    type="textarea"
                    name="text"
                    placeholder= "Enter the text of your answer"
                    {...register('text', { required: true })}
                />
            </FormGroup>
                <Button type="submit">Submit</Button>
                <Button type="cancel">Cancel</Button>
            </Form>
            <Footer/>
        </AnswerAQuestionStyle>
    );
};
export default AnswerAQuestion;