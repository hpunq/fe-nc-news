import './App.css'
import Header from './Header'
import Articles from './Articles'
import ArticlePage from './ArticlePage'
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Articles/>}/>
        <Route path='/articles/:article_id' element={<ArticlePage/>}/>
      </Routes>
    </>
  )
}

export default App
