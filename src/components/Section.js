import React from "react";
function Section (){
    return(
 <div className='hero'>
   <div className="relative flex justify-center items-center ">
  <video className="w-full h-70" autoPlay loop muted controls={false}>
    <source src="video1.mp4" type="video/mp4" />
  </video>
  <div className="justify-center">
  <h2 className="absolute top-20 left-0 w-full text-center text-black font-bold text-4xl z-10 mt-20">
    Welcome to Epic Tours
  </h2>
  <p className="absolute top-32 left-0 w-full text-center text-black text-xl font-sans mt-20">
    Touring all destinations to your<br />pleasing and wish.
  </p>
  <a href="destinations" className="absolute top-40 left-1/2 transform -translate-x-1/2 bg-white px-8 py-4 rounded-full text-black text-xl font-bold hover:bg-purple-500 hover:text-white transition duration-200 mt-40">
    Get Started
  </a>
  </div>
</div>
      <div className='popular-destinations mt-16 mb-10'>
      <h4 className='mb-8 font-bold text-xl text-left ml-10'>Popular Destinations</h4>
        <div className='grid grid-cols-4 gap-4 mr-10 ml-10'>
     {/* Card  */}      
    <div className='bg-white rounded-lg overflow-hidden shadow-md  '>
      <img
        src='amboseli.jpg' 
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
    <div className='p-4'>
      <h5 className='font-bold text-m mb-4'>Amboseli National Park</h5>
      <p>Experience the beauty of Africa's wildlife and natural landscapes at Amboseli National Park in southern Kenya. 
  </p> 
    <div className="mt-14">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
    </div>

    </div>

    {/* Card 1 */}
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <img
        src='diani.jpg'
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
      <div className='p-4'>
        <h5 className='font-bold text-m mb-4'>Diani Beach</h5>
        <p>
        A tropical paradise with stunning white-sand beaches, crystal-clear waters, and endless activities to enjoy on the beach.
        </p>
        <div className="mt-14">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <img
        src='lakenakuru.jpg'
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
      <div className='p-4'>
        <h5 className='font-bold text-m mb-4'>
          Lake Nakuru National Park
        </h5>
        <p>
        A wildlife lover's dream destination,breathtaking landscapes,home to a vast array of animals, including the famous pink flamingos.
        </p>
        <div className="mt-8">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
      </div>
    </div>

  
    {/* Card 3 */}
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <img
        src='tsavo.jpg'
        alt=''
        className='w-full object-cover'
        style={{ aspectRatio: '16/9' }}
      />
      <div className='p-4'>
        <h5 className='font-bold text-m mb-4'>Tsavo National Park</h5>
        <p>
        A journey from Samburu to Tsavo National Park will take you through a captivating landscape of rugged terrain, rolling hills, and vast plains. 
      
        </p>
        <div className="mt-14">
       <a href='/destinations' className='inline-block bg-gray-800 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-md'>
      View
       </a>
    </div>
      </div>
    </div>
  </div>
</div>
 </div>
       
   
    )
}
export default Section;