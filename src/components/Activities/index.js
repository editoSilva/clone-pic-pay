import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../assets/images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> Pagou <Bold>@tiagovalverde</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Èdito Silva</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value> R$ 18,00</Value>

            <Divider />

            <FontAwesome5 name="lock" size={14} color="#fff" />
            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <FontAwesome5 name="comment-alt" size={14} color="#fff" />
            </Option>
            <OptionLabel>0</OptionLabel>
            <Option>
              <FontAwesome5 name="heart" size={14} color="#fff" />
            </Option>
            <OptionLabel>0</OptionLabel>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
