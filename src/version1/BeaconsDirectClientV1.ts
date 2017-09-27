import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';


export class IBeaconsDirectClientV1 extends DirectClient<any> implements IBeaconsClientV1 {

    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Description('tracker-services-beacon', 'controller', '*', '*', '*'))
    }

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void): void {

        let timing = this.instrument(correlationId, 'beacons.get_')
    }


    public getBeaconsById(correlationId: string, id: string,
        callback: (err: any, item: BeaconV1) => void): void {

    }

    public calculatePosition(correlationId: string, siteId: string, ids: string[],
        callback: (err: any, item: BeaconV1) => void): void {

    }

    public createBeacons(correlationId: string, item: BeaconV1,
        callback: (err: any, item: BeaconV1) => void): void {

                let timeing = this.instrument(correlationId, 'beacons.get_')
    }

    public updateBeacons(correlationId: string, item: BeaconV1,
        callback: (err: any, item: BeaconV1) => void): void {

    }

    public deleteBeaconsById(correlationId: string, id: string,
        callback: (err: any, item: BeaconV1) => void): void {

    }
}