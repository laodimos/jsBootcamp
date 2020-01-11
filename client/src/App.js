import React, {Component} from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    hello: null
  }


  render() {
    return (
      <div>
        <h1>Step 3</h1> <br/>
        On this step I use Expressjs as server for React
      </div>
    );
  }
}

export default App;
