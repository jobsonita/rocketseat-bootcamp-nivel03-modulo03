import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import Icon from 'react-native-vector-icons/Feather'
import * as Yup from 'yup'

import logoImg from '../../assets/logo.png'

import Button from '../../components/Button'
import Input from '../../components/Input'

import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  ForgotPassword,
  ForgotPasswordText,
  Title,
} from './styles'

import getValidationErrors from '../../utils/getValidationErrors'

interface SignInFormData {
  email: string
  password: string
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
})

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const passwordInputRef = useRef<TextInput>(null)

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

  const handleSubmit = useCallback(
    async ({ email, password }: SignInFormData): Promise<void> => {
      formRef.current?.setErrors({})

      try {
        await schema.validate({ email, password }, { abortEarly: false })
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error))
        } else {
          Alert.alert(
            'Falha na autenticação',
            'Verifique suas credenciais e tente novamente'
          )
        }
      }
    },
    []
  )

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
              <Title>Faça seu logon</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="email"
                keyboardType="email-address"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                secureTextEntry
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>

            <ForgotPassword onPress={() => console.log('Esqueci')}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {(Platform.OS === 'ios' || !keyboardOpen) && (
        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      )}
    </>
  )
}

export default SignIn
