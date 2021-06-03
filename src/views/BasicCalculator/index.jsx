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

const BasicCalculator = () => {
  return (
    <Container>
      <CalculatorHeader>
        <Title>Calculadora Padrão</Title>
      </CalculatorHeader>

      <CalculatorResultContainer>
        <Result>0</Result>
      </CalculatorResultContainer>

      <CalculatorOperationsContainer>
        <TopOperationsContainer>
          {consoleOperations.map((item, index) => (
            <Button>
              <p>{item.display}</p>
            </Button>
          ))}
        </TopOperationsContainer>

        <SideOperationsContainer>
          {mathOperations.map((item, index) => (
            <Button>
              <p>{item.display}</p>
            </Button>
          ))}
        </SideOperationsContainer>

        <NumbersContainer numberOfColumns={3} numberOfRows={3}>
          {numbers.map((item, index) => (
            <Button>
              <p>{item.display}</p>
            </Button>
          ))}
        </NumbersContainer>
      </CalculatorOperationsContainer>
    </Container>
  );
};

export default BasicCalculator;
