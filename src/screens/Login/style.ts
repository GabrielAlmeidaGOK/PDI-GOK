import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff
`;

export const ImageView = styled.Image`
    width: 200px;
    height: 60px;
    margin-top: 60px;
    align-self: center;
`
export const TextTitle = styled.Text`
    font-size: 24px;
    color: black;
    margin-top: 60px;
    margin-left: 30px;
    font-weight: bold;
`

export const SubTitle = styled.Text`
    font-size: 20px;
    margin-left: 30px;
    margin-top: 30px;
    color: #7E7E7E
`

export const ViewInput = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ImageIcon = styled.Image`
    width: 16px;
    height: 16px;
    left: 40px;
    bottom: 12px;
    position: absolute
`
export const Input = styled.TextInput`
    border-color: #E5E5E5;
    border-width: 2px;
    border-radius: 4px;
    padding-left: 35px;
    align-self: center;
    margin-top: 60px;
    width: 85%;
    color: #000
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
`

export const Button = styled.TouchableOpacity`
    width: 85%;
    height: 40px;
    align-self: center;
    margin-top: 30px;
    background-color: #000;
    border-radius: 100px;
    justify-content: center;
`

export const TitleButton = styled.Text`
    font-size: 18px;
    text-align: center;
    color: #ffff;
`

export const TextFooter = styled.Text`
    font-size: 18px;
    text-align: center;
    align-self: center;
    bottom: 10px;
    position: absolute;
    color: #7E7E7E
`

export const ButtonCrash = styled.TouchableOpacity`
    width: 85%;
    height: 40px;
    align-self: center;
    margin-top: 30px;
    background-color: #361D3E;
    border-radius: 100px;
    justify-content: center;
`

export const ButtonCrashlytics = styled.TouchableOpacity`
    width: 85%;
    height: 40px;
    align-self: center;
    margin-top: 30px;
    background-color: #FFA611;
    border-radius: 100px;
    justify-content: center;
`

export const TextUsers = styled.Text`
    font-size: 18px;
    text-align: center;
    align-self: center;
    bottom: 40px;
    position: absolute;
    text-decoration: underline;
    color: #7E7E7E
`