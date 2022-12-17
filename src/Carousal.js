import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
/* import img1 from './images/carousel-1.jpg';
import img2 from './images/carousel-2.jpg';
import img3 from './images/carousel-3.jpg';
import img4 from './images/carousel-4.jpg';
import img5 from './images/carousel-5.jpg'; */

function Carousal (){
    const [sliders,setSliders] = useState([])
    useEffect(()=>{
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
    },[])
    return(
        <>
        <OwlCarousel className='owl-theme' items={1} loop margin={10} nav>
    {
        sliders.map((item)=>{
            return(
                <div class='item'>
                    <img src={'http://localhost/phpdemo/upload/'+item.image}></img>
                </div>
            )
        })
    }
    
    
    
   
</OwlCarousel>
        </>
    )
}
export default Carousal;