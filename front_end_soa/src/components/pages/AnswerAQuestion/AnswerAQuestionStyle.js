import styled from "styled-components";

export const AnswerAQuestionStyle = styled.div`
   

   h1 {
      line-height: 2;
      display: flex;
      margin-top: 2%;
      color: #000000;
      font-size: 30px;
      font-weight: 200;
      margin-left: 13%;
   }

   h3 {
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   h5 {
      margin-top: 2.5%;
      margin-bottom: 1.5%;
      color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
   }


   Form {
      width: 100%;
      //margin-left: -1%;
      margin-top: 1%;
   }

   FormGroup {
      width: 100%;
      //margin-left: 30%;
      margin-top: 5%;
      //height: 100%;
   }

   textarea {
      display: block;
      box-sizing: border-box;
      border-radius: 4px;
      border: 2px solid #474747;
      padding: 10px 15px;
      margin-bottom: 10px;
      font-size: 18px;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      margin-left : 13%;
      width: 73%;
   }


   Input {
      display: block;
      box-sizing: border-box;
      width: 70%;
      //height: 100%;
      border-radius: 6px;
      border: 2px solid #474747;
      padding: 10px 15px;
      margin-bottom: 10px;
      font-size: 14px;
      -webkit-transition: 0.5s;
      transition: 0.5s;
   }

   Input:focus {
      outline: none !important;
      border: 2px solid #8d17cd;
      box-shadow: 0 0 10px #000000;
   }

   textarea:focus {
      outline: none !important;
      border: 2px solid #8d17cd;
      box-shadow: 0 0 10px #000000;;
   }
   

   select {
      width: 100%;
      padding: 10px 15px;
   }

   Label {
      line-height: 2;
      text-align: left;
      display: block;
      margin-bottom: 13px;
      margin-top: 0%;
      color: #000000;
      font-size: 20px;
      font-weight: 200;
      margin-left: 13%
   }

   button[type="submit"],
   input[type="submit"] {
      background: rgb(74, 20, 156);
      color: white;
      text-transform: uppercase;
      border: none;
      margin-top: 2%;
      padding: 1%;
      font-size: 10px;
      font-weight: 100;
      letter-spacing: 10px;
      display: inline-block;
      margin-right: 3%;
      margin-left: 13%;
   }

   button[type="cancel"],
   input[type="cancel"] {
      background: rgb(74, 20, 156);
      color: white;
      text-transform: uppercase;
      border: none;
      margin-top: 2%;
      padding: 1%;
      font-size: 10px;
      font-weight: 100;
      letter-spacing: 10px;
      display: inline-block;
   }

   button[type="submit"]:hover,
   input[type="submit"]:hover,
   button[type="cancel"]:hover,
   input[type="cancel"]:hover {
      filter: brightness(1);
      background: rgb(140, 91, 255);
   }

   input:disabled {
      opacity: 0.4;
   }

   input[type="button"]:hover {
      transition: 0.3s all;
   }

   button[type="submit"],
   input[type="button"],
   input[type="submit"] {
      -webkit-appearance: none;
   }


   button[type="button"] {
      display: block;
      appearance: none;
      background: #333;
      color: #ffffff;
      border: none;
      text-transform: uppercase;
      padding: 10px 20px;
      border-radius: 4px;
   }

   hr {
      margin-top: 30px;
   }

   button {
      display: block;
      appearance: none;
      margin-top: 40px;
      border: 1px solid #333;
      margin-bottom: 20px;
      text-transform: uppercase;
      padding: 10px 20px;
      border-radius: 4px;
   }

  p {
    font-size: 15px;
  }

`;
