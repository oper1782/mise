import React, { Component } from 'react';
import { connect } from 'react-redux';

const XMLParser = require('react-xml-parser');

class MiseList extends Component {

  renderMise(data,index) {
    // const temps = list.map(e => (e.main.temp - 273.15));
    // const pressures = list.map(e => e.main.temp);
    // const humidities = list.map(e => e.main.temp);
    console.log("renderMise",data)
  

    return (
      <tr key = {index}>
        <td>
          {data.address}
        </td>
        <td>{data.pm10}</td>
        <td>{data.pm25}</td>
        <td>{data.dataTime}/></td>

      </tr>
    );
  }
  handleError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.error.message}
        </div>
      );
    }
  }
  render() {

    // console.log("props",this.props)
    return (
      <div className='weather-list' >
        { this.handleError() }
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>pm10(미세먼지)</th>
              <th>pm2.5(초미세먼지) </th>
              <th>DataTime </th>
            </tr>
          </thead>
          <tbody>
            {this.props.mise.map(this.renderMise)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    mise: state.mise.data,  
    error: state.mise.error,
    loading:state.mise.loading,
    address:state.mise.address,
  };
}

export default connect(mapStateToProps)(MiseList);
