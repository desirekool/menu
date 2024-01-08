import { useEffect, useState } from 'react';
import data from './data';
import Title from './components/Title';
import MenuItem from './components/MenuItem';
import MenuCategories from './components/MenuCategories';
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [menuCategories, setMenuCategories] = useState(allCategories);
  
  /* const getUniqueCategories = (menuData) => {
    const categoryList = [];
    menuData.map(menuItem => {
      if (categoryList.indexOf(menuItem.category) === -1)
        categoryList.push(menuItem.category)
    })
    return categoryList;
  }   
  useEffect(() => {
    setMenuCategories([...menuCategories, ...getUniqueCategories(data)]);    
  }, []);  */

    const filterMenu = (category) => {
    if (category === 'all') {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === category);
    setMenu(newMenu);
  };

  return (
    <main>
      <Title titleText={`Our Menu`} />
      <MenuCategories categories={menuCategories} setCategory={filterMenu} />
      <ul className='section-center'>
        {menu.map(menuItem => <MenuItem {...menuItem} key={menuItem.id} />)}
      </ul>
        
    </main>
  );
};
export default App;
