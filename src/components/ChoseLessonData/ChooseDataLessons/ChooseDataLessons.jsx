import { offices } from 'assets/constants/AddLessonsConstans';
import { ChooseDataWrapper, ChooseOffices } from './ChooseDataLessons.styled';

const ChooseDataLessons = ({ setOffices, currentDefaultOffice }) => {
  const options = offices.map(office => {
    return (
      <ChooseOffices.Option key={office.name} value={office.name}>
        <span>{office.name}</span>
      </ChooseOffices.Option>
    );
  });

  const handleChange = value => {
    setOffices(value);
  };

  return (
    <ChooseDataWrapper>
      <ChooseOffices
        mode="multiple"
        defaultValue={currentDefaultOffice}
        onChange={handleChange}
      >
        {options}
      </ChooseOffices>
    </ChooseDataWrapper>
  );
};

export default ChooseDataLessons;
