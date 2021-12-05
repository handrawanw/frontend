const initialState={
    TransactionDataTable:[],
    Tx_Now:{
        total_user:0,
        total_user_new:0
    }
};

export default function User(state=initialState,action){
    const {type,data}=action;

    switch (type) {
        case "SET_DATA_USER":
            return {
                ...state,
                TransactionDataTable:data.TransactionDataTable,
                Tx_Now:{
                    ...state.Tx_Now,
                    total_user:data.total_user,
                    total_user_new:data.total_user_new
                }
            };
        default:
            return state;
    }
}