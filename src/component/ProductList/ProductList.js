import React from 'react'
import './ProductList.scss';
import arrow_icon from '../../img/arrow.svg';
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
    return (
        <div className='product-list'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <h2 className="title">Product Name</h2>
                        </th>
                        <th>
                            <h2 className="title">Status <img src={arrow_icon} alt="icon" /></h2>
                        </th>
                        <th>
                            <h2 className="title">Pricing Plans <img src={arrow_icon} alt="icon" /></h2>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td><img src={product.icon} alt="icon" />{product.name}</td>
                            <td>{product.status}</td>
                            <td>
                                {product.plan}
                            </td>
                            <td>
                                <button onClick={() => showhideProductPlan(product.id)}>{product.showPlan ? 'Show Plans' : 'Hide Plans'}</button>
                                <button onClick={() => archiveProduct(product.id)}>Archive</button>
                                <button onClick={() => unarchiveProduct(product.id)}>Unrchive</button>
                            </td>
                            <td>{!product.showPlan && <ProductPlan plans={product.plans} />}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </div>
    )
}
