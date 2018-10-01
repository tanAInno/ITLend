import { SET_ADD_MODAL } from '../types/modal'
import { SET_VIEW_MODAL } from '../types/modal'
import { SET_EDIT_MODAL } from '../types/modal'
import { SET_DELETE_MODAL } from '../types/modal'

const initState = {
    addModalOpen: false,
    viewModalOpen: "",
    editModalOpen: "",
    deleteModalOpen: ""
}
export default (state = initState, action) => {
    switch(action.type) {
        case SET_ADD_MODAL:
            return {...state, addModalOpen: action.payload.addModalOpen}
        case SET_VIEW_MODAL:
            return {...state, viewModalOpen: action.payload.viewModalOpen}
        case SET_EDIT_MODAL:
            return {...state, editModalOpen: action.payload.editModalOpen}
        case SET_DELETE_MODAL:
            return {...state, deleteModalOpen: action.payload.deleteModalOpen}
        default:
            return state
    }
}