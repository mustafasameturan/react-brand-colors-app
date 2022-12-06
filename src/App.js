import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import BrandsData from './brands.json'
import { useEffect } from 'react';
import Copied from './components/Copied';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";import Collection from './components/Collection';

function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')
  
  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  useEffect(() => {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 5000);
      return () => {
        clearTimeout(timeout)
      }
  }, [copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])

  return (
      <>
        <MainContext.Provider value={data}>
          {copied && <Copied color={copied} />}
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path='/' exact={true} element={<Content />} />
              <Route path='/collection/:slugs' element={<Collection />}>
              </Route>
            </Routes>
          </BrowserRouter>
        </MainContext.Provider>
      </>
  );
}

export default App;
