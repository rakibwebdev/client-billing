import React, { useState } from 'react';
import './ProductPlan.scss';
import dots_icon from '../../img/dots.svg';
export default function ProductPlan(props) {
    const { product } = props;
    const [plans, setPlans] = useState(product.plans);

    function updateIsClicked(id) {
        const newPlans = plans.map(plan => {
            if (plan.id === id) {
                plan.isClicked = !plan.isClicked;
            }
            return plan;
        });
        setPlans(newPlans);
    }
    return (
        <table className='product-plan'>
            <thead>
                <tr>
                    <th>
                        <h2 className="title">Plan Name</h2>
                    </th>
                    <th>
                        <h2 className="title">Billing Type</h2>
                    </th>
                    <th>
                        <h2 className="title">Price</h2>
                    </th>
                    <th>
                        <h2 className="title">Billing Period</h2>
                    </th>
                    <th>
                        <h2 className="title">Billing Cycles</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                {plans.map(plan => (
                    <tr key={plan.id}>
                        <td className='plan-name'>{plan.name}</td>
                        <td>{plan.billing}</td>
                        <td>{plan.price}</td>
                        <td>{plan.period}</td>
                        <td className='plan-ations'>
                            {plan.billin_cycle === '' ? '-' : plan.billin_cycle}
                            <button onClick={() => updateIsClicked(plan.id)}>
                                <img src={dots_icon} alt="icon" />
                            </button>
                            {plan.isClicked && (
                                <div className='plan-actions-container'>
                                    <div className='action-item'>Edit Plan</div>
                                    <div className='action-item'>Duplicate Plan</div>
                                    <div className='action-item'>Archive</div>
                                </div>
                            )}

                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
