import styled from 'styled-components/native';
import { StyleSheet, FlatList } from 'react-native';

interface User {
    id: number
    name: string
  }

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #E5E5E5
`;

export const Header = styled.View`
    height: 60px;
    width: 100%;
    flex-direction: row;
    background-color: #fff;
    justify-content: space-between
`;

export const Icon = styled.Image`
    width: 120px;
    height: 40px;
    margin-left: 20px;
    margin-top: 10px;
`

export const Button = styled.TouchableOpacity`
    width: 154px;
    height: 40px;
    justify-content: center;
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 100px;
    background-color: #000
`

export const TextButton = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #fff
`

export const List = styled(FlatList as new () => FlatList<User>)`
    background-color: #f7f7f7;
    flex-direction: column;
`

export const ContainFlat = styled.View`
  margin-top: 30px;
  width: 90%;
  height: 160px;
  align-self: center;
  background-color: #fff
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
`

export const ViewCardTitle = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between
`

export const IconAvatar = styled.Image`
  width: 64px;
  height: 64px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 64px;
`
export const NameText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 35px;
  margin-left: 20px;
  width: 40%;
  color: #000
`

export const Arrow = styled.Image`
  width: 12px;
  height: 18px;
  margin-top: 35px;
  margin-right: 60px;
  tint-color: #000
`

export const NickName = styled.Text`
  font-size: 12px;
  margin-left: 105px;
  position: absolute;
  top: 65px;
  color: #000
`

export const Atributes = styled.View`
  flex-direction: row;
  width: 100%
`

export const Business = styled.Text`
  font-size: 16px;
  color: #7E7E7E;
  margin-top: 35px;
  margin-left: 20px;
`

export const IconAtr = styled.Image`
  width: 13.5px;
  height: 16px;
  margin-top: 35px;
  tint-color: #E5E5E5;
  margin-left: 25px;
`

export const Del = styled.Image`
  width: 16px;
  height: 18px;
  margin-left: 6px;
  margin-top: 5px;
  tint-color: #000;
`

export const ButtonDel = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
  margin-top: 30px;
  border-radius: 20px;
  margin-right: 35px;
  background-color: #E5E5E5;
`
