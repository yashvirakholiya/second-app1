import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Footer (){
    
    const [sliders,setSliders] = useState([{"id":"1","name":"logo1","image":"vendor-1.jpg"},{"id":"2","name":"logo 2","image":"vendor-2.jpg"},{"id":"3","name":"logo3","image":"vendor-3.jpg"},{"id":"4","name":"logo4","image":"vendor-4.jpg"},{"id":"1","name":"logo1","image":"vendor-1.jpg"},{"id":"2","name":"logo 2","image":"vendor-2.jpg"},{"id":"3","name":"logo3","image":"vendor-3.jpg"},{"id":"4","name":"logo4","image":"vendor-4.jpg"}])
    useEffect(()=>{
        fetch("http://localhost/phpdemo/get_footer.php")
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
        <OwlCarousel className='owl-theme' autoplay={true} items={6} loop margin={10} nav={false} dots={false}>
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
export default Footer;