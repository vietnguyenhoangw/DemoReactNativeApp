import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';


// redux
import {useSelector, useDispatch} from 'react-redux';
import AuthActions from '../../Redux/AuthRedux';

// styles
import styles from './Styles/ProfileScreenStyles'

// theme
import { Images } from '../../Themes'

//components
import { DRSMultiplePhoto, DRSFlatlist, DRSImage } from '../../Components'

// fake-data
import { fakeData } from '../../Configs/fakeData'

function ProfileScreen() {
    const userState = useSelector((state) => state.auth);
    const userData = userState.userData.user

    if (fakeData) {
        const renderHeader = () => {
            return (
                <View>
                    <DRSImage imageStyles={styles.coverPhoto} source={userData.coverUrl} />
                    <DRSImage imageStyles={styles.avatarPhoto} source={userData.avatarUrl} />
                    <View style={styles.nameContaint}>
                        <Text style={styles.nameText}>{userData.fullName}</Text>
                    </View>
                    <View style={styles.descriptions}>
                        <Text style={styles.descriptionsText}>{userData.bio ? userData.bio : '. . .'}</Text>
                    </View>
                    <DRSMultiplePhoto
                        containerStyle={styles.multiplePhotoContainer}
                        btnOnPressAble={false}
                        sourceImage1={Images.friendsBackground}
                        sourceImage2={Images.friendsBackground}
                        sourceImage3={Images.friendsBackground}
                    />
                </View>
            )
        }

        return (
            <View style={styles.viewOnScreen}>
                <DRSFlatlist
                    renderHeader={renderHeader}
                    listData={fakeData}
                />
            </View>
        );
    } else {
        <View>
            <Text>Error</Text>
        </View>
    }
}

export default ProfileScreen;