import { SET_ADD_MODAL } from '../types/modal'
import { SET_VIEW_MODAL } from '../types/modal'
import { SET_EDIT_MODAL } from '../types/modal'
import { SET_DELETE_MODAL } from '../types/modal'

export const setAddModal = (addModalOpen) => {
    return dispatch => {
        dispatch({
            type: SET_ADD_MODAL,
            payload: { addModalOpen }
        })
    }
}

export const setViewModal = (viewModalOpen) => {
    return dispatch => {
        dispatch({
            type: SET_VIEW_MODAL,
            payload: { viewModalOpen }
        })
    }
}

export const setEditModal = (editModalOpen) => {
    return dispatch => {
        dispatch({
            type: SET_EDIT_MODAL,
            payload: { editModalOpen }
        })
    }
}

export const setDeleteModal = (deleteModalOpen) => {
    return dispatch => {
        dispatch({
            type: SET_DELETE_MODAL,
            payload: { deleteModalOpen }
        })
    }
}