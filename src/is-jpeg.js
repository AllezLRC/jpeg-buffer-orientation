import {SOI_MARKER} from './constants.js'

function isJPEG(view) {
  return view.getUint16(0) === SOI_MARKER
}

export default isJPEG
