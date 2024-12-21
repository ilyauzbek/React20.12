import React from 'react'
import s from './WhyB.module.scss'

const WhyB = () => {
  return (
    <>
    <section>
            <div className='container'>
                <div className={s.texts}>
                    <div className={s.text}>
                        <h2>WHY BUILD</h2>
    
                        <div className={s.vr}>
                            <p>WITH HYDRA?</p>
                            <img src="/Strelka2.png" alt="" />
                        </div>
                    </div>
    
                    <p className={s.pp}>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyB