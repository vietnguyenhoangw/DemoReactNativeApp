import React, { FC } from 'react'
import { Image, ImageResizeMode, ImageSourcePropType } from 'react-native'
import FastImage from 'react-native-fast-image'

// Functions
import { isUrl } from '../../../Functions/AppFunction'

function DRSImage({
    source,
    imageStyles,
    resizeMode
}) {
    return typeof source === 'string' && isUrl(source) ? (
        <FastImage source={{ uri: source }} style={imageStyles} />
    ) : (
            <Image
                source={typeof source === 'string' ? { uri: source } : source}
                resizeMode={resizeMode}
                style={imageStyles}
            />
        )
}

DRSImage.defaultProps = {
    resizeMode: 'contain'
}

export default DRSImage
