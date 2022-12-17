import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BasicCard from './BasicCard';


function Shopcarousel() {
    const [sliders, setSliders] = useState([])
    useEffect(() => {
        fetch("http://localhost/phpdemo/get_slider.php")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setSliders(result)
                },
                (error) => {

                }
            )
    }, [])
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>

                        <OwlCarousel className='owl-theme' items={1} loop margin={10} nav>
                            {
                                sliders.map((item) => {
                                    return (
                                        <div class='item'>
                                            <img src={'http://localhost/phpdemo/upload/' + item.image}></img>
                                        </div>
                                    )
                                })
                            }




                        </OwlCarousel>

                    </Grid>
                    <Grid item xs={8}>
                        <BasicCard></BasicCard>
                    </Grid>

                </Grid>
            </Box>

        </>
    )
}
export default Shopcarousel;