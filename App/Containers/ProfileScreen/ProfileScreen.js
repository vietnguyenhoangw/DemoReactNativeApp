import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Alert, ScrollView, Image} from 'react-native';

// styles
import styles from './Styles/ProfileScreenStyles'

// theme
import { Images } from '../../Themes'

//components
import { DRSMultiplePhoto } from '../../Components'

function ProfileScreen() {
    return (
        <View style={styles.viewOnScreen}>
            <Image style={styles.coverPhoto} source={Images.friendsBackground} />
            <Image style={styles.avatarPhoto} source={Images.friendsBackground} />
            <View style={styles.nameContaint}>
                <Text style={styles.nameText}>Daniel Nguyễn</Text>
            </View>
            <View style={styles.descriptions}>
                <Text style={styles.descriptionsText}>HCM.C - 22 years old</Text>
            </View>
            <DRSMultiplePhoto
                containerStyle={styles.multiplePhotoContainer}
                btnOnPressAble={false}
                sourceImage1={Images.friendsBackground}
                sourceImage2={Images.friendsBackground}
                sourceImage3={Images.friendsBackground}
            />
        </View>
    );
}

export default ProfileScreen;