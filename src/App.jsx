import Header from './header.jsx'
import Sidebar from './sidebar.jsx'
import Content from './content.jsx'

const etudiants = [
  {id:1, nom:"Rania", note:20},
  {id:2, nom:"mimi", note:9},
  {id:3, nom:"toutouss", note:18},
  {id:4, nom:"far", note:10},
  {id:5, nom:"ofppt", note:0}
]
export default function App() {
  return (
    <>
        <Header />
        <div className="flex">
            <Sidebar/>
            <Content etudiants = {etudiants}/>
        </div>
    </>
  )
}

