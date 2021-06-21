import {useEffect} from 'react';
import OneSignal from 'react-native-onesignal';

const PushNotificationController = () => {
  OneSignal.init('8849fb72-df4e-4865-9ec9-18ca791371ce', {
    kOSSettingsKeyAutoPrompt: true,
  });

  OneSignal.enableVibrate(true);
  OneSignal.enableSound(true);
  OneSignal.inFocusDisplaying(2);

  const onReceived = (notification) => {
    console.log('onReceived -> notification', notification);
  };
  const onOpened = (openResult) => {
    console.log('onOpened -> openResult', openResult);
  };
  const onIds = () => {
    // console.log('onIds -> device', device);
  };

  useEffect(() => {
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  return null;
};

export default PushNotificationController;
