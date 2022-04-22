import React, { useState, useEffect } from 'react';

import {
    Container,
    Header,
    Icon,
    Button,
    TextButton,
    List,
    ContainFlat,
    ViewCardTitle,
    IconAvatar,
    NameText,
    Arrow,
    ButtonDel,
    Del,
    NickName,
    Business,
    IconAtr,
    Atributes
} from './style';
import { Alert } from 'react-native'

//NAVIGATIONS
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStack';

//API
import axios from 'axios'
import api from '../../services/backend.api'

//OBSERVABILITY
import crashlytics from '@react-native-firebase/crashlytics';
import * as Sentry from "@sentry/react-native";

type repoScreenProps = StackNavigationProp<RootStackParamList, 'Repositories'>;

function Repositories() {

    const navigation = useNavigation<repoScreenProps>();
    const [usersData, setUsersData] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
            const response = await api.get(`getAll`, { cancelToken: source.token })

            setUsersData(response.data)
        };
        getUser()
    }, [usersData])

    async function deleteUser(_id: String) {
        try {
            await api.delete(`delete/${_id}`);
            setRefresh(true)
        } catch (error: any) {
            crashlytics().recordError(error);
            Sentry.captureException(error)
        }
    }

    function delAct(id: any) {
        Alert.alert(
            "Atenção",
            "Deseja mesmo remover esse perfil ?",
            [
                {
                    text: "Não",
                },
                {
                    text: "Sim",
                    onPress: () => deleteUser(id),
                },
            ]
        );
    }

    return (
        <Container>

            <Header>
                <Icon source={require('../../assets/images/title.png')} />
                <Button onPress={() => navigation.navigate('Auth')}>
                    <TextButton>Adicionar novo</TextButton>
                </Button>
            </Header>

            <List
                data={usersData}
                keyExtractor={(user: any) => user.login}
                renderItem={({ item, index }: any) => (

                    <ContainFlat key={index}>

                        <ViewCardTitle >

                            <IconAvatar source={{ uri: item.avatar_url }} />
                            <NameText>
                                {item.login}
                            </NameText>

                            <Arrow source={require('../../assets/images/arrow.png')} />

                            <ButtonDel onPress={() => delAct(item._id)}>
                                <Del source={require('../../assets/images/delete.png')} />
                            </ButtonDel>

                        </ViewCardTitle>

                        <NickName>@{item.name}</NickName>

                        <Atributes>
                            <IconAtr source={require('../../assets/images/business.png')} />
                            <Business>{item.company}</Business>
                            <IconAtr source={require('../../assets/images/place.png')} />
                            <Business>{item.location}</Business>
                            <IconAtr source={require('../../assets/images/star.png')} />
                            <Business>{item.public_repos}</Business>
                        </Atributes>

                    </ContainFlat>
                )
                }
            />
        </Container>
    );
}

export default Repositories;