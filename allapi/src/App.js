import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Barchart from './components/APIBarchart'
import Cmegroup from './components/APICmegroup';
function App() {
  return (
    <div className="App">
      <Barchart />
      <Cmegroup />
    </div>
  );
}

export default App;
