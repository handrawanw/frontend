const initialState={
    TransactionDataTable:[],
    Tx_Now:{
        total_transaction:0,
        product_new:0,
    }
};

export default function MasterBarangStore(state=initialState,action){
    const {type,data}=action;

    switch (type) {
        case "SET_DATA_MASTER_BARANG":
            return {
                ...state,
                TransactionDataTable:data.TransactionDataTable,
                Tx_Now:{
                    ...state.Tx_Now,
                    total_transaction:data.total_transaction,
                    product_new:data.product_new
                }
            };
        default:
            return state;
    }
}