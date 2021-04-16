import styled from 'styled-components';

export const Box = styled.div`
  //padding: 5px 20px;
  background: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
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
  margin-bottom: -1%;
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
  &:hover {
    color: #3d0f82;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  color: #827b7b;
  margin-bottom: 40px;
  font-weight: bold;
`;