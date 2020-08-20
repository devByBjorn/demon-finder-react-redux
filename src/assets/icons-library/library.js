import { library, icon } from '@fortawesome/fontawesome-svg-core'
import {
  faTrashAlt,
  faEdit,
  faQuestionCircle,
  faChartBar,
  faEye,
  faPlusSquare,
  faEnvelope,
  faTimesCircle,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCircle,
  faStopCircle,
} from '@fortawesome/free-regular-svg-icons'

library.add(faTrashAlt, faEdit, faQuestionCircle, faPlusSquare, faTimesCircle, faArrowAltCircleLeft, faCircle)

export const trashcan = icon(faTrashAlt)
export const edit = icon(faEdit)
export const questionMark = icon(faQuestionCircle)
export const plusSquare = icon(faPlusSquare)
export const close = icon(faTimesCircle)
export const arrowLeft = icon(faArrowAltCircleLeft)
export const circle = icon(faCircle)

