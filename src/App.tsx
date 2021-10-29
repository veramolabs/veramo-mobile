import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native'

// Import agent from setup
import { agent } from './veramo'

interface Identifier {
  did: string
  alias?: string
}

const App = () => {
  const [identifiers, setIdentifiers] = useState<Identifier[]>([])
  const [alias, setAlias] = useState<string>('')

  // Add the new identifier to state
  const createIdentifier = async () => {
    try {
      const _id = await agent.didManagerCreate({ alias })
      setIdentifiers((s) => s.concat([_id]))
      setAlias('')
    } catch (error) {
      console.log(error)
    }
  }

  // Check for existing identifers on load and set them to state
  useEffect(() => {
    const getIdentifiers = async () => {
      const _ids = await agent.didManagerFind()
      setIdentifiers(_ids)

      // Inspect the id object in your debug tool
      // console.log('_ids:', _ids)
    }

    getIdentifiers()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView testID="scrollView">
        <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 20 }}>
            Identifiers
          </Text>
          <View
            style={{
              marginBottom: 50,
              marginTop: 20,
              margin: 15,
              borderRadius: 20,
              backgroundColor: '#EFEFEF',
            }}
          >
            {identifiers && identifiers.length > 0 ? (
              identifiers.map((id: Identifier, index: number) => (
                <View
                  key={id.did}
                  style={{
                    padding: 15,
                    borderBottomColor: '#DDDDDD',
                    borderBottomWidth: identifiers.length > index + 1 ? 1 : 0,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: 'bold' }}
                    testID={'item-identifier'}
                  >
                    {id.alias}
                  </Text>
                  <Text>{id.did}</Text>
                </View>
              ))
            ) : (
              <Text>No identifiers created yet</Text>
            )}
          </View>
          <View style={{ padding: 15 }}>
            <TextInput
              testID="input"
              placeholder="Add alias name (required)"
              style={{
                marginBottom: 20,
                backgroundColor: '#EFEFEF',
                padding: 15,
                borderRadius: 10,
              }}
              onChangeText={(text) => setAlias(text)}
              value={alias}
            />
            <Text>{alias}</Text>
            <Button
              disabled={!alias}
              onPress={() => createIdentifier()}
              title={'Create Identifier'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
