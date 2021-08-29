import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      groceries:groceries
    }
  }

addItem = name =>{
  //do state stuff here
  // console.log("App: ", name);
  const newItem = {
    name: name,
    id: Date.now(),
    purchased: false
  }
  this.setState({
    ...this.state,
    groceries: [...this.state.groceries, newItem]
  });
} //returns existing groceries plus new item. 

clearPurchased = () => {
  this.setState({
    ...this.setState,
    groceries: this.state.groceries.filter(items => {
      return items.purchased === false
    })
  })

}//returns the list less the purchased items
//or all the items with purchased === false

// Class methods to update state
toggleItem = id => {
  console.log("App:", id);
  //set state for groceries with id's purchased flipped
  this.setState({
    ...this.state.groceries,
    groceries: this.state.groceries.map(item =>{
      if (item.id === id){
        return({
          ...item,
          //purchased item.purchased ? false : true
          purchased: !item.purchased// this does the same thing. 
        })
      } else {
        return item
      }
    })
  })
}

render() {
  console.log("this.state.groceries index.js",this.state.groceries);
  return (
    <div className="App">
      <div className="header">
        <h1>Shopping List</h1>
        <ListForm addItem={this.addItem}/>
      </div>
      <GroceryList clearPurchased={this.clearPurchased}toggleItem={this.toggleItem} groceries={this.state.groceries} />
    </div>
  );
}
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);