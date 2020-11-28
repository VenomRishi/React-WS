import React, { Component } from 'react';
import './VerifyStyle.scss';
import  {Button} from '@material-ui/core';
// import axios from 'axios';

export class Verify extends Component {
    handleVerifyClick = () => {

    }
    render() {
        return (
            <div className='container'>
                <div className='verify-container'>
                    <Button varient='contained' color='primary' onClick={this.handleVerifyClick}>
                        Verify Account
                    </Button>
                </div>
            </div>
        )
    }
}

export default Verify
