import React, {useState} from 'react';
import * as Styled from './styles';
import Battery from '../../assets/images/battery.png';
import Wifi from '../../assets/images/wifi.png';
import Signal from '../../assets/images/signal.png';



function Result() {

    const [result, setResult] = useState("");

    const handleClick = (e) => {
      setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }

    const backspace = () => {
      setResult(result.slice(0,-1));
  }

    const calculate = () =>{
      try{
        setResult(eval(result).toString());
      } catch(err){
        setResult("Error")
      }      
    }

    function Time(){
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      
      if (minutes < 10 && hours < 10) {
        return '0'+hours+':0'+minutes;  
      }
      if (hours < 10) {
        return '0'+hours+':'+minutes;
      }
      if (minutes < 10) {
        return hours+':0'+minutes;    
      }
      else{
        return hours+':'+minutes;
      }
      

      
    }

  return (
      <>
        <Styled.ResultBox>
          <Styled.HeaderPhone>
          <Styled.Time>
            {Time()}
          </Styled.Time>
          <Styled.Notch>
          </Styled.Notch>
          <Styled.IconsRight>
            <Styled.Battery src={Battery} />
            <Styled.Wifi src={Wifi} />
            <Styled.Signal src={Signal} />
          </Styled.IconsRight>
          </Styled.HeaderPhone>
          <Styled.Form>
            <Styled.SetInput value={result} />   
          </Styled.Form>
          <Styled.KeyBoard>
            <button onClick={backspace} id="clearPrime" className="highlight">Clear</button>
            <button onClick={clear} id="clear" className="highlight">C</button>            
            <button name="/" onClick={handleClick} className="operator">&divide;</button>    
            <button name="*" onClick={handleClick} className="operator">&times;</button>                
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>                        
            <button name="9" onClick={handleClick}>9</button>   
            <button name="-" onClick={handleClick} className="operator">&ndash;</button>                       
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>                
            <button name="6" onClick={handleClick}>6</button>
            <button name="+" onClick={handleClick}>+</button>                    
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>            
            <button name="3" onClick={handleClick}>3</button>                       
            <button name="0" onClick={handleClick} id="zero">0</button>
            <button name="." onClick={handleClick}>.</button>    
            <button onClick={calculate} id="result">=</button>                     
        </Styled.KeyBoard>                
        </Styled.ResultBox>
      </>
  )
}

export default Result;