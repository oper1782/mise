import React, { Component } from 'react';
import { connect } from 'react-redux';

const XMLParser = require('react-xml-parser');

class MiseList extends Component {

  miseGradColor10 = (amount) =>{
    if(amount<16){
      return{backgroundColor:'#0054FF'}
    }else if(amount<31){
      return{backgroundColor:'#489CFF'}
    }else if(amount<41){
      return{backgroundColor:'#90E4FF'}
    }else if(amount<51){
      return{backgroundColor:'#00A500'}
    }else if(amount<76){
      return{backgroundColor:'#FF9436'}
    }else if(amount<101){
      return{backgroundColor:'#C92800'}
    }else if(amount<151){
      return{backgroundColor:'#FF2424'}
    }else{
      return{backgroundColor:'#363636'}
    }
  }
  miseGradColor25 = (amount) =>{
    if(amount<9){
      return{backgroundColor:'#0054FF'}
    }else if(amount<16){
      return{backgroundColor:'#489CFF'}
    }else if(amount<21){
      return{backgroundColor:'#90E4FF'}
    }else if(amount<26){
      return{backgroundColor:'#00A500'}
    }else if(amount<38){
      return{backgroundColor:'#FF9436'}
    }else if(amount<51){
      return{backgroundColor:'#C92800'}
    }else if(amount<76){
      return{backgroundColor:'#FF2424'}
    }else{
      return{backgroundColor:'#363636'}
    }
  }
  miseGradText10 = (amount) =>{
    if(amount<16){
      return "쾌적"
    }else if(amount<31){
      return "매우좋음"
    }else if(amount<41){
      return "좋음"
    }else if(amount<51){
      return "보통"
    }else if(amount<76){
      return "안좋음"
    }else if(amount<101){
      return "조금더 안좋음"
    }else if(amount<151){
      return "아주 안좋음"
    }else{
      return "숨막혀"
    }
  }
  miseGradText25 = (amount) =>{
    if(amount<9){
      return "쾌적"
    }else if(amount<16){
      return "매우좋음"
    }else if(amount<21){
      return "좋음"
    }else if(amount<26){
      return "보통"
    }else if(amount<38){
      return "안좋음"
    }else if(amount<51){
      return "조금더 안좋음"
    }else if(amount<76){
      return "아주 안좋음"
    }else{
      return "숨막혀"
    }
  }
  renderMise(data,index) {
    // const temps = list.map(e => (e.main.temp - 273.15));
    // const pressures = list.map(e => e.main.temp);
    // const humidities = list.map(e => e.main.temp);
    console.log("renderMise",data)
  
//#689e38 초록 ~50
//#fcc02d 노랑 ~100
//#f57b01 주황 ~150
//#c6382a ~200
//#ad1457 ~250
//#880e50 ~500

    return (
      <tr key = {index}>
        <td>
          {data.address}
        </td>
        <td style = {this.miseGradColor10(data.pm10)}>{this.miseGradText10(data.pm10)} {data.pm10}</td>
        <td style = {this.miseGradColor25(data.pm25)}>{this.miseGradText25(data.pm25)} {data.pm25}</td>
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
              <th>장소</th>
              <th>미세먼지</th>
              <th>초미세먼지 </th>
              <th>예보시간 </th>
            </tr>
          </thead>
          <tbody>
            {this.props.mise.map(this.renderMise.bind(this))}
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
