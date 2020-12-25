import { Component } from 'react';
import SQLite from 'react-native-sqlite-storage'
import { localDB } from './constans'
import AppLogger from '../utils/AppLogger';

export default class db extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var db = SQLite.openDatabase(localDB.dbName, "1.1", "netctar infotel practrical", 20000, this.openCB, this.errorCB);
        db.transaction(function (tnx) {
            tnx.executeSql('CREATE TABLE IF NOT EXISTS ' + localDB.tableName.tblCustomer +
                '( ID INTEGER PRIMARY KEY AUTOINCREMENT,'
                + 'cusName TEXT,cusTitle TEXT,cusCorporation TEXT,'
                + 'cusAddressOne TEXT,cusAddressTwo TEXT,'
                + 'cusCity TEXT,cusState TEXT,cusZip TEXT,'
                + 'cusOfficeTel TEXT, cusCellTel TEXT ,'
                + 'cusEmail TEXT,cusURL TEXT,cusCustomerType TEXT)', []);
                
            tnx.executeSql('CREATE TABLE IF NOT EXISTS ' + localDB.tableName.tblConfig + '( ID INTEGER PRIMARY KEY AUTOINCREMENT,Field TEXT,Value TEXT)', []);
            AppLogger.showInfo('Create table successfully');
        });
    }
    errorCB(err) {
        AppLogger.showError('#DB.JS errorCB= ' + err);

    }

    successCB() {
        AppLogger.showInfo('#DB.JS successCB= ');
    }

    openCB() {
        AppLogger.showInfo('#DB.JS openCB= ');
    }

    render() {
        return null;
    }
}