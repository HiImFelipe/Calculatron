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
import {useState, useRef, useEffect} from 'react';

const BasicCalculator = () => {
  const [prompt, setPrompt] = useState({
    value: '0',
    hasJustStarted: true,
  });
  const inputRef = useRef();

  const handlePromptChange = (event) => {
    setPrompt((prevPrompt) => ({...prevPrompt, value: event.target.value}));
  };

  const addValueToPrompt = (item) => {
    if (item.type === 'mathOperation') {
      if (prompt.value.length <= 1 && prompt.value === '0') return;

      const lastCharacterIsMathOperation = mathOperations.some(
        (mathOperation) => prompt.value.split('')[prompt.value.length - 1] === mathOperation.display
      );

      if (lastCharacterIsMathOperation) return;
    }

    setPrompt((prevPrompt) => {
      if (!prevPrompt.hasJustStarted) return {...prevPrompt, value: prevPrompt.value + item.display};
      return {...prevPrompt, value: item.display, hasJustStarted: false};
    });
  };

  useEffect(() => {
    inputRef.current.selectionStart = inputRef.current.value.length;
    inputRef.current.selectionEnd = inputRef.current.value.length;
    inputRef.current.focus();
  }, [prompt]);

  return (
    <Container>
      <CalculatorHeader>
        <Title>Calculadora Padrão</Title>
      </CalculatorHeader>

      <CalculatorResultContainer>
        <Result
          value={prompt.value}
          ref={inputRef}
          autoFocus={true}
          onChange={(event) => {
            handlePromptChange(event);
            inputRef.current.focus();
          }}
        />
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
            <Button onClick={() => addValueToPrompt(item)}>
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
