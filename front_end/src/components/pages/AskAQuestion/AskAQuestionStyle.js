import styled from "styled-components";

export const AskAQuestionStyle = styled.div`
  h1 {
    line-height: 2;
    display: flex;
    margin-top: 3%;
    color: #000000;
    font-size: 30px;
    font-weight: 200;
    margin-left: 10%;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }
  

p {
  color: #bf1650;
}

p::before {
  display: inline;
  content: "⚠ ";
}

Form {
width: 70%;
margin-left:10%;
margin-top: 1%;
height: 80%;
}

FormGroup {
width: 100%;
margin-left:10%;
margin-top: 5%;
}


Input{
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  border-radius: 4px;
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


 textarea {
  display: block;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid #474747;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  }

Label {
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: #000000;
  font-size: 16px;
  font-weight: 200;
}

button[type="submit"],
input[type="submit"] {
  background: rgb(74, 20, 156);
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 3%;
  padding: 1.5%;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 10px;
  display: inline-block;
  margin-right: 5%;
}

button[type="cancel"],
input[type="cancel"] {
  background: rgb(74, 20, 156);
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 3%;
  padding: 1.5%;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 10px;
  display: inline-block;
}

button[type="submit"]:hover,
input[type="submit"]:hover,
button[type="cancel"]:hover,
input[type="cancel"]:hover{
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


   `;