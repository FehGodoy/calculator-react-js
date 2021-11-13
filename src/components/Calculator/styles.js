import styled from 'styled-components';


export const ResultBox = styled.div`
  z-index:10;
  position:absolute;  
  background-size:cover;
  width:100%;
  height:100%;
  border-radius:30px;
  background-color: #f0f1f7;
`;

export const Form = styled.form`
width: 100%;
height:80px;
border-bottom:1px solid #eeeeee05;
`;

export const Notch = styled.div`
  z-index:50;
  top:0;
  left:65px;
  position:absolute;
  background: var(--black);
  width:170px;
  height:30px;
  border-radius:0px 0px 20px 20px;
`;

export const Time = styled.span`
  font-size: 13px;
  font-weight:500;
  margin-left: 6px;
`;

export const HeaderPhone = styled.div`
    background-color: var(--white);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 5px 10px 8px 12px;
    position: relative;
`;

export const IconsRight = styled.div`

`;

export const Battery = styled.img`
    position: absolute;
    right: 5px;
    top: 10px;
    width: 20px;
`;

export const Wifi = styled.img`
    position: absolute;
    right: 30px;
    top: 10px;
    width: 15px;
`;

export const Signal = styled.img`
    position: absolute;
    right: 46px;
    top: 10px;
    width: 15px;
`;


export const SetInput = styled.input.attrs({type:'text'})`
background-color: #f0f1f7;
height: 100%;
width: 100%;
text-align: right;
padding-right: 20px;
font-size: 25px;
color: var(--screenNumber);
text-transform: uppercase;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
`;


export const KeyBoard = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-auto-rows: minmax(60px,auto);
margin-top: 0px;
padding: 0px 10px;
button{
    font-size: 18px;
    margin: 9px 5px;
    font-weight: 500;
    border-radius: 8px;
    height: 65px;
    width: 85%;
    background-color: var(--white);
    box-shadow:-2px -1px 4px 0px rgb(173 173 173 / 5%);
    cursor: pointer;
    transition: ease-in .2s;
    color: var(--colorText);

    &:focus{
        background-color:var(--circlePrimary);
        color: var(--white);
    }
    &.operator{
        color: var(--colorText);
        background-color: var(--backgroundOperator);
    }
    
    &#zero,&#clearPrime{
        grid-column: 1/3;        
    }

    &#clear, &#clearPrime{        
        color: var(--colorText);

        &:focus{
            background-color: var(--colorText);
            color: var(--white);
        }
    }
    &#result{        
        background-color: var(--operatorEqual);
        color: var(--white);
    }
}
`;


