import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: 500px;
  height: 580px;
  background-color: ${props => props.theme.colors.white};

  margin-left: auto;
  margin-right: auto;
  border: 2px solid ${props => props.theme.colors.black};
  border-radius: 5px;
`;
export const Description = styled.div`
  padding-top: 80px;
  margin-bottom: 50px;
`;
export const Avatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  color: black;
`;
export const Tag = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  color: gray;
`;
export const Location = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  color: gray;
`;
export const Stats = styled.ul`
  height: 140px;
  display: flex;
  background-color: #f6f6f6;
  justify-content: flex-start;
  align-items: center;
`;
export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 30px; */
  height: 140px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-basis: calc(100% / 3);
  border-right: 1px solid gray;
  border-top: 1px solid gray;
`;
export const Label = styled.span`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  color: gray;
`;
export const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
