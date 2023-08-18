import styled from 'styled-components';

export const StatisticSection = styled.section`
  margin-top: 60px;
  padding-top: 50px;
  width: 500px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #111111;
`;
export const Title = styled.h2`
  color: #111111;
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;
export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 4);
  height: 100px;
  margin-bottom: 20px;
  align-items: center;
  background: ${getRandomHexColor};
`;
export const Label = styled.span`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
`;
export const Percentage = styled.span`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
