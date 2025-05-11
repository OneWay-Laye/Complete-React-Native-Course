import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

// Import Themed Components
import ThemedView from '../components/ThemedView'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>About Page</ThemedText>
      <Link style={styles.link} href="/">
            <ThemedText>
                Home Page
            </ThemedText>
        </Link>
        <Link style={styles.link} href="/contact">
            <ThemedText>
                Contact Page
            </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default About

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