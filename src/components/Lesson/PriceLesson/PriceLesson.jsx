import { useEffect, useState } from 'react';
import {
  InputPrice,
  PriceContainer,
  TitlePriceLesson,
} from './PriceLesson.styled';

const PriceLesson = ({ setFieldValue, currentPrice }) => {
  const [price, setPrice] = useState(350);

  useEffect(() => {
    if (currentPrice) {
      setPrice(currentPrice);
    }
  }, [currentPrice]);

  const handleInputChange = e => {
    const currentPrice = e.target.value;
    setPrice(currentPrice);
    setFieldValue('price', currentPrice);
  };
  return (
    <PriceContainer>
      <TitlePriceLesson>Вартість:</TitlePriceLesson>
      <InputPrice type="text" value={price} onChange={handleInputChange} />
      <TitlePriceLesson>грн.</TitlePriceLesson>
    </PriceContainer>
  );
};

export default PriceLesson;
