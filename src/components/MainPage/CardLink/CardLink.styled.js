import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 250px;
  height: 300px;
  padding: 15px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
`;

export const ImedgeContainer = styled.div`
  width: 100%;
`;
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin-bottom: 15px;
`;
export const TitleCard = styled.h4`
  text-align: center;
  color: var(--main-green);
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 18px;
`;
export const ButtonCard = styled(NavLink)`
  width: 70%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  color: var(--main-dark-blue);
  background: var(--header-main-color);
  border: 1px solid var(--main-dark-blue);

  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: var(--main-dark-blue);
    color: var(--header-main-color);
    border: 1px solid transparent;
  }
`;
