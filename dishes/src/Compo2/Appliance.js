import React from 'react'

const Appliance = () => {
   const  refrigerator = ['https://www.lg.com/levant_en/images/refrigerators/md07524911/D-01.jpg' , 'https://www.lg.com/levant_en/images/refrigerators/md07524911/D-01.jpg', 'https://www.lg.com/levant_en/images/refrigerators/md07524911/D-01.jpg']
  return (
    <>
    <div>
        <h3>Appliance</h3>
    </div>
     <div className='flex'>
      {
        refrigerator.map((ref , id)=>{
            return (
                <div className='apply'><img className='logo' src={ref} alt='logo'/>
                <p>Referigerator</p>
            </div>)
                
        })
      }
    </div>
    </>
   
  )
}

export default Appliance
