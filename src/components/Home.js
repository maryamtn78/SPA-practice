import React, { Component } from 'react';

class Home extends Component {


    submit = ()=>{
        this.props.history.replace('/welcomePage')
    }

    render() {
        return (
            <div>
                <h1>home</h1>
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

export default Home;