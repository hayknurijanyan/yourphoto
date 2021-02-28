import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Slider extends Component {
    state = {
        imgs: [1,2,3]
    }

    render(){
        return(
<div>
  <ProgressBar variant="success" now={40} />
  <ProgressBar variant="info" now={20} />
  <ProgressBar variant="warning" now={60} />
  <ProgressBar variant="danger" now={80} />
</div>

        )
    }


}

export default Slider