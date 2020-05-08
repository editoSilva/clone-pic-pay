import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import qrcodescanner from '../../assets/icons/qrcodescanner.png';

import {
  Wrapper,
  Container,
  Header,
  QrCodeScanner,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <QrCodeScanner source={qrcodescanner} />

          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <FontAwesome5 name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />

        <Activities />

        <Tips />

        <Banner />
      </Container>
    </Wrapper>
  );
}
