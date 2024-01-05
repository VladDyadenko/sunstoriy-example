import styled from 'styled-components';

export const DayWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: row;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
  }
`;
export const LessonsWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 10px;
`;
export const MainTableContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 15px;
`;
export const DayDeafult = styled.div`
  font-family: 'RobotoSlab';
  font-weight: 400;
  border-radius: 8px;
  height: 70px;
  width: 100%;
  min-width: 200px;
  max-width: 250px;
  padding: 5px;
  margin-bottom: 10px;
  background-color: var(--main-blue);
  border: 2px solid var(--main-green);
`;

export const DayDeafultInfo = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 900;
  text-align: center;
  color: var(--main-green);
  margin-bottom: 10px;
`;
export const DayContainer = styled.div`
  width: 250px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;

  @media screen and (min-width: 376px) {
    margin-right: 10px;
  }
`;

export const LessonsContainer = styled.ul``;
export const LessonsItem = styled.li`
  font-family: 'RobotoSlab';
  font-weight: 400;
  cursor: pointer;
  height: 80px;
  width: 250px;
  flex-direction: column;
  border-radius: 8px;
  /* border: 2px solid transparent; */
  margin-bottom: 10px;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  border: 2px solid ${props => props['aria-current'] || '#fff'};
  color: ${props => props['aria-current'] || '#fff'};
`;

export const CardInfo = styled.p`
  font-family: 'RobotoSlab';
  font-weight: 500;
  font-size: 14px;
  padding: 5px;
  text-align: center;
`;
export const OneTimeContainer = styled.ul`
  padding: 0 5px;
  :not(:last-child) {
    margin-right: 5px;
  }
`;
export const OneTimeItem = styled.li`
  height: 70px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
