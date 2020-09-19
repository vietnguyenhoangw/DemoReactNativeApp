import React from 'react'
import { StyleSheet } from 'react-native'

// theme
import { Metrics, Colors } from '../../../Themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: Metrics.doubleBaseMargin,
        marginBottom: Metrics.baseMargin,
        backgroundColor: Colors.greyLight
    },
    header: {
        flexDirection: 'row',
        margin: Metrics.baseMargin,
        alignItems: 'center',
    },
    avatar: {
        height: 40,
        width: 40,
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