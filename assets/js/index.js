

const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    
    loop: true,
   
    // spaceBetween: 30,
    effect: "fade",
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // on:{
    //     click(event){
    //         swiper.slideTo(this.clickedIndex)

    //     }
    // },
    
     
      
  
    
  });

  

  window.addEventListener("resize",(e)=>{
    if(window.innerWidth<993){
      document.querySelector('.bottom-header').style.backGround='white'
      // document.querySelector('.life-right').style.display='none'
    }else{
       document.querySelector('.bottom-header').style.backGround='white'
      //  document.querySelector('.life-right').style.display='block'
    }
    
   if(window.innerWidth<771){
   
    document.querySelector('.find-doctor').innerHTML='Doctor'
    document.querySelector('.request').innerHTML='Appointment'
   }else{
     document.querySelector('.find-doctor').innerHTML='Find a Doctor'
    document.querySelector('.request').innerHTML='Request Appointment'

   }

  })

  // hero data

  const slider=[
    {
      id:1,
      img:'./images/1.jpg',
      title:' Help is here When You Need it',
      text:'A&E average wait time: 30mins'


   },
    {
      id:2,
      img:'./images/2.jpg',
      title:'Small Injuries May Lead to Big Problem ',
      text:'A&E average wait time: 30mins'


   },
    {
      id:3,
      img:'./images/3.jpg',
      title:'Small Injuries May Lead to Big Problem ',
      text:'A&E average wait time: 30mins'


   }
]


slider.map(items=>{
  const item = document.createElement("div");
  item.classList.add('swiper-slide')
  item.classList.add('item-slide')
  item.innerHTML=`
  <img src=${items.img} />
  <div class='text'>
    <h1>${items.title}</h1>
    <p>${items.text}</p>
    <button>Learn More <i class="fa-solid fa-chevron-right"></i></button>
  </div>
  
  `
  
  document.querySelector('.itemsapp').appendChild(item)
  
})




