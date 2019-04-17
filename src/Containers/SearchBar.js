import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  fetchMise  from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, 
      error: 'testß',
      term: ''
    };
    this.onSubmit=this.onSubmit.bind(this)
  }
  autoComplete(data,index) {

    const {sidoName,sggName,umdName} = data
    return (
      <tr key = {index} onClick = {() => {
        this.props.fetchMise(data.tmX,data.tmY,sggName+" "+umdName)
        this.props.resetStation();
      }}>

        <td>{sidoName}</td>
        <td> {sggName}</td>
        <td> {umdName}</td>

      </tr>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    // this.props.fetchMise(this.state.term);
    this.props.fetchStation(this.state.term);
    this.setState({term: ''});
  }
  render() {
    const clsName = (this.props.loading) ? 
      'btn btn-primary loading' : 'btn btn-primary';
    return (
      <form className='search-bar' onSubmit={event => this.onSubmit(event)}>
        <div className='input-group mb-3'>
          <input 
            onChange={async (event) => {
                await this.setState({term: event.target.value});
                // await this.props.fetchStation(this.state.term);
        }}
            type='text' className='form-control' placeholder='City' 
            value={this.state.term}
          />
          <button onClick = {this.onSubmit.bind(this)}>검색</button>

          <tbody>
          {this.props.stations.map(this.autoComplete.bind(this))}
          </tbody>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { loading: state.mise.loading, error: state.mise.error, stations: state.mise.stations };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( fetchMise , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
