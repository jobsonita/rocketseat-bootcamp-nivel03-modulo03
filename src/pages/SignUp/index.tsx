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

import { Container, BackToSignIn, BackToSignInText, Title } from './styles'

import getValidationErrors from '../../utils/getValidationErrors'

interface SignUpFormData {
  name: string
  email: string
  password: string
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'No mínimo 6 caracteres'),
})

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const emailInputRef = useRef<TextInput>(null)
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
    async ({ name, email, password }: SignUpFormData): Promise<void> => {
      formRef.current?.setErrors({})

      try {
        await schema.validate({ name, email, password }, { abortEarly: false })
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
              <Title>Crie sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
              />

              <Input
                ref={emailInputRef}
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
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
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
