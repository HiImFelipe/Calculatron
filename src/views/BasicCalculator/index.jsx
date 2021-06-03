import {
  CalculatorHeader,
  CalculatorOperationsContainer,
  CalculatorResultContainer,
  NumbersContainer,
  TopOperationsContainer,
  SideOperationsContainer,
  Container,
  Result,
  Title,
  Button,
} from './styles';
import {numbers, mathOperations, consoleOperations} from '../../constants/validButtons';
import {useState} from 'react';

const BasicCalculator = () => {
  const [prompt, setPrompt] = useState({
    value: 0,
    hasJustStarted: true,
  });

  const addValueToPrompt = (item) => {
    setPrompt((prevPrompt) => {
      if (!prevPrompt.hasJustStarted) return {...prevPrompt, value: prevPrompt.value + item.display};
      return {...prevPrompt, value: item.display, hasJustStarted: false};
    });
  };

  return (
    <Container>
      <CalculatorHeader>
        <Title>Calculadora Padrão</Title>
      </CalculatorHeader>

      <CalculatorResultContainer>
        <Result>{prompt.value}</Result>
      </CalculatorResultContainer>

      <CalculatorOperationsContainer>
        <TopOperationsContainer>
          {consoleOperations.map((item) => (
            <Button
              onClick={() => {
                item.operation(setPrompt);
              }}>
              <p>{item.display}</p>
            </Button>
          ))}
        </TopOperationsContainer>

        <SideOperationsContainer>
          {mathOperations.map((item) => (
            <Button>
              <p>{item.display}</p>
            </Button>
          ))}
        </SideOperationsContainer>

        <NumbersContainer numberOfColumns={3} numberOfRows={3}>
          {numbers.map((item) => (
            <Button onClick={() => addValueToPrompt(item)}>
              <p>{item.display}</p>
            </Button>
          ))}
        </NumbersContainer>
      </CalculatorOperationsContainer>
    </Container>
  );
};

export default BasicCalculator;
