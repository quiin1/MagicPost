import React from 'react'
import IndexNavbars from '../navbars/IndexNavbars'
import LeftNavBar from './LeftNavBar'

const ServicePage = ({navItems}) => {
    return (
        <div>
            <IndexNavbars className="relative z-50"/>
            <div className="relative z-0">
                <LeftNavBar navItems={navItems}/>
                <div className='md:ml-[20%] md:mt-[110px]'>
                    asdasd
                </div>
            </div>
        </div>
    )
}

export default ServicePage