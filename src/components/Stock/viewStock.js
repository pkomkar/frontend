import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Inventory/viewInventory.css";
import Stocks from '../../api/Stock';

const Stock = props => (
    <tr>
        <td>{props.stock.date}</td>
        <td>{props.stock.mname}</td>
        <td>{props.stock.quantity}</td>
        <td>{props.stock.unit}</td>
        <td>{props.stock.rate}</td>
        <td>{props.stock.total}</td>
        <td>
            <Link to={"/stock/edit/" + props.stock._id}><i className='bx bx-edit-alt'></i></Link> | <span onClick={() => { props.deleteStock(props.stock._id) }} ><i className='bx bx-trash'></i></span>
        </td>
    </tr>
)

class viewStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        }
        this.deleteStock = this.deleteStock.bind(this);
    }

    componentDidMount() {
        Stocks.get('/get-stocks')
            .then(res => {
                this.setState({ stocks: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteStock(id) {
        Stocks.delete('/delete-stock/' + id)
            .then(res => console.log(res.data));

        this.setState({ stocks: this.state.stocks.filter(el => el._id !== id) })
    }

    stocksList() {
        return this.state.stocks.map(currentstock => {
            return <Stock stock={currentstock} deleteStock={this.deleteStock} key={currentstock._id} />
        })
    }

    render() {
        return (
            <div className='FideologyActivities'>
                <h3 className='fidoh3'>View Products</h3>
                <div className="fideo">
                    <table>
                        <thead className="thead-light">
                            <tr>
                                <th>Date</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Rate</th>
                                <th>Total Amt.</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.stocksList()}
                        </tbody>
                    </table>
                    <Link to='/add-stock'><div className='add'>Add</div></Link>
                </div>
            </div>
        );
    }
}

export default viewStock;