let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { BeaconsMemoryPersistence } from 'tracker-services-beacons-node';
import { BeaconsController } from 'tracker-services-beacons-node';

import { BeaconsDirectClientV1 } from '../../src/version1/BeaconsDirectClientV1';
import { BeaconsClientFixtureV1 } from './BeaconsClientFixtureV1';
import { BeaconV1 } from '../../src/version1/BeaconV1';


let BEACON1: BeaconV1 = {
    id: '1',
    site_id: '1',
    udi: '0000001',
    label: 'TestBeacon1',
    center: {
        type: 'Point',
        coordinates: [0, 0]
    },
    radius: 50
};

let BEACON2: BeaconV1 = {
    id: '2',
    site_id: '1',
    udi: '0000002',
    label: 'TestBeacon2',
    center: {
        type: 'Point',
        coordinates: [2, 2]
    },
    radius: 50
};

suite('BeaconsDirectClientV1', () => {
    let client: BeaconsDirectClientV1;
    let fixture: BeaconsClientFixtureV1;
    let persistance: BeaconsMemoryPersistence;
    let controller: BeaconsController;
    

    suiteSetup((done) => {
        persistance = new BeaconsMemoryPersistence();
        persistance.configure(new ConfigParams());

        client = new BeaconsDirectClientV1();
        controller = new BeaconsController();


        let references = References.fromTuples(
            new Descriptor('tracker-services-beacons', 'persistence', 'memory', 'default', '1.0'), persistance,
            new Descriptor('tracker-services-beacons', 'controller', 'default', 'default', '1.0'), controller
        );
        controller.setReferences(references);
        client.setReferences(references);

        fixture = new BeaconsClientFixtureV1(client);
        client.open(null, done);
    });

    suiteTeardown((done) => {
        client.close(null, done);
    });

    setup((done) => {
        persistance.clear(null, done);
    });

    test('Test CRUD operation', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Test GetWithFilters operation', (done) => {
        done();
    });

    test('Calculate Position', (done) => {
       fixture.testCalculatePosition(done);
    });
})