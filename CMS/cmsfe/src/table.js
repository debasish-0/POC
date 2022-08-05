import './table.css'
//import { useEffect } from "react";
import TableData from "./data";
function DynamicTable(){

// get table column
 const column = Object.keys(TableData[0]);

 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }

// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{}</td>
                   })
                }
           </tr>
       )
     })
}


  return (
        <table className="table">
            <div >
                <thead>
                <tr>{}</tr>
                </thead>
                <tbody>
                {}
                </tbody>
                      
            </div>                      
        </table>
    )
}
export default DynamicTable;