import styled from "styled-components";

export const ProfileStyle = styled.div`
  h1 {
    line-height: 2;
    display: flex;
    margin-top: 1%;
    color: #000000;
    font-size: 50px;
    font-weight: 200;
    margin-left: 40%;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

  label {
    font-size: 35px;
    margin-left:30%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #282c34;
  }

  /* Float four columns side by side */

  .column {
    float: left;
    width: 25%;
    padding: 0 2%;
    
  }

  .boxleft {
    float: left;
    width: 50%;
    padding: 0 2%;
    margin-top:1%;
  }

  .boxright {
    float: right;
    width: 50%;
    padding: 0 2%;
    margin-top:1%;
  }

  .boxmiddle {
    margin-left:auto;
    margin-right:auto;
    width: 50%;
    padding: 0 2%;
    margin-top:3%;
  }

  /* Remove extra left and right margins, due to padding in columns */

  .row {
    margin: 2% -17%;
   
  }

  /* Clear floats after the columns */

  .row:after {
    content: "";
    display: table;
    clear: both;

  }

  /* Style the counter cards */

  .card {
    box-shadow: 0 4px 8px 0 rgb(46, 14, 120); /* this adds the "card" effect */
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    height: 300px;
  }

  /* Responsive columns - one column layout (vertical) on small screens */
  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }

`