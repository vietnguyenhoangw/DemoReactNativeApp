import React, { useEffect } from 'react'
import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native'

// redux
import {useSelector, useDispatch} from 'react-redux';

// function
import { usePrevious } from '../Functions/AppFunction'

function SplashScreen({navigation}) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const userData = useSelector((state) => state.auth.userData)
    const fetchingCheckAuthToken = useSelector((state) => state.auth.fetchingCheckAuthToken)
    const preFetchingCheckAuthToken = usePrevious(fetchingCheckAuthToken)

    useEffect(() => {
        if (userData) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'AppStack' }]
          })
        }
      }, [userData])
    
      useEffect(() => {
        if (preFetchingCheckAuthToken && !fetchingCheckAuthToken) {
          if (!isAuthenticated) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'AuthStack' }]
            })
          }
        }
      }, [fetchingCheckAuthToken])

    return(
        <SafeAreaView style={styles.mainContainer}>
            <ActivityIndicator />
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
  })