import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;        
}
html, body, #root{
    height: 100%;
    background-color: var(--background);
    overflow-x: hidden;
    /* overflow-y: hidden; */
}
*, button, input {
    border: 0;
    outline: 0;
    font-family: 'Poppins', sans-serif;
}
:root {
    --background: #E4DFF3;
    --greenWhite: #80E7C9;
    --orange: #ff7a29;
    --gray: #e1e1e6;
    --text: #a8a8b3;
    --white: #ffffff;
    --black: #000000;
    --purple: #C188D6;
    --circlePrimary: #7a29ff;
    --circleSecondary:#AF7EFF;
    --colorText: #7A29FF;
    --backgroundOperator: #E3D1FF;
    --operatorEqual: #AF7EFF;
    --screenNumber: #484848;

}

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: var(--circlePrimary);
}


`;