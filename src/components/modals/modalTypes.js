import UserModal from './NewEditUserModal'
import ViewUserModal from './ViewUserModal'

export const modalTypes = {
  NEW_USER: 'NEW_USER',
  EDIT_USER: 'EDIT_USER',
  VIEW_USER: 'VIEW_USER',
}

export const modalTypesMap = {
  [modalTypes.NEW_USER]: UserModal,
  [modalTypes.EDIT_USER]: UserModal,
  [modalTypes.VIEW_USER]: ViewUserModal,
}

export const isFullscreenModal = type => {
  return type === modalTypes.EDIT_USER || type === modalTypes.NEW_USER
}
