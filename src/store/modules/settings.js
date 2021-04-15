import { TOGGLE_SIDE_BAR } from '../actions'
const initState = {
    //侧边栏是否打开 打开 true 不打开 false
    sidebarStatus: true,
}

const settingReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_BAR:
            state.sidebarStatus = !state.sidebarStatus;
            return {
                ...state
            }
        default:
            return state
    }
}
export default settingReducer