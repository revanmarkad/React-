import React from 'react'

function Home() {
  return (
<section className="">
    <div className="homeLeft">
        <div className='heading'>
            
            <h1>Home &nbsp; |</h1>
        </div>
        <div className='person flex'>
            <img src='https://media.licdn.com/dms/image/D4E03AQG3vUXLjVQ3rQ/profile-displayphoto-shrink_400_400/0/1676391674937?e=1685577600&v=beta&t=NrmQr5TZUHbYUx2oH_pKjJaP28fa0a_fpXlX7q9HKig'/>
        </div>
        <div className='personInfo flex'>
            <h3>Age: 25 <br/>
            Location: India </h3>
        </div>
    </div>
    <div className='homeRight p-20 items-center'>
        <div class="">
            <h1 >Mat Simon,</h1>
            <h3>write about yourself. </h3>
        </div>
    </div>
</section>
  )
}

export default Home