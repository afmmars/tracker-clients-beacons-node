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
import { BeaconsHttpServiceV1 } from 'tracker-services-beacons-node';

import { BeaconsHttpClientV1 } from '../../src/version1/BeaconsHttpClientV1';
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

suite('BeaconsHttpClientV1', () => {
    let client: BeaconsHttpClientV1;
    let fixture: BeaconsClientFixtureV1;
    let persistance: BeaconsMemoryPersistence;
    let controller: BeaconsController;
    let service: BeaconsHttpServiceV1;

    suiteSetup((done) => {
        persistance = new BeaconsMemoryPersistence();
        persistance.configure(new ConfigParams());

        let httpConfig = ConfigParams.fromTuples(
            'connection.protocol', 'http',
            'connection.host', 'localhost',
            'connection.port', '3000'
        )


        controller = new BeaconsController();
        service = new BeaconsHttpServiceV1();
        service.configure(httpConfig);

        client = new BeaconsHttpClientV1();
        client.configure(httpConfig);

        let references = References.fromTuples(
            new Descriptor('tracker-services-beacons', 'persistence', 'memory', 'default', '1.0'), persistance,
            new Descriptor('tracker-services-beacons', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('tracker-services-beacons', 'service', 'http', 'default', '1.0'), service,
            new Descriptor('tracker-services-beacons', 'client', 'direct', 'default', '1.0'), client
        );
        controller.setReferences(references);
        client.setReferences(references);
        service.setReferences(references);

        fixture = new BeaconsClientFixtureV1(client);

        service.open(null, (err) => {
            if (err) done(err);
            else client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done)
    });

    setup((done) => {
        persistance.clear(null, done);
    });

    test('Test CRUD operation', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Calculate Position', (done) => {
       fixture.testCalculatePosition(done);
    });
})