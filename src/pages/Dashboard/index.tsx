import React from 'react'
import { Button, View } from 'react-native'

import { useAuth } from '../../context/auth'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  )
}

export default Dashboard
