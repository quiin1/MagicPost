import React from 'react'
import ServicePage from '../components/service/ServicePage'

const TransportEmployee = () => {
    const navItems = [
        { link: "Ghi nhận hàng gửi", path: "" },
        { link: "Đơn chuyển về", path: "" },
        { link: "Đơn chuyển đi", path: "" },
    ];

    return (
        <ServicePage navItems={navItems}/>
    )
}

export default TransportEmployee