import React from "react";

import {
    Route,Switch,
    useRouteMatch
} from "react-router-dom";

// Component
import Dashboard from "./Dashboard/Dashboard";
import MasterUser from "./MasterUser/MasterUser";
import MasterSupplier from "./MasterSupplier/MasterSupplier";
import MasterBarang from "./MasterBarang/MasterBarang";
import Report from "./ReportPO/ReportPO";
import Transaksi from "./TransaksiPO/TransaksiPO";
import PrintOutReport from "./ReportPO/PrintOut";
import PrintOutTransaksi from "./TransaksiPO/PrintOut";
// Component


export default function RouteRegister(){

    const {url}=useRouteMatch();
    
    return (
        <Switch>
            <Route exact path={url}>
                <Dashboard />
            </Route>
            <Route path={`${url}/users`}>
                <MasterUser />
            </Route>
            <Route path={`${url}/supplier`}>
                <MasterSupplier />
            </Route>
            <Route path={`${url}/product`}>
                <MasterBarang />
            </Route>
            <Route path={`${url}/transaksi`}>
                <Transaksi />
            </Route>
            <Route path={`${url}/report`}>
                <Report />
            </Route>
            <Route path={`${url}/printreport/:id`}>
                <PrintOutReport />
            </Route>
            <Route path={`${url}/printtransaksi/:id`}>
                <PrintOutTransaksi />
            </Route>
        </Switch>
    );
}
