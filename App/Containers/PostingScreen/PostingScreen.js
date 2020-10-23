import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

// components
import {DRSImage, DRSViewImage} from '../../Components';
import {Metrics, Colors} from '../../Themes';

function PostingScreen({route}) {
  const {imageUri} = route.params;

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', padding: 8}}>
        <TextInput
          textAlignVertical={'top'}
          numberOfLines={9}
          multiline={true}
          style={{
            backgroundColor: Colors.greyLight,
            width: Metrics.screenWidth * 0.7,
          }}
          placeholder={'Write some thing...'}
        />
        <View style={{flex: 1}}>
          <DRSViewImage
            imageSource={imageUri}
            imageStyles={{width: 80, height: 80, alignSelf: 'center'}}
          />
        </View>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

export default PostingScreen;
