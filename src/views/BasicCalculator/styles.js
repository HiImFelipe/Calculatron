import styled from 'styled-components';
import colors from '../../constants/colors';

export const CalculatorHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 5px 16px;

  background-color: ${colors.darkenedPrimary};
  color: #fff;
`;

export const CalculatorResultContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 16px;

  background-color: ${colors.darkenedSecondary};
  color: #fff;
  opacity: 0.25;
`;

export const CalculatorOperationsContainer = styled.footer`
  display: grid;
  flex: 1;

  grid-template-columns: 75vw 1fr;
  grid-template-rows: 1fr calc(80% - 15px);
  grid-template-areas:
    'top-operations side-operations'
    'numbers side-operations';
`;

export const NumbersContainer = styled.div`
  display: grid;
  grid-area: numbers;
  flex: 1;
  grid-template-columns: ${({numberOfColumns}) => {
    return `repeat(${numberOfColumns}, 1fr)`;
  }};

  column-gap: 15px;
  row-gap: 15px;
  padding: 0 15px 15px 15px;

  background-color: ${colors.middle};
  color: #fff;
`;

export const TopOperationsContainer = styled.div`
  display: flex;
  grid-area: top-operations;
  flex-direction: row;
  flex: 1;

  column-gap: 15px;
  row-gap: 15px;
  padding: 15px;

  background-color: ${colors.middle};
  color: #fff;
`;

export const SideOperationsContainer = styled.aside`
  display: grid;
  grid-area: side-operations;
  flex-direction: column;
  flex: 1;

  column-gap: 15px;
  row-gap: 15px;
  padding: 15px;

  background-color: ${colors.darkenedPrimary};
  color: #fff;
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Result = styled.p`
  font-size: 8vh;
  margin-bottom: 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  padding: 12px 0;
  font-weight: normal;
`;

export const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: rgb(255, 255, 255);

  border-style: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;
