import React from 'react';

import {Container, Details, Title, Img, Description} from './style';

import img13 from '../../assets/images/13.png';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Description>
      </Details>

      <Img source={img13} />
    </Container>
  );
}
