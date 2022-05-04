import { NetworkUrlOfChainId, EthRPCEndpoints } from 'common/constants';
const host = 'http://localhost';
const config = {
    restApi: {
        host: host,
        port: 8443
    },
    socketApi: {
        host: host,
        port: 2096
    },
    defaultThetaChainID: NetworkUrlOfChainId[host],
    ethRPCEndpoint: EthRPCEndpoints[host]
};
export default config;
