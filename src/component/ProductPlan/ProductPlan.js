import React from 'react'

export default function ProductPlan(props) {
    const { plans } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <h2 className="title">Plan Name</h2>
                    </th>
                    <th>
                        <h2 className="title">Price</h2>
                    </th>
                    <th>
                        <h2 className="title">Description</h2>
                    </th>
                    <th>
                        <h2 className="title">Status</h2>
                    </th>
                    <th>
                        <h2 className="title">Action</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                {plans.map(plan => (
                    <tr key={plan.id}>
                        <td>{plan.name}</td>
                        <td>{plan.price}</td>
                        <td>{plan.billing}</td>
                        <td>{plan.status}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
