import Upload from 'react-native-background-upload'
import { Platform } from 'react-native'

// Api Config
import ApiConfig from '../Configs/ApiConfig'

export function newUploadFile(
  url,
  path,
  token,
  process,
  response,
  error,
) {
  let newPath = Platform.OS === 'android' ? path.replace('file://', '') : path
  const optionsDefault = {
    path: newPath,
    url: ApiConfig.baseURL + url,
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'multipart/form-data'
      // timeout: 60000
    },
    type: 'multipart',
    method: 'PUT',
    field: 'file',
    maxRetries: 2,
  }

  Upload.startUpload(optionsDefault)
    .then((uploadId) => {
      console.log('Upload started')
      Upload.addListener('progress', uploadId, (data) => {
        console.log(`Progress: ${data.progress}%`)
        process(data.progress)
      })
      Upload.addListener('error', uploadId, (data) => {
        console.log(`Error: ${data.error}%`)
        error(data.error)
      })
      Upload.addListener('cancelled', uploadId, (data) => {
        console.log(`Cancelled!`)
        error(data)
      })
      Upload.addListener('completed', uploadId, (data) => {
        console.log('data', data)
        console.log('Completed!')
        response(data)
      })
    })
    .catch((err) => {
      console.log('Upload error!', err)
    })
}
