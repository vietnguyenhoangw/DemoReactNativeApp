import React, { FC, forwardRef, Ref } from 'react'
import Toast from 'react-native-easy-toast'

// Styles
import styles from './Styles/DRSToastCustomStyle'

/*
 * Toast custom
 * create ref, ref.current.show('text', milliSec?)
 * */
function DRSToastCustom({toastPosition, toastStyle, textStyle}, ref) {
  return (
    <Toast
      ref={ref}
      style={toastStyle ? toastStyle : styles.defaultToastStyle}
      position={toastPosition}
      textStyle={textStyle ? textStyle : styles.defaultTextStyle}
    />
  );
}

export default DRSToastCustom
