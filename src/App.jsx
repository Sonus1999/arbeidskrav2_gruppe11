import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import CategoryCard from './components/CategoryCard'
import { resources } from './assets/ressurser'




function App() {

  
  

  return (
    <Layout resources={resources}>
      <Routes>
        <Route>
        <Route path=":slug" element={<CategoryCard resources={resources} />}/>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
