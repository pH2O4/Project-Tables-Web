import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import Axios from 'axios'
class Barchart extends Component {

  state = {
    tables: [],
  }

  async componentDidMount() {
    const response = await Axios.get('http://localhost:8080/GettingDatas')
    this.setState({ tables: response.data })
  }
  render() {
    const ArrayTableBarchart = this.state.tables
    console.log(ArrayTableBarchart)
    return (
      <div className="BachartComponent">
        <div className="BarchartTable">
          <h1>Barchart Table</h1>
          <Table id="DinamicTable" striped bordered hover variant="dark">
            <tbody >
              {
                ArrayTableBarchart.map(row => (
                  <tr key={row}>
                    {
                      row.map(coluns => (
                        <td key={coluns[0]}>{coluns}</td>
                      ))
                    }
                  </tr>
                ))
              }
              {
                ArrayTableBarchart.map(row => (
                  <tr key={row}>
                    {
                      row.map(coluns => (
                        <td key={coluns}>{coluns}</td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>

      </div>
    )
  }
}

export default Barchart