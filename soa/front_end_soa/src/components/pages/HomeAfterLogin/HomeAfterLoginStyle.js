import styled from "styled-components";

export const HomeAfterLoginStyle = styled.div`

  .flip-card {
    background-color: transparent;
    width: 50%;
    height: 300px;
    perspective: 1000px;
    margin-left: 25%;
    margin-bottom: 2%;
    margin-top: 9%;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    //transition: transform 0.6s;
    //transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  //.flip-card:hover .flip-card-inner {
  //  transform: rotateY(180deg);
  //}

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background: linear-gradient(325deg, rgba(70, 17, 152, 1) 50%, rgb(91, 255, 106) 100%);
    color: white;
    
  }

  .flip-card-back {
    background: linear-gradient(325deg, rgba(70, 17, 152, 1) 50%, rgb(91, 255, 106) 100%);
    color: white;
    //transform: rotateY(180deg);
    
  }

  h2 {
    margin-top:8%;
  }
  
  h1 {
    line-height: 2;
    display: flex;
    margin-bottom: 3%;
    margin-top: 8%;
    color: #ffffff;
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

  label {
    font-size: 35px;
    margin-left: 30%;
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
    margin-top: 5%;
  }

  .boxright {
    float: right;
    width: 50%;
    padding: 0 2%;
    margin-top: 5%;
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