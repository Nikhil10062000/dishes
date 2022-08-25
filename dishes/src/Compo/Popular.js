import React, {  useState } from 'react'

const Popular = () => {
    
   
        const image = ['https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg','https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg','https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg','https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg','https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg','https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg','https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg']
     const [data ] = useState(image) 

  return (
    
      <div className="popular">
        <h4>
          <b>Popular Dishes</b>
        </h4>
        <div className='img'>
           {/* using radom imges to get the feel as images are not working from api */}
           {/* mapping the images from data state */}
             {
         data.map((elem , id)=>{
            return (
                <img  className='image' key={id} src={elem} alt='images'/>
            )
         })
        }
        </div>
       
       
      </div>
     
  )
}

export default Popular
