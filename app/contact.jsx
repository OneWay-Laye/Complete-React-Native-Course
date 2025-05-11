import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

// Import Themed Components
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'


const Contact = () => {
  return (
    <ThemedView style={styles.container}>
    <ThemedText style={styles.title} title={true}>Contact Page</ThemedText>
    <Link style={styles.link} href="/">
          <ThemedText>
              Home Page
          </ThemedText>
      </Link>
      <Link style={styles.link} href="/about">
          <ThemedText>
              About Page
          </ThemedText>
      </Link>
  </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})