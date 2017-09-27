import { Factory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class BeaconsClientFactory extends Factory {
    static DirectClientV1Descriptor: Descriptor;
    static HttpClientV1Descriptor: Descriptor;
    static LambdaClientV1Descriptor: Descriptor;
    static NullClientV1Descriptor: Descriptor;
    constructor();
}
