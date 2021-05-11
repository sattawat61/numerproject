import React, { useState } from 'react';
import './style.css'
import { InputGroup, InputGroupAddon, Input, Card } from 'reactstrap';
import { Table } from 'antd'
import mathjs from 'mathjs';
import { derivative, abs, compile } from 'mathjs'
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';

const PlotlyComponent = createPlotlyComponent(Plotly);
var data = [];
var dataG = [];
const columns = [
  {
    title: 'Iteration',
    dataIndex: 'iteration',
    width: 150,
  },
  {
    title: 'X=',
    dataIndex: 'X',
    width: 180,
  },
  {
    title: 'X',
    dataIndex: 'x',
    width: 180,
  },

  {
    title: 'Error',
    dataIndex: 'error',
  },
];
class newton extends React.Component {
  constructor() {
    super();
    this.state = {
      X0: 0,
      FX: '2-e^(x/4)',
      fxstart: false
    }
    this.handleChage = this.handleChage.bind(this);
    this.fxNewton = this.fxNewton.bind(this);
  }
  handleChage(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  fxNewton(x0) {
    var x = [];
    var Er = [];
    var sum = 0;

    var i = 0;
    x[0] = x0;
    Er[0] = 0;

    do {
      var fxold = this.fun(x[i]).toFixed(6);
      var fxdold = this.Derivative(x[i])
      x[i + 1] = x[i] - (fxold / fxdold);
      sum = this.err(x[i + 1], x[i]);
      sum = Math.abs(sum).toFixed(6);
      Er[i + 1] = sum;
      i++;

    } while (sum > 0.000001)
    this.setdata(x, Er);
    this.setState({
      fxstart: true
    })
  }
  fun(X) {
    var expr = compile(this.state.FX);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }
  Derivative(X) {
    var expr = derivative(this.state.FX, 'x');
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }
  err(xnew, xold) {
    return (xnew - xold) / xnew;
  }
  setdata(x, Er) {
    data = [];
    dataG = [];
    for (let i = 0; i < x.length; i++) {
      data.push({
        iteration: i,
        X: "X" + i,
        x: x[i],
        error: Er[i],
      });
      dataG.push(
        {
          "Er": "Iteration" + i,
          "error": Er[i]
        }
      );
    }
  }
  render() {
    return (
      <div class="container my-4">
        <div class="row">
          <div class="col-12 col-md-6 offset-md-3">
            <form >
              <header className="header">
                <div className="container">
                  <div className="header_area">
                    <h1>Newton-Raphson</h1>
                  </div>
                </div>
              </header>
              <div className="mb-3">
                <label for="exampleInputnumber" className="form-label">Please input you Equation</label>
                <input type="Equation" className="form-control" id="exampleInputnumber" placeholder="Your Equation.."
                  value={this.state.value} onChange= {this.handleChage}/>
                <label for="exampleInputnumber" className="form-label">Please input you X</label>
                <input type="X" className="form-control" id="exampleInputnumber" placeholder="Your X.."
                  value={this.state.value} onChange= {this.handleChage}/>
              </div>
              <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
        <h2 className="mt-4">Table</h2>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        <h2 className="mt-4">Chart</h2>
        <div
          style={{ width: "100%", height: "550px", float: "middle" }}>
          <PlotlyComponent className="whatever" data={data} />
        </div>
      </div>
    );
  }
}
export default newton
 
