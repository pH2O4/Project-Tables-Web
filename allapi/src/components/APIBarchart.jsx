import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import './TABLES.css'
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
        console.log(ArrayTableCmegroup)
        const firstrow = async () => {
          for (let index0 = 0; index0 <= 10; index0++) {
            const elementArrayTableCmegroup = ArrayTableCmegroup[0];
            const table = await document.getElementById("0C")
            table.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup[index0]}</td>
          `)
          }
        }
        const secondrow = async () => {
          for (let index1 = 11; index1 <= 21; index1++) {
            const elementArrayTableCmegroup1 = ArrayTableCmegroup[0];
            const table1 = await document.getElementById("2C")
            table1.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup1[index1]}</td>
          `)
          }
        }
        const thirdrow = async () => {
          for (let index2 = 22; index2 <= 32; index2++) {
            const elementArrayTableCmegroup2 = ArrayTableCmegroup[0];
            const table2 = await document.getElementById("3C")
            table2.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup2[index2]}</td>
          `)
          }
        }
        const fourth = async () => {
          for (let index3 = 33; index3 <= 43; index3++) {
            const elementArrayTableCmegroup3 = ArrayTableCmegroup[0];
            const table3 = await document.getElementById("4C")
            table3.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup3[index3]}</td>
          `)
          }
        }
        const fifth = async () => {
          for (let index4 = 44; index4 <= 54; index4++) {
            const elementArrayTableCmegroup4 = ArrayTableCmegroup[0];
            const table4 = await document.getElementById("5C")
            table4.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup4[index4]}</td>
          `)
          }
        }
        const sixth = async () => {
          for (let index5 = 55; index5 <= 65; index5++) {
            const elementArrayTableCmegroup5 = ArrayTableCmegroup[0];
            const table5 = await document.getElementById("6C")
            table5.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup5[index5]}</td>
          `)
          }
        }
        const seventh = async () => {
          for (let index6 = 66; index6 <= 76; index6++) {
            const elementArrayTableCmegroup6 = ArrayTableCmegroup[0];
            const table6 = await document.getElementById("7C")
            table6.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup6[index6]}</td>
          `)
          }
        }
        const eighth = async () => {
          for (let index7 = 77; index7 <= 87; index7++) {
            const elementArrayTableCmegroup7 = ArrayTableCmegroup[0];
            const table7 = await document.getElementById("8C")
            table7.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup7[index7]}</td>
          `)
          }
        }
        const ninth = async () => {
          for (let index8 = 88; index8 <= 98; index8++) {
            const elementArrayTableCmegroup8 = ArrayTableCmegroup[0];
            const table8 = await document.getElementById("9C")
            table8.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup8[index8]}</td>
          `)
          }
        }
        const tenth = async () => {
          for (let index9 = 99; index9 <= 109; index9++) {
            const elementArrayTableCmegroup9 = ArrayTableCmegroup[0];
            const table9 = await document.getElementById("10C")
            table9.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup9[index9]}</td>
          `)
          }
        }
        const eleventh = async () => {
          for (let index11 = 110; index11 <= 120; index11++) {
            const elementArrayTableCmegroup11 = ArrayTableCmegroup[0];
            const table11 = await document.getElementById("11C")
            table11.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup11[index11]}</td>
          `)
          }
        }
        const twelfth = async () => {
          for (let index12 = 121; index12 <= 131; index12++) {
            const elementArrayTableCmegroup12 = ArrayTableCmegroup[0];
            const table12 = await document.getElementById("12C")
            table12.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup12[index12]}</td>
          `)
          }
        }
        const thirteenth = async () => {
          for (let index13 = 132; index13 <= 142; index13++) {
            const elementArrayTableCmegroup13 = ArrayTableCmegroup[0];
            const table13 = await document.getElementById("13C")
            table13.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup13[index13]}</td>
          `)
          }
        }
        const fourteenth = async () => {
          for (let index14 = 143; index14 <= 153; index14++) {
            const elementArrayTableCmegroup14 = ArrayTableCmegroup[0];
            const table14 = await document.getElementById("14C")
            table14.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup14[index14]}</td>
          `)
          }
        }
        const fifteenth = async () => {
          for (let index15 = 154; index15 <= 164; index15++) {
            const elementArrayTableCmegroup15 = ArrayTableCmegroup[0];
            const table15 = await document.getElementById("15C")
            table15.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup15[index15]}</td>
          `)
          }
        }
        const sixteenth = async () => {
          for (let index16 = 165; index16 <= 175; index16++) {
            const elementArrayTableCmegroup16 = ArrayTableCmegroup[0];
            const table16 = await document.getElementById("16C")
            table16.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup16[index16]}</td>
          `)
          }
        }
        const seventeenth = async () => {
          for (let index17 = 176; index17 <= 186; index17++) {
            const elementArrayTableCmegroup17 = ArrayTableCmegroup[0];
            const table17 = await document.getElementById("17C")
            table17.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup17[index17]}</td>
          `)
          }
        }
        const eighteenth = async () => {
          for (let index18 = 187; index18 <= 197; index18++) {
            const elementArrayTableCmegroup18 = ArrayTableCmegroup[0];
            const table18 = await document.getElementById("18C")
            table18.insertAdjacentHTML('beforeend', `
         <td> ${elementArrayTableCmegroup18[index18]}</td>
          `)
          }
        }
        eighteenth()
        seventeenth()
        sixteenth()
        fifteenth()
        fourteenth()
        thirteenth()
        twelfth()
        eleventh()
        tenth()
        ninth()
        eighth()
        seventh()
        sixth()
        fifth()
        fourth()
        firstrow()
        secondrow()
        thirdrow()
      }

      const ThirdTableMain = async () => {
        const response = await Axios.get('http://localhost:8080/GettingDatasB3')
        const ArrayTableB3 = response.data
        //FOR WITH SPAN ROW AND INTRODUCE TDS
        for (let index = 0; index < ArrayTableB3[1].length; index++) {
          const element = ArrayTableB3[1];
          const table = await document.getElementById("B3TR1")
          table.insertAdjacentHTML('beforeend', `
       <td> <b> ${element[index]} </b></td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[2].length; index++) {
          const element = ArrayTableB3[2];
          const table = await document.getElementById("B3TR2")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]}</td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[3].length; index++) {
          const element = ArrayTableB3[3];
          const table = await document.getElementById("B3TR3")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]}</td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[4].length; index++) {
          const element = ArrayTableB3[4];
          const table = await document.getElementById("B3TR4")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]}</td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[5].length; index++) {
          const element = ArrayTableB3[5];
          const table = await document.getElementById("B3TR5")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]}</td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[6].length; index++) {
          const element = ArrayTableB3[6];
          const table = await document.getElementById("B3TR6")
          table.insertAdjacentHTML('beforeend', `
       <td> <b>${element[index]} </b></td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[7].length; index++) {
          const element = ArrayTableB3[7];
          const table = await document.getElementById("B3TR7")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[8].length; index++) {
          const element = ArrayTableB3[8];
          const table = await document.getElementById("B3TR8")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[9].length; index++) {
          const element = ArrayTableB3[9];
          const table = await document.getElementById("B3TR9")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[10].length; index++) {
          const element = ArrayTableB3[10];
          const table = await document.getElementById("B3TR10")
          table.insertAdjacentHTML('beforeend', `
       <td> <b> ${element[index]} </b></td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[11].length; index++) {
          const element = ArrayTableB3[11];
          const table = await document.getElementById("B3TR11")
          table.insertAdjacentHTML('beforeend', `
       <td> <b>${element[index]}</b> </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[12].length; index++) {
          const element = ArrayTableB3[12];
          const table = await document.getElementById("B3TR12")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[13].length; index++) {
          const element = ArrayTableB3[13];
          const table = await document.getElementById("B3TR13")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[14].length; index++) {
          const element = ArrayTableB3[14];
          const table = await document.getElementById("B3TR14")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[15].length; index++) {
          const element = ArrayTableB3[15];
          const table = await document.getElementById("B3TR15")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[16].length; index++) {
          const element = ArrayTableB3[16];
          const table = await document.getElementById("B3TR16")
          table.insertAdjacentHTML('beforeend', `
       <td><b> ${element[index]} </b></td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[17].length; index++) {
          const element = ArrayTableB3[17];
          const table = await document.getElementById("B3TR17")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[18].length; index++) {
          const element = ArrayTableB3[18];
          const table = await document.getElementById("B3TR18")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[19].length; index++) {
          const element = ArrayTableB3[19];
          const table = await document.getElementById("B3TR19")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[20].length; index++) {
          const element = ArrayTableB3[20];
          const table = await document.getElementById("B3TR20")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[21].length; index++) {
          const element = ArrayTableB3[21];
          const table = await document.getElementById("B3TR21")
          table.insertAdjacentHTML('beforeend', `
       <td><b> ${element[index]}</b> </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[22].length; index++) {
          const element = ArrayTableB3[22];
          const table = await document.getElementById("B3TR22")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[23].length; index++) {
          const element = ArrayTableB3[23];
          const table = await document.getElementById("B3TR23")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[24].length; index++) {
          const element = ArrayTableB3[24];
          const table = await document.getElementById("B3TR24")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[25].length; index++) {
          const element = ArrayTableB3[25];
          const table = await document.getElementById("B3TR25")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[26].length; index++) {
          const element = ArrayTableB3[26];
          const table = await document.getElementById("B3TR26")
          table.insertAdjacentHTML('beforeend', `
       <td><b> ${element[index]}</b> </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[27].length; index++) {
          const element = ArrayTableB3[27];
          const table = await document.getElementById("B3TR27")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[28].length; index++) {
          const element = ArrayTableB3[28];
          const table = await document.getElementById("B3TR28")
          table.insertAdjacentHTML('beforeend', `
       <td> <b>${element[index]}</b> </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[29].length; index++) {
          const element = ArrayTableB3[29];
          const table = await document.getElementById("B3TR29")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[30].length; index++) {
          const element = ArrayTableB3[30];
          const table = await document.getElementById("B3TR30")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[31].length; index++) {
          const element = ArrayTableB3[31];
          const table = await document.getElementById("B3TR31")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[32].length; index++) {
          const element = ArrayTableB3[32];
          const table = await document.getElementById("B3TR32")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[33].length; index++) {
          const element = ArrayTableB3[33];
          const table = await document.getElementById("B3TR33")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        for (let index = 0; index < ArrayTableB3[34].length; index++) {
          const element = ArrayTableB3[34];
          const table = await document.getElementById("B3TR34")
          table.insertAdjacentHTML('beforeend', `
       <td> ${element[index]} </td>
        `)
        }
        console.log(ArrayTableB3)
      }

      const fourthTable = async () => {
        const response = await Axios.get('http://localhost:8080/GettingDatasBCBGOV')
        const ArrayTableBCBGOV = response.data
      }
      const CallFunctionsForEachOne = async () => {
        // await firtTableBarchart()
       //   await SecondTableCmegroup()
      //  await ThirdTableMain()
     await fourthTable ()

      }
      CallFunctionsForEachOne()
    }

    return (
      <div className="TABLESAPIIComponent">
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

        <div className="CmegroupTable">
          <h1>Cmegroup Table</h1>
          <Table id="SecondTableCmegroup" striped bordered hover variant="light">
            <tbody>
              <tr>
                <td ><b>MONTH</b></td>
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

        <div className="TableB3">
          <h1>B3 Table</h1>
          <Table id="B3TABLEX" striped bordered hover variant="dark">
            <tbody id="BodyTableB3">
              <tr><td><b>MERCADORIA</b></td>  <td><b>VENCIMENTO</b></td>
              <td><b>PREÇO DE AJUSTE ANTERIOR</b></td>
              <td><b>PREÇO DE AJUSTE ATUAL	</b></td>
              <td><b>VARIAÇÃO</b></td>
              <td><b>VALOR DO AJUSTE POR CONTRATO (R$)</b></td></tr>

              <tr id="B3TR1"></tr>
              <tr id="B3TR2"></tr>
              <tr id="B3TR3"></tr>
              <tr id="B3TR4"></tr>
              <tr id="B3TR5"></tr>
              <tr id="B3TR6"></tr>
              <tr id="B3TR7"></tr>
              <tr id="B3TR8"></tr>
              <tr id="B3TR9"></tr>
              <tr id="B3TR10"></tr>
              <tr id="B3TR11"></tr>
              <tr id="B3TR12"></tr>
              <tr id="B3TR13"></tr>
              <tr id="B3TR14"></tr>
              <tr id="B3TR15"></tr>
              <tr id="B3TR16"></tr>
              <tr id="B3TR17"></tr>
              <tr id="B3TR18"></tr>
              <tr id="B3TR19"></tr>
              <tr id="B3TR20"></tr>
              <tr id="B3TR21"></tr>
              <tr id="B3TR22"></tr>
              <tr id="B3TR23"></tr>
              <tr id="B3TR24"></tr>
              <tr id="B3TR25"></tr>
              <tr id="B3TR26"></tr>
              <tr id="B3TR27"></tr>
              <tr id="B3TR28"></tr>
              <tr id="B3TR29"></tr>
              <tr id="B3TR30"></tr>
              <tr id="B3TR31"></tr>
              <tr id="B3TR32"></tr>
              <tr id="B3TR33"></tr>
              <tr id="B3TR34"></tr>
            </tbody>
          </Table>
        </div>

        <div className="bcbgovTable">

        </div>
      </div>
    )
  }
}

export default Barchart