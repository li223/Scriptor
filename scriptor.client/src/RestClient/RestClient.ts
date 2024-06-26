import Server from './Interfaces/Server';

export const client = {
    getServersAsync: async function (): Promise<Server[]> {
        return await fetch("https://localhost:7048/api/server").then((res) => res.json()).then((data) => {
            if (data.length == 0) return new Array<Server>();
            else return data;
        });
    }
}
