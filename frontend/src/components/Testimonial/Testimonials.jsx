import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'



const Testimonials = () => {

      const setting= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive: [
        {
            breakpoint: 992,
            setting: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            setting: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },

        ]

      }


    return (
     <Slider {...setting}>
     <div className="testimonial py-4 px-3">
        <p>"Absolutely loved using this tour app! The experiences were top-notch and the attention to detail was impeccable. From historical landmarks to off-the-beaten-path adventures, there was something for everyone. Can't wait to use it again for my next trip!"</p>
     
     <div className="d-flex align-items-center gap-4 mt-3">
       <img src={ava01} className='w-25 h-25 rounded-2 alt="' />
       <div>
        <h6 className="mb-0 mt-3"> John Doe</h6>
        <p>Customer</p>
       </div>

     </div>
     
     
     
     </div>  
     <div className="testimonial py-4 px-3">
        <p>"I've tried several tour apps before, but none have compared to this one. The user interface was intuitive and easy to navigate, making planning my itinerary a breeze. Plus, the tours themselves were incredibly informative and engaging. Highly recommend!"</p>
     
     <div className="d-flex align-items-center gap-4 mt-3">
       <img src={ava02} className='w-25 h-25 rounded-2 alt="' />
       <div>
        <h6 className="mb-0 mt-3"> Lia Franklin</h6>
        <p>Customer</p>
       </div>

     </div>
     
     
     
     </div> 
     <div className="testimonial py-4 px-3">
        <p>"This tour app exceeded all my expectations. The tours were well-curated and provided insider insights that I wouldn't have discovered on my own. It made my trip so much more enriching and memorable. Thank you for such a fantastic experience!"</p>
     
     <div className="d-flex align-items-center gap-4 mt-3">
       <img src={ava03} className='w-25 h-25 rounded-2 alt="' />
       <div>
        <h6 className="mb-0 mt-3"> Lahiru Perera</h6>
        <p>Customer</p>
       </div>

     </div>
     
     
     
     </div>    
     <div className="testimonial py-4 px-3">
        <p>"I'm a frequent traveler, and I have to say, this tour app is a game-changer. It's like having a personal tour guide in your pocket. The variety of tours available cater to different interests, and the quality is consistently excellent. Kudos to the developers!"</p>
     
     <div className="d-flex align-items-center gap-4 mt-3">
       <img src={ava03} className='w-25 h-25 rounded-2 alt="' />
       <div>
        <h6 className="mb-0 mt-3"> Isuri Perera</h6>
        <p>Customer</p>
       </div>

     </div>
     
     
     
     </div>    
    </Slider>
    );
};

export default Testimonials;