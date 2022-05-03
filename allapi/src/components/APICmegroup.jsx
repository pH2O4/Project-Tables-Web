import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import Axios from 'axios'

class Cmegroup extends Component {


    render() {
   const SecondComponent = async () => {
    const response = await Axios.get('http://localhost:8080/GettingDatasCmegroup')
    const ArrayTableBarchart = response.data
   }
    window.addEventListener("load", SecondComponent)
        return (
            <div className="CmegroupComponent">
<Table striped bordered hover variant="dark">
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
            </div>
        )
    }
}

export default Cmegroup