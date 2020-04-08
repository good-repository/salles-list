import React from 'react'
import moment from 'moment'


import { Table } from 'react-bootstrap'

const saleList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(sale => (
            <tr key={sale._id}>
                <td>{sale.description}</td>
                <td>{moment(sale.createdAt).format('D-MM-YY, h:mm:ss')}</td>
            </tr>
        ))
    }

    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th>Item vendido</th>
                    <th className='tableTime'>Data da venda</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table >
    )
}

export default saleList