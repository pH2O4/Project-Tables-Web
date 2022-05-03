import { Component, React } from "react";
import { Table } from 'react-bootstrap'
import Axios from 'axios'

class Cmegroup extends Component {


    render() {
        window.onload = async () => { 
       // const response = await Axios.get('http://localhost:8080/GettingDatasBarchart')
       //const ArrayTableBarchart = response.data
}


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