import Button from '@mui/material/Button';

function GoBack() {
    history.back();
}

function PageError() {
    return (
        <>
            <Button onClick={GoBack} variant="outlined">Back</Button>

            <img src="https://http.cat/500"
                style={{
                    paddingTop: "15px",
                    width: "100%",
                    height: "100%"
                }} />
        </>
    );
}

export default PageError;