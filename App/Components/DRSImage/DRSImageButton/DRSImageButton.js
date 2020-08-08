import React, { FC } from 'react'
import { TouchableOpacity, View, Image } from 'react-native'

// Styles
import { Images } from '../../../Themes'
import styles from '../DRSImageButton/Styles/DRSImageButtonStyle'

function DRSImageButton({
    imagesStyle,
    sourceImage,
    btnOnPressAble,
    onPressBtn,
    sourceIcon}) {
    return (
        <TouchableOpacity style={styles.containerStyle} onPress={onPressBtn}>
            <Image style={imagesStyle} source={sourceImage} />
            {btnOnPressAble && (
                <View style={styles.containerCameraIcon}>
                    <Image
                        source={sourceIcon ? sourceIcon : Images.camera}
                        style={styles.cameraIcon}
                    />
                </View>
            )}
        </TouchableOpacity>
    )
}


export default DRSImageButton
