import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import Axios from 'axios'
class Barchart extends Component {


  render() {

    window.onload = async () => {
      const firtTableBarchart = async () => {
        const response = await Axios.get('http://localhost:8080/GettingDatasBarchart')
        const ArrayTableBarchart = response.data
        const firstrow = async () => {
          for (let index0 = 0; index0 < 10; index0++) {
            let element0 = ArrayTableBarchart[0]
            const table0 = await document.getElementById("0")
            table0.insertAdjacentHTML('beforeend', `
        <td><b>${element0[index0]}</b></td>
        `)
          }
          for (let index0C = 11; index0C < 12; index0C++) {
            let element0C = ArrayTableBarchart[0]
            const table0 = await document.getElementById("0")
            table0.insertAdjacentHTML('beforeend', `
        <td><b>${element0C[index0C]}</b></td>
        `)
          }
        }
        const secondrow = async () => {
          for (let index1 = 0; index1 < 3; index1++) {
            let element1 = ArrayTableBarchart[1]
            const table1 = await document.getElementById("1TD")
            table1.insertAdjacentHTML('beforeend', `
          ${element1[index1]}
          `)
          }
          for (let index1C = 3; index1C < 12; index1C++) {
            let element1C = ArrayTableBarchart[1]
            const table1C = await document.getElementById("1")
            table1C.insertAdjacentHTML('beforeend', `
          <td> ${element1C[index1C]} </td>
          `)
          }
        }
        const Thirdrow = async () => {
          for (let index2 = 0; index2 < 4; index2++) {
            let element2 = ArrayTableBarchart[2]
            const table2 = await document.getElementById("2TD")
            table2.insertAdjacentHTML('beforeend', `
          ${element2[index2]}
          `)
          }
          for (let index2C = 4; index2C < 13; index2C++) {
            let element2C = ArrayTableBarchart[2]
            const table2C = await document.getElementById("2")
            table2C.insertAdjacentHTML('beforeend', `
            <td>  ${element2C[index2C]}</td> 
            `)
          }
        }
        const Fouthrow = async () => {
          for (let index3 = 0; index3 < 4; index3++) {
            let element3 = ArrayTableBarchart[3]
            const table3 = await document.getElementById("3TD")
            table3.insertAdjacentHTML('beforeend', `
          ${element3[index3]}
          `)
          }
          for (let index3C = 4; index3C < 13; index3C++) {
            let element3C = ArrayTableBarchart[3]
            const table3C = await document.getElementById("3")
            table3C.insertAdjacentHTML('beforeend', `
            <td>  ${element3C[index3C]}</td> 
            `)
          }
        }
        const Fifthrow = async () => {
          for (let index4 = 0; index4 < 4; index4++) {
            let element4 = ArrayTableBarchart[4]
            const table4 = await document.getElementById("4TD")
            table4.insertAdjacentHTML('beforeend', `
          ${element4[index4]}
          `)
          }
          for (let index4C = 4; index4C < 13; index4C++) {
            let element4C = ArrayTableBarchart[4]
            const table4C = await document.getElementById("4")
            table4C.insertAdjacentHTML('beforeend', `
            <td>  ${element4C[index4C]}</td> 
            `)
          }
        }
        const sixthrow = async () => {
          for (let index5 = 0; index5 < 4; index5++) {
            let element5 = ArrayTableBarchart[5]
            const table5 = await document.getElementById("5TD")
            table5.insertAdjacentHTML('beforeend', `
          ${element5[index5]}
          `)
          }
          for (let index5C = 4; index5C < 13; index5C++) {
            let element5C = ArrayTableBarchart[5]
            const table5C = await document.getElementById("5")
            table5C.insertAdjacentHTML('beforeend', `
            <td>  ${element5C[index5C]}</td> 
            `)
          }
        }
        const seventhrow = async () => {
          for (let index6 = 0; index6 < 4; index6++) {
            let element6 = ArrayTableBarchart[6]
            const table6 = await document.getElementById("6TD")
            table6.insertAdjacentHTML('beforeend', `
          ${element6[index6]}
          `)
          }
          for (let index6C = 4; index6C < 13; index6C++) {
            let element6C = ArrayTableBarchart[6]
            const table6C = await document.getElementById("6")
            table6C.insertAdjacentHTML('beforeend', `
            <td>  ${element6C[index6C]}</td> 
            `)
          }
        }
        const eighthrow = async () => {
          for (let index7 = 0; index7 < 4; index7++) {
            let element7 = ArrayTableBarchart[7]
            const table7 = await document.getElementById("7TD")
            table7.insertAdjacentHTML('beforeend', `
          ${element7[index7]}
          `)
          }
          for (let index7C = 4; index7C < 13; index7C++) {
            let element7C = ArrayTableBarchart[7]
            const table7C = await document.getElementById("7")
            table7C.insertAdjacentHTML('beforeend', `
            <td>  ${element7C[index7C]}</td> 
            `)
          }
        }
        const ninthrow = async () => {
          for (let index8 = 0; index8 < 4; index8++) {
            let element8 = ArrayTableBarchart[8]
            const table8 = await document.getElementById("8TD")
            table8.insertAdjacentHTML('beforeend', `
          ${element8[index8]}
          `)
          }
          for (let index8C = 4; index8C < 13; index8C++) {
            let element8C = ArrayTableBarchart[8]
            const table8C = await document.getElementById("8")
            table8C.insertAdjacentHTML('beforeend', `
            <td>  ${element8C[index8C]}</td> 
            `)
          }
        }
        const tenthrow = async () => {
          for (let index9 = 0; index9 < 4; index9++) {
            let element9 = ArrayTableBarchart[9]
            const table9 = await document.getElementById("9TD")
            table9.insertAdjacentHTML('beforeend', `
          ${element9[index9]}
          `)
          }
          for (let index9C = 4; index9C < 13; index9C++) {
            let element9C = ArrayTableBarchart[9]
            const table9C = await document.getElementById("9")
            table9C.insertAdjacentHTML('beforeend', `
            <td>  ${element9C[index9C]}</td> 
            `)
          }
        }
        const eleventh = async () => {
          for (let index10 = 0; index10 < 4; index10++) {
            let element10 = ArrayTableBarchart[10]
            const table10 = await document.getElementById("10TD")
            table10.insertAdjacentHTML('beforeend', `
          ${element10[index10]}
          `)
          }
          for (let index10C = 4; index10C < 13; index10C++) {
            let element10C = ArrayTableBarchart[10]
            const table10C = await document.getElementById("10")
            table10C.insertAdjacentHTML('beforeend', `
            <td>  ${element10C[index10C]}</td> 
            `)
          }
        }
        const twelfth = async () => {
          for (let index11 = 0; index11 < 4; index11++) {
            let element11 = ArrayTableBarchart[11]
            const table11 = await document.getElementById("11TD")
            table11.insertAdjacentHTML('beforeend', `
          ${element11[index11]}
          `)
          }
          for (let index11C = 4; index11C < 13; index11C++) {
            let element11C = ArrayTableBarchart[11]
            const table11C = await document.getElementById("11")
            table11C.insertAdjacentHTML('beforeend', `
            <td>  ${element11C[index11C]}</td> 
            `)
          }
        }
        const thirteenth = async () => {
          for (let index12 = 0; index12 < 4; index12++) {
            let element12 = ArrayTableBarchart[12]
            const table12 = await document.getElementById("12TD")
            table12.insertAdjacentHTML('beforeend', `
          ${element12[index12]}
          `)
          }
          for (let index12C = 4; index12C < 13; index12C++) {
            let element12C = ArrayTableBarchart[12]
            const table12C = await document.getElementById("12")
            table12C.insertAdjacentHTML('beforeend', `
            <td>  ${element12C[index12C]}</td> 
            `)
          }
        }
        const fourteenth = async () => {
          for (let index13 = 0; index13 < 4; index13++) {
            let element13 = ArrayTableBarchart[13]
            const table13 = await document.getElementById("13TD")
            table13.insertAdjacentHTML('beforeend', `
          ${element13[index13]}
          `)
          }
          for (let index13C = 4; index13C < 13; index13C++) {
            let element13C = ArrayTableBarchart[13]
            const table13C = await document.getElementById("13")
            table13C.insertAdjacentHTML('beforeend', `
            <td>  ${element13C[index13C]}</td> 
            `)
          }
        }
        const fifteenth = async () => {
          for (let index14 = 0; index14 < 4; index14++) {
            let element14 = ArrayTableBarchart[14]
            const table14 = await document.getElementById("14TD")
            table14.insertAdjacentHTML('beforeend', `
          ${element14[index14]}
          `)
          }
          for (let index14C = 4; index14C < 13; index14C++) {
            let element14C = ArrayTableBarchart[14]
            const table14C = await document.getElementById("14")
            table14C.insertAdjacentHTML('beforeend', `
            <td>  ${element14C[index14C]}</td> 
            `)
          }
        }
        const sixteenth = async () => {
          for (let index15 = 0; index15 < 4; index15++) {
            let element15 = ArrayTableBarchart[15]
            const table15 = await document.getElementById("15TD")
            table15.insertAdjacentHTML('beforeend', `
          ${element15[index15]}
          `)
          }
          for (let index15C = 4; index15C < 13; index15C++) {
            let element15C = ArrayTableBarchart[15]
            const table15C = await document.getElementById("15")
            table15C.insertAdjacentHTML('beforeend', `
            <td>  ${element15C[index15C]}</td> 
            `)
          }
        }
        const seventeenth = async () => {
          for (let index16 = 0; index16 < 4; index16++) {
            let element16 = ArrayTableBarchart[16]
            const table16 = await document.getElementById("16TD")
            table16.insertAdjacentHTML('beforeend', `
          ${element16[index16]}
          `)
          }
          for (let index16C = 4; index16C < 13; index16C++) {
            let element16C = ArrayTableBarchart[16]
            const table16C = await document.getElementById("16")
            table16C.insertAdjacentHTML('beforeend', `
            <td>  ${element16C[index16C]}</td> 
            `)
          }
        }
        seventeenth()
        sixteenth()
        fifteenth()
        fourteenth()
        thirteenth()
        twelfth()
        eleventh()
        tenthrow()
        ninthrow()
        eighthrow()
        seventhrow()
        sixthrow()
        Fifthrow()
        Fouthrow()
        Thirdrow()
        secondrow()
        firstrow()

      }
      const SecondTableCmegroup = async () => {
        const response = await Axios.get('http://localhost:8080/GettingDatasCmegroup')
        const ArrayTableCmegroup = response.data
        const firstrow = async () => {
          for (let index0 = 0; index0 < 11; index0++) {
          const elementArrayTableCmegroup = ArrayTableCmegroup[1];
          const table = await document.getElementById("0C")
          table.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup[index0]}</td>
          `)
        }
        }
        const secondrow = async () => {
        for (let index1 = 0; index1 < 11; index1++) {
          const elementArrayTableCmegroup1 = ArrayTableCmegroup[2];
          const table1 = await document.getElementById("2C")
          table1.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup1[index1]}</td>
          `)
        }
      }
      const thirdrow = async () => {
        for (let index2 = 0; index2 < 11; index2++) {
          const elementArrayTableCmegroup2 = ArrayTableCmegroup[3];
          const table2 = await document.getElementById("3C")
          table2.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup2[index2]}</td>
          `)
        }}
        for (let index3 = 0; index3 < 11; index3++) {
          const elementArrayTableCmegroup3 = ArrayTableCmegroup[4];
          const table3 = await document.getElementById("4C")
          table3.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup3[index3]}</td>
          `)
        }
        for (let index4 = 0; index4 < 11; index4++) {
          const elementArrayTableCmegroup4 = ArrayTableCmegroup[5];
          const table4 = await document.getElementById("5C")
          table4.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup4[index4]}</td>
          `)
        }
        for (let index5 = 0; index5 < 11; index5++) {
          const elementArrayTableCmegroup5 = ArrayTableCmegroup[6];
          const table5 = await document.getElementById("6C")
          table5.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup5[index5]}</td>
          `)
        }
        for (let index6 = 0; index6 < 11; index6++) {
          const elementArrayTableCmegroup6 = ArrayTableCmegroup[7];
          const table6 = await document.getElementById("7C")
          table6.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup6[index6]}</td>
          `)
        }
        for (let index7 = 0; index7 < 11; index7++) {
          const elementArrayTableCmegroup7 = ArrayTableCmegroup[8];
          const table7 = await document.getElementById("8C")
          table7.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup7[index7]}</td>
          `)
        }
        for (let index8 = 0; index8 < 11; index8++) {
          const elementArrayTableCmegroup8 = ArrayTableCmegroup[9];
          const table8 = await document.getElementById("9C")
          table8.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup8[index8]}</td>
          `)
        }
        for (let index9 = 0; index9 < 11; index9++) {
          const elementArrayTableCmegroup9 = ArrayTableCmegroup[10];
          const table9 = await document.getElementById("10C")
          table9.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup9[index9]}</td>
          `)
        }

        for (let index11 = 0; index11 < 11; index11++) {
          const elementArrayTableCmegroup11 = ArrayTableCmegroup[12];
          const table11 = await document.getElementById("12C")
          table11.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup11[index11]}</td>
          `)
        }
        for (let index12 = 0; index12 < 11; index12++) {
          const elementArrayTableCmegroup12 = ArrayTableCmegroup[13];
          const table12 = await document.getElementById("13C")
          table12.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup12[index12]}</td>
          `)
        }
        for (let index13 = 0; index13 < 11; index13++) {
          const elementArrayTableCmegroup13 = ArrayTableCmegroup[14];
          const table13 = await document.getElementById("14C")
          table13.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup13[index13]}</td>
          `)
        }
        for (let index14 = 0; index14 < 11; index14++) {
          const elementArrayTableCmegroup14 = ArrayTableCmegroup[15];
          const table14 = await document.getElementById("15C")
          table14.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup14[index14]}</td>
          `)
        }
        for (let index15 = 0; index15 < 11; index15++) {
          const elementArrayTableCmegroup15 = ArrayTableCmegroup[16];
          const table15 = await document.getElementById("16C")
          table15.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup15[index15]}</td>
          `)
        }
        for (let index16 = 0; index16 < 11; index16++) {
          const elementArrayTableCmegroup16 = ArrayTableCmegroup[17];
          const table16 = await document.getElementById("17C")
          table16.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup16[index16]}</td>
          `)
        }
        for (let index17 = 0; index17 < 11; index17++) {
          const elementArrayTableCmegroup17 = ArrayTableCmegroup[18];
          const table17 = await document.getElementById("18C")
          table17.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup17[index17]}</td>
          `)
        }
        for (let index18 = 0; index18 < 11; index18++) {
          const elementArrayTableCmegroup18 = ArrayTableCmegroup[19];
          const table18 = await document.getElementById("19C")
          table18.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup18[index18]}</td>
          `)
        }
        firstrow()
        secondrow()
        thirdrow()
      }

      const ThirdTableMain = async () => {
        const response = await Axios.get('http://localhost:8080/GettingDatasBarchart')
        const ArrayTableBarchart = response.data

      }

      const CallFunctionsForEachOne = async () => {
        await firtTableBarchart()
        await SecondTableCmegroup()
      }
      CallFunctionsForEachOne()
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
              <tr id="2">
                <td ></td>
                <td id="2TD"></td>
              </tr>
              <tr id="3">
                <td ></td>
                <td id="3TD"></td>
              </tr>
              <tr id="4">
                <td ></td>
                <td id="4TD"></td>
              </tr>
              <tr id="5">
                <td ></td>
                <td id="5TD"></td>
              </tr>
              <tr id="6">
                <td ></td>
                <td id="6TD"></td>
              </tr>
              <tr id="7">
                <td ></td>
                <td id="7TD"></td>
              </tr>
              <tr id="8">
                <td ></td>
                <td id="8TD"></td>
              </tr>
              <tr id="9">
                <td ></td>
                <td id="9TD"></td>
              </tr>
              <tr id="10">
                <td ></td>
                <td id="10TD"></td>
              </tr>
              <tr id="11">
                <td ></td>
                <td id="11TD"></td>
              </tr>
              <tr id="12">
                <td ></td>
                <td id="12TD"></td>
              </tr>
              <tr id="13">
                <td ></td>
                <td id="13TD"></td>
              </tr>
              <tr id="14">
                <td ></td>
                <td id="14TD"></td>
              </tr>
              <tr id="15">
                <td ></td>
                <td id="15TD"></td>
              </tr>
              <tr id="16">
                <td ></td>
                <td id="16TD"></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="CmegroupTable"></div>
        <h1>Cmegroup</h1>
        <Table striped bordered hover>
          <tbody id="SecondTableCmegroup">
            <tr>
              <td><b>MONTH</b></td>
              <td><b>OPTIONS</b></td>
              <td><b>CHART</b></td>
              <td><b>LAST</b></td>
              <td><b>CHANGE</b></td>
              <td><b>PRIOR SETTLE</b></td>
              <td><b>OPEN</b></td>
              <td><b>HIGH</b></td>
              <td><b>LOW</b></td>
              <td><b>VOLUME</b></td>
              <td><b>UPDATED</b></td>
            </tr>
            <tr id="0C"></tr>
            <tr id="2C"></tr>
            <tr id="3C"></tr>
            <tr id="4C"></tr>
            <tr id="5C"></tr>
            <tr id="6C"></tr>
            <tr id="7C"></tr>
            <tr id="8C"></tr>
            <tr id="9C"></tr>
            <tr id="10C"></tr>
            <tr id="11C"></tr>
            <tr id="12C"></tr>
            <tr id="13C"></tr>
            <tr id="14C"></tr>
            <tr id="15C"></tr>
            <tr id="16C"></tr>
            <tr id="17C"></tr>
            <tr id="18C"></tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Barchart