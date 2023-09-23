import { create } from 'ipfs-http-client';
const projectId = '1829068b9bb8479182ff09808aa51a0e';
export const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', projectId });
