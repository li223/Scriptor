import Layout from '../../Components/Layout';
//import { client } from '../../RestClient/RestClient'
import { useState, useEffect } from 'react';
import ServerDataTable from './Components/ServerDataTable';
import { client } from '../../RestClient/RestClient';
import Server from '../../RestClient/Interfaces/Server'

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
            <ServerDataTable rows={servers} title="Servers" />
        </Layout>
    )
}

export default Servers;