import React, { useState } from 'react'
import Button from '../../component/Button/Button';
import './Products.scss';
import funnel_icon from '../../img/funnel.svg';
import plus_icon from '../../img/plus.svg';
import bug_icon from '../../img/bug.svg';
import maintainance_icon from '../../img/maintainance.svg';
import operator_icon from '../../img/operator.svg';
import performance_icon from '../../img/performance.svg';
import server_icon from '../../img/server.svg';
import world_icon from '../../img/world.svg';
import ProductList from '../../component/ProductList/ProductList';

export default function Products() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Managed WordPress Hosting',
            plan: '5',
            status: 'Active',
            icon: server_icon,
            plans: [
                {
                    id: 1,
                    name: 'Bronze - Monthly',
                    billing: 'Recurring',
                    price: '15.00',
                    period: '1 Month',
                    billin_cycle: '',
                    status: 'Active',
                },
                {
                    id: 2,
                    name: 'Silver - Monthly',
                    billing: 'Recurring',
                    price: '15.00',
                    period: '1 Month',
                    billin_cycle: '',
                    status: 'Active',
                },
                {
                    id: 3,
                    name: 'Gold - Monthly',
                    billing: 'Recurring',
                    price: '15.00',
                    period: '1 Month',
                    billin_cycle: '',
                    status: 'Active',
                },
                {
                    id: 4,
                    name: 'Platinum - Monthly',
                    billing: 'Recurring',
                    price: '15.00',
                    period: '1 Month',
                    billin_cycle: '',
                    status: 'Active',
                },
                {
                    id: 5,
                    name: 'Setup Fee',
                    billing: 'Recurring',
                    price: '15.00',
                    period: '1 Month',
                    billin_cycle: '',
                    status: 'Active',
                }

            ]
        },
        {
            id: 2,
            name: 'WordPress Site Maintenance',
            plan: '2',
            status: 'Active',
            icon: maintainance_icon
        },
        {
            id: 3,
            name: 'Domain Subscription',
            plan: '3',
            status: 'Active',
            icon: world_icon
        },
        {
            id: 4,
            name: 'Performance Optimization',
            plan: '8',
            status: 'Active',
            icon: performance_icon
        },
        {
            id: 5,
            name: 'Troubleshooting - Hourly Basis',
            plan: '1',
            status: 'Active',
            icon: bug_icon
        },
        {
            id: 6,
            name: 'Consultation - Hourly Basis',
            plan: '1',
            status: 'Active',
            icon: operator_icon
        },

    ]);
    return (
        <div className='products'>
            <div className="products__header">
                <div className="products__header__left">
                    <h2>Products & Services</h2>
                </div>
                <div className="products__header__right">
                    <Button text="Filter" Bgcolor="transparent" color="#555555" icon={funnel_icon} position="left" />
                    <Button text="New Product" Bgcolor="#505050" color="#fff" icon={plus_icon} position="left" />
                </div>
            </div>

            <div className="products__content">
                <ProductList products={products} setProducts={setProducts} />
            </div>

        </div>
    )
}
