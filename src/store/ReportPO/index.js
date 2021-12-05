const initialState={
    TransactionDataTable:[],
    Tx_Now:{
        total_transaction:0,
        transaction_success:0,
        transaction_failed:0,
        transaction_pending:0
    }
};

export default function TransaksiPO(state=initialState,action){
    const {type,data}=action;

    switch (type) {
        case "SET_DATA_REPORT":
            return {
                ...state,
                TransactionDataTable:data.TransactionDataTable,
                Tx_Now:{
                    ...state.Tx_Now,
                    total_transaction:data.total_transaction,
                    transaction_pending:data.transaction_pending,
                    transaction_success:data.transaction_success,
                    transaction_failed:data.transaction_failed
                }
            };
        default:
            return state;
    }
}