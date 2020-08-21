import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'

// style
import styles from './Styles/DRSPostCardStyle'

// components
import { DRSImage, DRSImageButton } from '../../Components'

// theme
import { Metrics, Images } from '../../Themes'

function DRSPostCard() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <DRSImage resizeMode={'cover'} imageStyles={styles.avatar} source={Images.friendsBackground} />
                <View style={styles.nameContain}>
                    <Text style={styles.userNameText}>Daniel Nguyen</Text>
                    <Text style={styles.dateText}>20/20/2020</Text>
                </View>
                <DRSImageButton sourceImage={Images.subMenu} />
            </View>
            <DRSImage imageStyles={styles.post} source={Images.friendsBackground} />
            <View style={styles.header}>
                <Text style={styles.dateText}>0 likes |</Text>
                <Text style={styles.dateText}> 0 comments</Text>
            </View>
            <View style={styles.bottom}>
                <DRSImageButton imagesStyle={styles.btnBottom} btnContainer={styles.btnBottomContainer} sourceImage={Images.tick} />
                <DRSImageButton imagesStyle={styles.btnBottom} btnContainer={styles.btnBottomContainer} sourceImage={Images.chat} />
                <DRSImageButton imagesStyle={styles.btnBottom} btnContainer={styles.btnBottomContainer} sourceImage={Images.share} />
            </View>
        </TouchableOpacity>
    );
}

export default DRSPostCard;
