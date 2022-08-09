import jsonRestProvider from 'ra-data-fakerest';
import data from './data';

const disableFakeFetchRequestsLogs = true;

export default jsonRestProvider(data, disableFakeFetchRequestsLogs);
