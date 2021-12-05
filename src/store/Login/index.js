const initialState={
    isLogin:false
};

export default function LoginStore(state=initialState,action){
    const {type,data}=action;

    switch (type) {
        case "SET_LOGIN":
            return {
                ...state,
                isLogin:data.isLogin
            };
        default:
            return state;
    }
}