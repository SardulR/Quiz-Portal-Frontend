import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router'

import Dashboard from './components/Dashboard'
import Users from './components/Users'
import Addusers from './components/Addusers'
import Questions from './components/Questions'
import Addquestions from './components/Addquestions'

import Login from './components/Login'
import Quiz from './components/Quiz'
import NewQuiz from './components/NewQuiz'
import Quizlanding from './components/Quizlanding'
import Quizinstruction from './components/Quizinstruction'


function App() {
  return (
      <div className = "App">
        <Router>
         
          <Routes>
            <Route path ="/" element={<Dashboard />} />
            <Route path ="/users" element={<Users/>} />
            <Route path ="/users/new" element={<Addusers/>} />
            <Route path ="/questions" element={<Questions/>} />
            <Route path ="/question/new" element={<Addquestions/>} />
            <Route path ="/quiz" element={<Quiz/>} />
            <Route path ="/quiz/new" element={<NewQuiz/>} />
            <Route path ="/login" element={<Login/>} />
             <Route path ="/quizlanding" element={<Quizlanding/>} />
             <Route path ="/quizinstruction" element={<Quizinstruction/>} />
          </Routes>
        </Router>
      </div>
     
  )
}

export default App
