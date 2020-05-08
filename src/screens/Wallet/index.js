import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Switch} from 'react-native';

import {
  Wraper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Acition,
  ActionLabel,
  UserBalance,
  UserBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardInfo,
  CardTitle,
  Img,
  AddButton,
  AddLabel,
} from './styles';

import creditCard from '../../assets/images/credit-card.png';

export default function Wallet() {
  const [isVisible, setIsvisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToogleVisible() {
    setIsvisible(prevState => !prevState);
  }

  function handleToogleUseBalance() {
    setUseBalance(prevState => !prevState);
  }

  return (
    <Wraper>
      <Header
        colors={useBalance ? ['#00ffc6', '#00ac4a'] : ['#d3d3d3', '#868686']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '0,00' : '----'}</Bold>
            </Value>

            <EyeButton onPress={handleToogleVisible}>
              <FontAwesome5
                name={isVisible ? 'eye' : 'eye-slash'}
                size={25}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está 100% do CDI</Info>

          <Actions>
            <Acition>
              <FontAwesome5 name="money-bill" size={20} color="#fff" />
              <ActionLabel>Adicional</ActionLabel>
            </Acition>

            <Acition>
              <FontAwesome5 name="university" size={20} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Acition>
          </Actions>
        </HeaderContainer>
      </Header>

      <UserBalance>
        <UserBalanceTitle>Usar saldo ao pagar</UserBalanceTitle>

        <Switch value={useBalance} onValueChange={handleToogleUseBalance} />
      </UserBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamento mesmo
                quando não tiver saldo no seu PocPay
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <FontAwesome5 name="plus-circle" size={30} color="#0db060" />
            <AddLabel>Adicionar Cartão de crédito</AddLabel>
          </AddButton>
        </Card>
      </PaymentMethods>
    </Wraper>
  );
}
