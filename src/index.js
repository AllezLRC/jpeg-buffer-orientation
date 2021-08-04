// get orientation from a Arraybuffer
// most codes from urls bellow
// https://github.com/dominictarr/exif-orientation-lite/blob/master/index.js
// https://github.com/exif-js/exif-js/blob/master/exif.js

import isJPEG from './is-jpeg.js'
import getExifPosition from './get-exif-position.js'
import getOrientation from './get-orientation.js'

const {DataView} = globalThis

function orientation(buffer) {
  const view = new DataView(buffer)

  if (!isJPEG(view)) {
    return
  }

  const exifOffset = getExifPosition(view)

  if (!exifOffset) {
    return
  }

  return getOrientation(view, exifOffset)
}

export default orientation
