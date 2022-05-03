import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import Axios from 'axios'
class Barchart extends Component {

 /* state = {
    tables: [],
  }

  async componentDidMount() {
    const response = await Axios.get('http://localhost:8080/GettingDatas')
    this.setState({ tables: response.data })
  }*/
  render() {
    window.onload = async () => {
      const response = await Axios.get('http://localhost:8080/GettingDatas')
      const ArrayTableBarchart = response.data
      const firstrow = async () => {
         for (let index0 = 0; index0 < 12; index0++) {
        let element0 = ArrayTableBarchart[0]
      const table0 = await document.getElementById("0")
        table0.insertAdjacentHTML('beforeend',`
        <td>${element0[index0]}</td>
        `)
      }
    }
      const secondrow = async () => {
        console.log(response.data[1])
           for (let index1 = 0; index1 < 3; index1++) {
          let element1 = ArrayTableBarchart[1]
        const table1 = await document.getElementById("1TD")
          table1.insertAdjacentHTML('beforeend',`
          ${element1[index1]}
          `)
        }
        for (let index1C = 3; index1C < 12; index1C++) {
          let element1C = ArrayTableBarchart[1]
        const table1C = await document.getElementById("1")
          table1C.insertAdjacentHTML('beforeend',`
          <td> ${element1C[index1C]} </td>
          `)
        }
      }
      secondrow()
      firstrow()
    }
    

    return (
      <div className="BachartComponent">
        <div className="BarchartTable">
          <h1>Barchart Table</h1>
          <Table id="DinamicTable" striped bordered hover variant="dark">
            <tbody >
             <tr id="0"></tr>
             <tr id="1">
               <td ></td>
               <td id="1TD"></td>
             </tr>
             <tr id="2"></tr>
             <tr id="3"></tr>
             <tr id="4"></tr>
             <tr id="5"></tr>
             <tr id="6"></tr>
             <tr id="7"></tr>
             <tr id="8"></tr>
             <tr id="9"></tr>
             <tr id="10"></tr>
             <tr id="11"></tr>
             <tr id="12"></tr>
             <tr id="13"></tr>
             <tr id="14"></tr>
             <tr id="15"></tr>
             <tr id="16"></tr>
             <tr id="17"></tr>
            </tbody>
          </Table>
        </div>

      </div>
    )
  }
}

export default Barchart