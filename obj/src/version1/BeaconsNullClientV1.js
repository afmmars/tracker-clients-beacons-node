"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
class BeaconsNullClientV1 {
    getBeacons(correlationId, filter, paging, callback) {
        callback(null, new pip_services_commons_node_1.DataPage([], 0));
    }
    getBeaconById(correlationId, id, callback) {
    }
    calculatePosition(correlationId, siteId, ids, callback) {
    }
    createBeacon(correlationId, item, callback) {
    }
    updateBeacon(correlationId, item, callback) {
    }
    deleteBeaconById(correlationId, id, callback) {
    }
}
exports.BeaconsNullClientV1 = BeaconsNullClientV1;
//# sourceMappingURL=BeaconsNullClientV1.js.map