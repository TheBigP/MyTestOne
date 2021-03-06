import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  handlerOrderChange(){
    let sel = React.findDOMNode(this.refs.selOrder);
  let selValue = sel.options[sel.selectedIndex].value;
  this.props.sortStaff(selValue);
}

//筛选
handlerIdChange(){
    let sel = React.findDOMNode(this.refs.selId);
  let selValue = sel.options[sel.selectedIndex].value;
  this.props.filtStaff(selValue);
}

//search
handlerSearch(){
    let bar = React.findDOMNode(this.refs.searchBar);
  let value = bar.value;
  this.props.searchStaff(value);
}

  render(){
    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      react的第一个测试
    </p>
        <h3 style={{'text-align':'center'}}>人员管理系统</h3>
      <table className="optHeader" style={{'margin-left':'auto','margin-right':'auto'}}>
      <tbody>
        <tr>
        <td className="headerTd"><input ref='searchBar' onChange={this.handlerSearch.bind(this)} type='text' placeholder='Search...' /></td>
        <td className="headerTd">
          <label for='idSelect'>人员筛选</label>
          <select id='idSelect' ref="selId" onChange={this.handlerIdChange.bind(this)}>
              <option value='0'>全部</option>
            <option value='1'>主任</option>
            <option value='2'>老师</option>
            <option value='3'>学生</option>
            <option value='4'>实习</option>
          </select>
        </td>
        <td>
          <label for='orderSelect'>排列方式</label>
          <select id='orderSelect' ref="selOrder" onChange={this.handlerOrderChange.bind(this)}>
            <option value='0'>身份</option>
            <option value='1'>年龄升</option>
            <option value='2'>年龄降</option>
          </select>
        </td>
        </tr>
      </tbody>
      </table>
    </div>


    // let items = [];

    // if(this.props.items.length == 0) {
    //     items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
    // }else {
    //     this.props.items.forEach(item => {
    //         items.push(<StaffItem key={item.key} item={item}/>);
    //     });
    // }
    // <table className='itemPanel'>
      // <thead>
          // <th className='itemTd'>姓名</th>
          // <th className='itemTd'>年龄</th>
          // <th className='itemTd'>身份</th>
          // <th className='itemTd'>性别</th>
          // <th className='itemTd'>操作</th>
      // </thead>
      // <tbody>{items}</tbody>
    // </table>
  );
}


}
export default App;
