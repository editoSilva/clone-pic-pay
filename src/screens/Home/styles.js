import styled from 'styled-components/native';
import {qrcodescanner} from '../../assets/icons/qrcodescanner.png';

export const Container = styled.ScrollView``;

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const QrCodeScanner = styled.Image`
  width: 28px;
  height: 28px;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 08);
  font-size: 14px;
  text-align: center;
`;
export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
