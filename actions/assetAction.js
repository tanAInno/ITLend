import { SET_ASSET_LIST } from '../types/asset'
import { SET_AVAI_LIST } from '../types/asset'
import { SET_LOAN_LIST } from '../types/asset'
import { SET_PERM_ASSET_LIST } from '../types/asset'

export const setAssetList = (asset_list) => {
    return dispatch => {
        dispatch({
            type: SET_ASSET_LIST,
            payload: { asset_list }
        })
    }
}

export const setPermaAssetList = (perm_asset_list) => {
    return dispatch => {
        dispatch({
            type: SET_PERM_ASSET_LIST,
            payload: {perm_asset_list}
        })
    }
}

export const setAvailableAssetList = (avai_list) => {
    return dispatch => {
        dispatch({
            type: SET_AVAI_LIST,
            payload: { avai_list }
        })
    }
}

export const setOnLoanAssetList = (loan_list) => {
    return dispatch => {
        dispatch({
            type: SET_LOAN_LIST,
            payload: { loan_list }
        })
    }
}
