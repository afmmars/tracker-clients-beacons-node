import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { BeaconV1 } from './BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';


export class BeaconsNullClientV1 {

    public getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void) : void {

            callback(null, new DataPage<BeaconV1>([], 0));
        }
        

        public getBeaconById(correlationId: string, id: string,
        callback: (err: any, item: BeaconV1) => void): void {

        }

        public calculatePosition(correlationId: string, siteId: string, ids: string[],
        callback: (err: any, position: any) => void): void {

        }

        public createBeacon(correlationId: string, item: BeaconV1,
        callback: (err: any, item: BeaconV1) => void): void {

        }

        public updateBeacon(correlationId: string, item: BeaconV1,
        callback: (err: any, item: BeaconV1) => void): void {

        }

        public deleteBeaconById(correlationId: string, id: string,
        callback: (err: any, item: BeaconV1) => void): void {

        }
}