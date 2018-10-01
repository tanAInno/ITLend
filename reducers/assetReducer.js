import { SET_ASSET_LIST } from '../types/asset'
import { SET_AVAI_LIST } from '../types/asset'
import { SET_LOAN_LIST } from '../types/asset'
import { SET_PERM_ASSET_LIST } from '../types/asset'

const initState = {
    asset_list: [],
    perm_asset_list: [],
    avai_list: [],
    loan_list: []
}

export default (state = initState, action) => {
    switch(action.type){
        case SET_ASSET_LIST:
            return {...state, asset_list: action.payload.asset_list}
        case SET_PERM_ASSET_LIST:
            return {...state, perm_asset_list: action.payload.perm_asset_list}
        case SET_AVAI_LIST:
            return {...state, avai_list: action.payload.avai_list}
        case SET_LOAN_LIST:
            return {...state, loan_list: action.payload.loan_list}
        default:
            return state
    }
}