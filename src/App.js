import React from 'react';
import ToDoItem from './ToDoItem'

const toggleItemAtIndex = (items, indexToToggle) => {
  const item = items[indexToToggle];
  item.completed = !item.completed;
  return items;
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {items: [
      {description: 'First', completed: true},
      {description: 'Second', completed: false},
      {description: 'Third', completed: true},
      {description: 'Fourth', completed: false},
      {description: 'Fifth', completed: false},
    ]}
  }

// event handler with pure function
  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      let items = prevState.items;
      items = toggleItemAtIndex(items,index);
      return {items}
    })
  }

  render() {
    const items = this.state.items

    return (
      <div className='App'>
        {
          items.map((item, index) => (
            <ToDoItem key={index} description={item.description} completed={item.completed}
            onToggle= {() => this.onToggleItemAtIndex(index)}
            />
          ))
        }
      </div>
    )
  }
}

export default App
