import { useState, useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';

import Layout from '../../Components/Layout';
import ServerDataTable from '../../Components/DataTable';

import { client } from '../../RestClient/RestClient';
import Server from '../../RestClient/Interfaces/Server'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'url', headerName: 'URL' }
];

function Servers() {

    const [servers, setServers] = useState(new Array<Server>());

    useEffect(() => {
        let FetchData = async () => {
            let data = await client.getServersAsync();
            setServers(data);
        }

        FetchData();
    }, []);

    return (
        <Layout>
            <ServerDataTable columns={columns} rows={servers} title="Servers" />
        </Layout>
    )
}

export default Servers;