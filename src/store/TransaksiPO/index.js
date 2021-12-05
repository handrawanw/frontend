const initialState={
    TransactionDataTable:[],
    Tx_Now:{
        total_transaction:0,
        volume_transaction:0
    }
};

export default function TransaksiPO(state=initialState,action){
    const {type,data}=action;

    switch (type) {
        case "SET_DATA_TRANSAKSI":
            return {
                ...state,
                TransactionDataTable:data.TransactionDataTable,
                Tx_Now:{
                    ...state.Tx_Now,
                    total_transaction:data.total_transaction,
                    volume_transaction:data.volume_transaction
                }
            };
        default:
            return state;
    }
}