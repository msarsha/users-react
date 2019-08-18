import UserModal from "./NewEditUserModal";

export const modalTypes = {
	NEW_USER: 'NEW_USER',
	EDIT_USER: 'EDIT_USER'
};

export const modalTypesMap = {
	[modalTypes.NEW_USER]: UserModal,
	[modalTypes.EDIT_USER]: UserModal
};

export const isFullscreenModal = type => {
	return type === modalTypes.EDIT_USER || type === modalTypes.NEW_USER
};
