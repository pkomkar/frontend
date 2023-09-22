
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Stock from "../../api/Stock";
import "../Inventory/createInventory.css";

function CreateStock() {

  const history = useHistory();
  const [date, SetDate] = useState("");
  const [monthNo, SetMonthNo] = useState("");
  const [materialName, SetMaterialName] = useState("");
  const [quantityName, SetQuantityName] = useState("");
  const [unitName, SetUnitName] = useState("");
  const [rateNo, SetRateNo] = useState("");
  const [totalAmt, SetTotalAmt] = useState("");
  const {
    handleSubmit,
  } = useForm();


  const onSubmit = async () => {

    const stock = {
      date: date,
      month: monthNo,
      mname: materialName,
      quantity: quantityName,
      unit: unitName,
      rate: rateNo,
      total: totalAmt
    }
    // eslint-disable-next-line
    const res = await Stock.post("/add-stock", stock);
    history.push("/view-stock");
  }

  const onClickhandle = () => {
    history.push("/view-stock");
  }

  return (
    <div className='main-sec'>
      <div className="upd_section">
        <h3 className='fidoh3'>Add Product</h3>
        <button className='view-customer-btn' onClick={onClickhandle}>View Product</button>
        <form className='customer-form' onSubmit={handleSubmit(onSubmit)} >
          <div className='row'>
            <div className='colm'>
              <br /><label className='inv-labels'>Product Date</label><br />
              <input
                className='input-box'
                type="date"
                name="date"
                value={date}
                onChange={(e) => {
                  SetDate(e.target.value);

                  const splitData = (e.target.value).split("-");
                  console.log("splitted data : " + splitData[1]);
                  const newValue = splitData[1];
                  console.log("new value : " + newValue);
                  SetMonthNo(newValue);
                }}
              />
            </div>
            <div className='colm'>
              <br /><label className='inv-labels'>Product Name</label><br />
              <select
                className='input-box'
                name="studentName"
                value={materialName}
                onChange={(e) => {
                  SetMaterialName(e.target.value);
                }}
              >
                <option value=""> </option>
                <option value="Cement">Cement</option>
                <option value="Sand">Sand</option>
                <option value="Aggregates (6 mm)">Aggregates (6 mm)</option>
                <option value="Aggregates (10 mm)">Aggregates (10 mm)</option>
                <option value="Fly As">Fly As</option>
                <option value="Harder">Harder</option>
                <option value="Colour (Red)">Colour (Red)</option>
                <option value="Colour (Black)">Colour (Black)</option>
                <option value="Colour (Yellow)">Colour (Yellow)</option>
                <option value="Fly Ash Brick (4')">Fly Ash Brick (4')</option>
                <option value="Fly Ash Brick (6')">Fly Ash Brick (6')</option>
                <option value="Chequer Tiles (Flower)">Chequer Tiles (Flower)</option>
                <option value="04 Chequer Tiles (Check Box)">04 Chequer Tiles (Check Box)</option>
                <option value="Chequer Tiles (Diamond)">Chequer Tiles (Diamond)</option>
                <option value="Chequer Tiles (Button)">Chequer Tiles (Button)</option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='colm'>
              <br /><label className='inv-labels'>Quantity</label><br />
              <input
                className='input-box'
                type="number"
                name="deptName"
                value={quantityName}
                onChange={(e) => {
                  SetQuantityName(e.target.value);
                }}
              />
            </div>

            <div className='colm'>
              <br /><label className='inv-labels'>Unit</label><br />
              <select
                className='input-box'
                name="instName"
                value={unitName}
                onChange={(e) => {
                  SetUnitName(e.target.value);
                }}
              >
                <option value=""> </option>
                <option value="Bag">Bag</option>
                <option value="Litre">Litre</option>
                <option value="Cubic Feet">Cubic Feet</option>
                <option value="Tonne">Tonne</option>
              </select>
            </div>
          </div>

          <div className='row'>
            <div className='colm'>
              <br /><label className='inv-labels'>Rate (Rs.)</label><br />
              <input
                className='input-box'
                type="number"
                name="deptName"
                value={rateNo}
                onChange={(e) => {
                  SetRateNo(e.target.value);
                }}
              />
            </div>

            <div className='colm'>
              <br /><label className='inv-labels'>Total Amount (Rs.)</label><br />
              <input
                className='input-box'
                type="number"
                name="deptName"
                value={totalAmt}
                onChange={(e) => {
                  SetTotalAmt(e.target.value);
                }}
              />
            </div>
          </div>

          <input className="subButton" type="submit" value="Submit" />
          <input className="cancelButton" type="button" onClick={() => { history.push("/view-stock") }} value="Cancel" />
        </form>
      </div>
    </div>
  )
}

export default CreateStock;    