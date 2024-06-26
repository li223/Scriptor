import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'url', headerName: 'URL' }
];

export default function ServerDataTable(props: any) {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-around'
            }}>
            <h2>{props.title}</h2>
            <DataGrid
                sx={{
                    minHeight: '75vh',
                    minWidth: "75vw"
                }}
                autoHeight
                rows={props.rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10, 15, { value: -1, label: "All" }]}
                checkboxSelection
            />
        </div>
    );
}
