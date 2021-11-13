import * as Styled from './styles';
import Calculator from '../../components/Calculator';

function Home() {

    
  return (
      <>
        <Styled.Body>
            <Styled.BoxEverything>
                <Styled.Title>
                Calculadora React
                </Styled.Title>
            </Styled.BoxEverything>
            <Styled.Container>
                <Styled.Row>
                    <Styled.Box>                        
                        <Calculator />                        
                    </Styled.Box>
                </Styled.Row>
            </Styled.Container>
        </Styled.Body>
      </>
  )
}

export default Home;