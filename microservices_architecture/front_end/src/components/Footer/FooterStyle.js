import styled from 'styled-components';

export const Box = styled.div`
  //padding: 5px 20px;
  background: #ffffff;
  //background: rgb(70,17,152);
  //background: linear-gradient(325deg, rgba(70,17,152,1) 50%, rgba(91,255,106,1) 100%);
  margin-top: auto;
  z-index: 16;
  display: flex;
  flex-direction: column;
  //position: absolute;
  bottom: 0%;
  width: 100%;
  position: relative;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
    //margin: 0 auto;
    margin-top:2%;
  
  //margin-top: auto;
  margin-bottom: 0%;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  //text-align: left;
  margin-left: 20%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-bottom: 1%;
  //grid-gap: 20px;
  //@media (max-width: 1000px) {
  //  grid-template-columns: repeat(auto-fill, 
  //                         minmax(200px, 1fr));
  //}
`;

export const FooterLink = styled.a`
  color: #615e5e;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  margin-top: auto;
  &:hover {
    color: #1f1e1e;
    transition: 200ms ease-in;
  }
`;


export const Heading = styled.p`
  font-size: 18px;
  color: #827b7b;
  margin-bottom: 40px;
  font-weight: bold;
`;