import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function CustomFooterStatusComponent(props) {
    return (
        <Box sx={{ p: 1, display: 'flex' }}>
            <FiberManualRecordIcon
                fontSize="small"
                sx={{
                    mr: 1,
                    color: props.status === 'connected' ? '#4caf50' : '#d9182e',
                }}
            />
            Status {props.status}
        </Box>
    );
}

CustomFooterStatusComponent.propTypes = {
    status: PropTypes.oneOf(['connected', 'disconnected']).isRequired,
};

export { CustomFooterStatusComponent };

export default function CustomFooter() {
    const [status, setStatus] = React.useState('connected');
    const { data } = useDemoData({
        dataSet: 'Employee',
        rowLength: 4,
        maxColumns: 6,
    });
  /*   const abc = {
        backgroundColor:'red',
        borderRadius:5
    } */
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item><Box sx={{ width: '100%' }}>
                        <Box /* style={abc} */ sx={{ height: 350, width: '100%', mb: 1 }}>
                            <DataGrid
                                {...data}
                                components={{
                                    Footer: CustomFooterStatusComponent,
                                }}
                                componentsProps={{
                                    footer: { status },
                                }}
                            />
                        </Box>
                        {/* <Button
                            variant="contained"
                            onClick={() =>
                                setStatus((current) =>
                                    current === 'connected' ? 'disconnected' : 'connected',
                                )
                            }
                        >
                            {status === 'connected' ? 'Disconnect' : 'Connect'}
                        </Button> */}
                    </Box></Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=4</Item>
                </Grid>

            </Grid>
        </Box>
   
   
    </>
    
  );
}
