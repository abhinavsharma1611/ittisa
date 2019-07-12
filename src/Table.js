import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class Table extends Component {


render(){
    const columns=[{
        Header: "Name",
        accessor: "name"},
        {
        Header: "Mobile No.",
        accessor: "address"}
        ]
        let datas = this.props.datas;
        console.log(datas)
return(
<div className="table">
<h2>Intrested for A cup of Tea Sometime</h2>
    <ReactTable
    columns={columns}
    
    data={datas} />
   
    </div>
    
    );
}
}
export default Table;