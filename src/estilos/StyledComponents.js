import styled from "styled-components";



export const ClockDiv = styled.div`
background-image: url('https://res.cloudinary.com/dcyn2bjb9/image/upload/v1647906709/samples/sprint2reto2/bg-stars_juv87t.svg');
background-color: hsl(235, 16%, 14%);
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
width: 100%;
height: 100vh;
font-family: 'Red Hat Text', sans-serif;
`

export const FooterDiv = styled.div`
background-image: url('https://res.cloudinary.com/dcyn2bjb9/image/upload/v1647906709/samples/sprint2reto2/pattern-hills_ynvgfy.svg');
width: 100%;
height: 22vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 5%;
position: fixed;
bottom: 0;
`


export const CountContain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
margin: 5% auto;
width: 70vw;
@media (max-width:600px) {
    width:95%;
    margin-top: 20%;
}

`
export const DivNum = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 3%;
font-size: 24px;
width: 100%;

`

export const DivLetters = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 3%;
font-size: small;
width: 100%;
`

export const CardnUM = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 15%;
height: 10vw;
background-color: hsl(236, 21%, 26%);
color:hsl(345, 95%, 68%);
border-radius: 10px;
@media (max-width:600px) {

    width:25%;
    height:85%;
}
`

export const CardLetters = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 15%;
font-size: 67%;
@media (max-width:600px) {

width:25%;
height:85%;
}
`
