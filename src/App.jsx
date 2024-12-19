import './App.css'
import Header from './Header'
import Articles from './Articles'
import ArticlePage from './ArticlePage'
import Scroll from './Scroll'
import {Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react'
import { Spinner } from '@fluentui/react-components'


function App() {
  const [isLoading, setIsLoading] = useState(true)
 
  useEffect (() => {
    setIsLoading(false)
  })

  if (isLoading) return <Spinner appearance='inverted'/>;

 else return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <Articles/>}/>
        <Route path='/articles/:article_id' element={<ArticlePage/>}/>
      </Routes>
      <Scroll/>
    </>
  )
}

export default App
