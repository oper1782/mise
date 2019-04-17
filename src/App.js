import React, { Component } from 'react';

import './App.css';
import SearchBar from './Containers/SearchBar';
import MiseList from './Containers/MiseList';

const axios = require('axios')
const XMLParser = require('react-xml-parser');
var serviceKey = "eipWlA7RAYt6mQndIbhLmZbot8dMZ6UiU9%2F54RjaRoHrqpxrHeX8FiMQeDpxRUA3DFjxbubVPlC1ZvjZFGFCdQ%3D%3D"
var xhr = new XMLHttpRequest();
var url = 'http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+serviceKey; /*Service Key*/
queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /*공공데이터포털에서 받은 인증키*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지번호*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*한 페이지 결과 수*/
queryParams += '&' + encodeURIComponent('year') + '=' + encodeURIComponent('2013'); /*측정 연도*/
queryParams += '&' + encodeURIComponent('itemCode') + '=' + encodeURIComponent('PM10'); /*미세먼지 항목 구분(PM10, PM25) PM10, PM25 모두 조회할 경우 파라미터 생략*/




class App extends Component {


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar/>
          <MiseList/>
        </header>
      </div>
    );
  }
}

export default App;
