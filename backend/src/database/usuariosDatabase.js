"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneById = exports.deleteOneById = exports.getOneById = exports.create = exports.getAll = void 0;
const database_1 = __importDefault(require("../database"));
require('errorhandler');
/**
 * Función que hace una consulta a la base de datos para obtener
 * todos los tipos de dispositivos
 *
 * @returns {Promise<any>} retorna una promesa con el resultado de query
 *
 * @author Ángel Plaza Cámara
 * @description Versión inicial
 */
function getAll() {
    return new Promise((resolve) => {
        const query = `SELECT *
        FROM tiposDispositivo`;
        database_1.default.executeQuery(query, null, function (error, result) {
            if (error) {
                resolve(convertMsqlErrorToCaughtError(error));
            }
            resolve(result);
        });
    });
}
exports.getAll = getAll;
/**
 * Función que hace un insert a la base de datos para crear
 * los tipos de dispositivos
 *
 * @param typeDevice {tipoDispositivo} objeto con los datos que se
 * van a insertar.
 *
 * @returns {Promise<any>} retorna una promesa con el resultado de query
 *
 * @author Ángel Plaza Cámara
 * @description Versión inicial
 */
function create(typeDevice) {
    return new Promise(function (resolve) {
        const query = `INSERT
        INTO tiposDispositivo
        set ?`;
        database_1.default.executeQuery(query, typeDevice, function (error, result) {
            if (error) {
                resolve(convertMsqlErrorToCaughtError(error));
            }
            resolve(result);
        });
    });
}
exports.create = create;
/**
 * Función que hace una consulta a la base de datos para obtenerse un tipo de dispositivo por id
 *
 * @param id {number} id del tipo de dispositivo
 *
 * @returns {Promise<any>} retorna una promesa con el resultado de query
 *
 * @author Ángel Plaza Cámara
 * @description Versión inicial
 */
function getOneById(id) {
    return new Promise(function (resolve) {
        const query = `SELECT *
        FROM tiposDispositivo
        WHERE id = ?`;
        database_1.default.executeQuery(query, id, function (error, result) {
            if (error) {
                resolve(convertMsqlErrorToCaughtError(error));
            }
            resolve(result[0]);
        });
    });
}
exports.getOneById = getOneById;
/**
 * Función que hace un delete a la tabla tiposDispositivo para eliminar
 * un tipo de dispositivo por id
 *
 * @param id {string} id del tipo de dispositivo a eliminar
 *
 * @returns {Promise<any>} retorna una promesa con el resultado de query
 *
 * @author Ángel Plaza Cámara
 * @description Versión inicial
 */
function deleteOneById(id) {
    return new Promise(function (resolve) {
        const query = `DELETE 
        FROM tiposDispositivo
        WHERE id = ?`;
        database_1.default.executeQuery(query, id, function (error, result) {
            if (error) {
                resolve(convertMsqlErrorToCaughtError(error));
            }
            resolve(result);
        });
    });
}
exports.deleteOneById = deleteOneById;
/**
 * Función que hace un update a la tabla tiposDispositivo para modificar una tipo de dispositivo por Id
 *
 * @param id {string} id del tipo de dispositivo a modificar
 *
 * @returns {Promise<any>} retorna una promesa con el resultado de query
 *
 * @author Ángel Plaza Cámara
 * @description Versión inicial
 */
function updateOneById(id, typeDevice) {
    return new Promise(function (resolve) {
        const query = `UPDATE tiposDispositivo
          set ?
          WHERE id = ?`;
        database_1.default.executeQuery(query, [typeDevice, id], function (error, result) {
            if (error) {
                resolve(convertMsqlErrorToCaughtError(error));
            }
            resolve(result);
        });
    });
}
exports.updateOneById = updateOneById;
