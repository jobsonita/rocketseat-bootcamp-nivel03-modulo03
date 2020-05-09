import React, { useCallback, useEffect, useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'

import logoImg from '../../assets/logo.png'

import Button from '../../components/Button'
import Input from '../../components/Input'

import { Container, BackToSignIn, BackToSignInText, Title } from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()

  const [keyboardOpen, setKeyboardOpen] = useState(false)

  const _keyboardShown = useCallback(() => setKeyboardOpen(true), [])
  const _keyboardHidden = useCallback(() => setKeyboardOpen(false), [])

  useEffect(() => {
    if (Platform.OS !== 'ios') {
      Keyboard.addListener('keyboardDidShow', _keyboardShown)
      Keyboard.addListener('keyboardDidHide', _keyboardHidden)
    }

    return () => {
      Keyboard.removeListener('keyboardDidShow', () => _keyboardShown)
      Keyboard.removeListener('keyboardDidHide', () => _keyboardHidden)
    }
  }, [_keyboardHidden, _keyboardShown])

  return (
    <>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />

            <Input name="email" icon="mail" placeholder="E-mail" />

            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => console.log('Entrar')}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {(Platform.OS === 'ios' || !keyboardOpen) && (
        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      )}
    </>
  )
}

export default SignUp
