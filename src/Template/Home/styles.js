import styled from 'styled-components';


export const Body = styled.section`
height: 100%;
padding: 40px;
position: relative;

&::before{
        content: '';
        display: block;
        width: 230px;
        z-index: 1;        
        height: 220px;
        background-color: var(--circleSecondary);
        border-radius: 100%;
        position: absolute;
        left: -160px;
        top: 400px;
    }

    &::after{
        content: '';
        display: block;
        width: 50px;
        z-index: 1;        
        height: 50px;
        background-color: var(--circlePrimary);
        border-radius: 100%;
        position: absolute;
        right: 60px;
        bottom: 20px;
    }


`;

export const Container = styled.div`
    max-width: 1100px;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    z-index: 999999;
`;


export const Row = styled.div`
display: flex;
flex-wrap: wrap;
height:100%;
align-items: center;
justify-content: center;
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 11rem;
    line-height: 150px;
    color: var(--purple);
    position: absolute;
    z-index: 999;
    top: 30px;

    @media screen and (max-width:650px){
        display: none;
    }
`;

export const BoxEverything = styled.div`
position: relative;


&::before{
        content: '';
        display: block;
        width: 230px;
        z-index: 1;        
        height: 220px;
        background-color: var(--circlePrimary);
        border-radius: 100%
    }

    &::after{
        content: '';
        display: block;
        width: 230px;
        z-index: 1;
        height: 220px;
        background-color: var(--circleSecondary);
        border-radius: 100%;
        position: absolute;
        right: -100px;
        top: 100px;
    }
`;

export const Box = styled.div`
  margin:auto;
  border:10px solid black;
  border-radius:40px;
  width:320px;
  height:580px;
  position:relative;  
  box-shadow:0px 20px 15px #33333335;
`;