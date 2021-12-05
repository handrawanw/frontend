const initialState={
    TransactionDataTable:[],
    Tx_Now:{
        total_supplier:0,
        total_supplier_new:0,
    }
};

export default function MasterSupplier(state=initialState,action){
    const {type,data}=action;

    switch (type) {
        case "SET_DATA_MASTER_SUPPLIER":
            return {
                ...state,
                TransactionDataTable:data.TransactionDataTable,
                Tx_Now:{
                    ...state.Tx_Now,
                    total_supplier:data.total_supplier,
                    total_supplier_new:data.total_supplier_new
                }
            };
        default:
            return state;
    }
}