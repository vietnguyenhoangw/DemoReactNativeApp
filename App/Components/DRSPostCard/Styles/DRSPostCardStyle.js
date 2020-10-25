import React from 'react'
import { StyleSheet } from 'react-native'

// theme
import { Metrics, Colors } from '../../../Themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: Metrics.doubleBaseMargin,
        marginBottom: Metrics.baseMargin,
        backgroundColor: Colors.white, 
        borderRadius: 20,
        shadowColor: '#0000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2
    },
    header: {
        flexDirection: 'row',
        marginTop: Metrics.baseMargin,
        marginHorizontal: Metrics.baseMargin * 2,
        alignItems: 'center',
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginTop: Metrics.baseMargin,
    },
    userNameText: {
        fontWeight: 'bold'
    },
    dateText: {
        fontSize: 11
    },
    nameContain: {
        margin: Metrics.smallMargin - 2,
        marginLeft: Metrics.smallMargin + 2,
        flex: 1
    },
    bottom: {
        marginTop: Metrics.baseMargin,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    btnBottomContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 15
    },
    post: {
        marginTop: Metrics.baseMargin,
        width: '100%',
        height: Metrics.screenHeight / 3,
        backgroundColor: Colors.black
    },
    btnBottom: {
        tintColor: Colors.black
    },
    description: {
        marginHorizontal: Metrics.baseMargin,
        marginBottom: Metrics.baseMargin
    }
})