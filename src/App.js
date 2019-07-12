import React, { Component } from 'react';
import './App.css';
import Ittpic from "./ittisa.jpg";
import 'react-table/react-table.css';
import Table from './Table';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'Lets Create A Digital Strategy',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){   
      let data = {
        name, address
      }
      datas.push(data);
    }else{                      
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  render() {
    
    return (
      <div className="App">
         <img src={Ittpic} alt="A LOGO"></img>
         <h2 align="center">{this.state.title}</h2>
         <h3>Drop Your Contact. Our Team will get in touch with you.</h3>
        <form align="center" ref="myForm" className="myForm">
          <input align="center" type="text" ref="name" placeholder="Name" className="formField" />
          <input align="center" type="text" ref="address" placeholder="Contact No." className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">Contact Me</button>
        </form>
      
 <Table datas={this.state.datas}/>
 </div>
      
    


    );
  }
}

export default App;