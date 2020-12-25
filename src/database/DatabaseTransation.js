import SQLite from 'react-native-sqlite-storage'
import { localDB } from './constans'
import AppLogger from '../utils/AppLogger';

var db = SQLite.openDatabase(localDB.dbName, "1.1", "netctar infotel practrical", 20000, this.openCB, this.errorCB);


export default class DatabaseTransation {
    errorCB(err) {
        AppLogger.showError('$DatabaseTransation #errorCB ' + err);
    }

    successCB() {
        AppLogger.showInfo("$DatabaseTransation#successCB :SQL executed fine");
    }

    openCB() {
        AppLogger.showInfo("$DatabaseTransation#openCB  Database OPENED");
    }

    // This will accept the input if passed otherwise use this.state
    static executeQuery(Query, param) {
        AppLogger.showInfo("$DatabaseTransation#executeQuery-------"+Query);        
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(Query, param, (tx, results) => {
                    AppLogger.showInfo("$DatabaseTransation#executeQuery Query Success");
                    resolve(results);
                }, (error) => {
                    AppLogger.showInfo("$DatabaseTransation#executeQuery Error in query Execute() " + error);
                    reject(error);
                });
            });
        })
    }
}