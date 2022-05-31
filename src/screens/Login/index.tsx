import React, { useState, useEffect } from 'react';

//STYLES
import {
  Container,
  ImageView,
  TextTitle,
  SubTitle,
  ViewInput,
  Input,
  ImageIcon,
  Button,
  TitleButton,
  TextUsers,
  TextFooter,
  ButtonCrash,
  ButtonCrashlytics
} from './style'

//NAVIGATIONS
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStack';

//API
import api from '../../services/api'
import backend from '../../services/backend.api'

//OBSERVABILITY
import crashlytics from '@react-native-firebase/crashlytics';
import * as Sentry from "@sentry/react-native";

interface IUsers {
  login: String,
  name: String,
  company: String,
  avatar_url: String,
  location: String,
  starred_url: String
}

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

function AuthScreen() {

  const navigation = useNavigation<authScreenProp>();
  const [newUser, setNewUser] = useState<any>('')
  const [data, setData] = useState<IUsers[]>([]) as any

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  const getUser = async (newUser: any) => {
    try {
      const response = await api.get(`users/${newUser}`)
      setData(response.data)
      saveData()

    }catch (err: any) {
      crashlytics().recordError(err);
      Sentry.captureException(err);
    }
  };

  const saveData = async () => {
    try {
      await backend.post(`register`, {
        login: data.login,
        name: data.name,
        company: data.company,
        avatar_url: data.avatar_url,
        location: data.location,
        public_repos: data.public_repos,
      })

      navigation.navigate('Repositories')
      crashlytics().log(`User has signed in`);

    } catch (err: any) {
      crashlytics().recordError(err);
      Sentry.captureException(err)
    }
  }

  return (
    <Container>

      <ImageView source={require('../../assets/images/title.png')} />

      <TextTitle>Buscar usuários</TextTitle>
      <SubTitle>Crie sua conta através do seu usuário
        {'\n'}do GitHub
      </SubTitle>

      <ViewInput>
        <ImageIcon source={require('../../assets/images/user_input.png')} />
        <Input
          value={newUser}
          onChangeText={(text: any) => setNewUser(text)}
          placeholder='@username'
          placeholderTextColor="#7E7E7E"
        />
      </ViewInput>

      <Button onPress={() => getUser(newUser)}>
        <TitleButton>Cadastrar</TitleButton>
      </Button>

      <ButtonCrash onPress={() => Sentry.nativeCrash()}>
        <TitleButton>Sentry Crash</TitleButton>
      </ButtonCrash>

      <ButtonCrashlytics onPress={() => crashlytics().crash()}>
        <TitleButton>Crashlytics</TitleButton>
      </ButtonCrashlytics>


      <TextUsers onPress={() => navigation.navigate('Repositories')}>Ver cadastrados</TextUsers>
      <TextFooter>Termos de política e privacidade</TextFooter>

    </Container>
  );
}

export default AuthScreen;