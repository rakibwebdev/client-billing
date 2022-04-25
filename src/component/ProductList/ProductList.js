import React from 'react'

export default function ProductList(props) {
    const { products } = props;
    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}
