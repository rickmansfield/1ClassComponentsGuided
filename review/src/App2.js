import React from 'react';

class App2 extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "Rick",
            age: 54
        }
    }

    handleClick = () => {
        {
            this.setState({
                ...this.state,
                name: "Sara",
                age: 44
            })
        }
    }


    render() {
        const name = "Rick"
        return(
            <div>
                <h1>Hello {this.state.name}.</h1>
                <h1>Hello {this.state.age}.</h1>
                <button onClick={this.handleClick}>Change the name</button>
            </div>
        );
    }

}

export default App2;