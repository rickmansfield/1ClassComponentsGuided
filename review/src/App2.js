import React from 'react';

//Functional Component Alternative

// const Person = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Hello {props.name}.</h1>
//             <h1>Hello {props.age}.</h1>
//         </div>
//     )
// };

//Class Component Alternative to do the same thing
class Person extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}.</h1>
                <h1>You are {this.props.age}.</h1>
            </div>
        )
    }
}
class App2 extends React.Component {
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
        return (
            <div>
                <Person name={this.state.name} age={this.state.age} />
                {/* <h1>Hello {this.state.name}.</h1>
                <h1>Hello {this.state.age}.</h1> */}
                <button onClick={this.handleClick}>Change the name</button>
            </div>
        );
    }

}

export default App2;