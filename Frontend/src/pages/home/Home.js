import styles from './Home.scss'
import React, { useEffect, useState } from 'react'



const Home = React.forwardRef((props, ref) => {

    return (
        <div className='grid home' >
            <div className='grid--item home--item-1'>
                <span className='title-bold mg-l-50'>a</span>
            </div>
            <div className='grid--item home--item-2'>
                <span className='title-bold mg-l-50'>b</span>
            </div>

            <div className='grid--item home--item-3'>
                <span className='title-bold mg-l-50'>c</span>
            </div>

        </div>
    );
})

export default Home;