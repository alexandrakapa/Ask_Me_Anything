import styled from "styled-components";

export const MyAskMeAnythingStyle = styled.div`
  h1 {
    line-height: 2;
    display: flex;
    margin-bottom: 10%;
    margin-top: 5%;
    color: #000000;
    font-size: 30px;
    font-weight: 200;
    margin-left: -10%;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
  }

  * {
    box-sizing: border-box;
    height: 400px;

  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  /* Float four columns side by side */

  .column {
    float: left;
    width: 25%;
    padding: 0 2%;
  }

  /* Remove extra left and right margins, due to padding in columns */

  .row {
    margin: -35% -17%;

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