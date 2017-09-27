import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { BeaconV1 } from '../data/version1/BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';


export class IBeaconsNullClientV1 {

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void) : void {

            callback(null, new DataPage<BeaconV1>([], 0));
        }
        

        public getBeaconsById(correlationId: string, id: string,
        callback: (err: any, item: BeaconV1) => void): void {

        }

        public calculatePosition(correlationId: string, siteId: string, ids: string[],
        callback: (err: any, item: BeaconV1) => void): void {

        }

        public createBeacons(correlationId: string, item: BeaconV1,
        callback: (err: any, item: BeaconV1) => void): void {

        }

        public updateBeacons(correlationId: string, item: BeaconV1,
        callback: (err: any, item: BeaconV1) => void): void {

        }

        public deleteBeaconsById(correlationId: string, id: string,
        callback: (err: any, item: BeaconV1) => void): void {

        }
}