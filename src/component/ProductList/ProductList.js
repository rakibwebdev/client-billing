import React from 'react';
import './ProductList.scss';
import arrow_icon from '../../img/arrow.svg';
import dots_icon from '../../img/dots.svg';
import ProductPlan from '../ProductPlan/ProductPlan';

export default function ProductList(props) {
    const { products, setProducts } = props;
    function archiveProduct(id) {
        const newProducts = products.map(product => {
            if (product.id === id) {
                product.status = 'Archived';
            }
            return product;
        });
        setProducts(newProducts);
    }
    function unarchiveProduct(id) {
        const newProducts = products.map(product => {
            if (product.id === id) {
                product.status = 'Active';
            }
            return product;
        });
        setProducts(newProducts);
    }
    function showhideProductPlan(id) {
        const newProducts = products.map(product => {
            if (product.id === id) {
                product.showPlan = !product.showPlan;
            }
            return product;
        });
        setProducts(newProducts);
    }
    function HoverAction(id) {
        const newProducts = products.map(product => {
            if (product.id === id) {
                product.isClicked = !product.isClicked;
            }
            return product;
        });
        setProducts(newProducts);
    }
    return (
        <div className='product-list'>
            <div className="product-list__item">
                <ul className="product-list__item__header">
                    <li>
                        <h2 className="title">Product Name</h2>
                    </li>
                    <li>
                        <h2 className="title">Status <img src={arrow_icon} alt="icon" /></h2>
                    </li>
                    <li>
                        <h2 className="title">Pricing Plans <img src={arrow_icon} alt="icon" /></h2>
                    </li>
                    <li>

                    </li>
                </ul>
                {products.map(product => (
                    <div key={product.id}>
                        <ul className="product-list__item__content">
                            <li className='name-with-icon'>
                                <img style={{ backgroundColor: product.iconBG }} src={product.icon} alt="icon" /><h3>{product.name}</h3>
                            </li>
                            <li>
                                {product.status}
                            </li>
                            <li className='plans'>
                                {product.plan}
                            </li>
                            <li className='action'>
                                <button className='show-hide-btn' onClick={() => showhideProductPlan(product.id)}>{product.showPlan ? 'Hide Plans' : 'Show Plans'}</button>

                                <div className="dots"
                                    onClick={() => HoverAction(product.id)}
                                >
                                    <img src={dots_icon} alt="dots" />
                                </div>
                                {product.isClicked && (
                                    <div className='hover-actions'>
                                        {product.status === 'Active' && (
                                            <div>
                                                <div className='action-item'>Add Pricing Plan</div>
                                                <div className='action-item'>Duplicate</div>
                                                <div className='action-item' onClick={() => archiveProduct(product.id)}>Archive</div>
                                            </div>
                                        )}
                                        {product.status === 'Archived' && (
                                            <div>
                                                <div className='action-item'>View</div>
                                                <div className='action-item' onClick={() => unarchiveProduct(product.id)}>Unrchive</div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </li>
                        </ul>
                        {product.showPlan && <ProductPlan product={product} />}
                    </div>
                ))}
            </div>
        </div>
    )
}
