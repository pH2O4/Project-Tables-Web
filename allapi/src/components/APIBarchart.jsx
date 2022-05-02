import { Component, React } from "react";
import Axios from 'axios'
class Barchart extends Component {

  state = {
    tables: [],
  }

  async componentDidMount() {
    const response = await Axios.get('http://localhost:8080/GettingDatas')

    console.log(response.data)
    this.setState({ tables: response.data })
  }
  render() {
    return (
      <div>
        <h1>1 - </h1>
      </div>
    )
  }
}

export default Barchart