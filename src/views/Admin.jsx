import React from 'react'
import ServicePage from '../components/service/ServicePage';

const Admin = () => {
    const navItems = [
        { link: "Quản lý hệ thống", path: "" },
        { link: "Quản lý tài khoản", path: "" },
        { link: "Thống kê hàng gửi/nhập", path: "" },
    ];

    return (
        <ServicePage navItems={navItems}/>
    )
}

export default Admin