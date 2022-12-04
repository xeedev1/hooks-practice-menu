import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// new Set() gives us back unique values
// ['all', unique categories returned]
const newCategories = ['all', ...new Set(items.map(item=>item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);

  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  // filterItems(breakfast) returns an array of items having breakfast as a category
  // setMenuItems is setting the current state to the breakfast items
  // we can pass functions as a prop

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>
}

export default App;
