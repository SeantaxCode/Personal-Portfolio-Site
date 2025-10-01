import ExploreNav from './Components/ExploreNav.tsx'
import SideNavBar from './Components/SideNavBar.tsx'
import TabNav from './Components/TabNav.tsx'
import CodeEditor from './Components/CodeEditor.tsx'
import Terminal from './Components/Terminal.tsx'

function App() {

  return (
    <>
      <div className="container">
        <ExploreNav/>
        <TabNav/>
        <SideNavBar/>
        <CodeEditor/>
        <Terminal/>
      </div>
    </>
  )
}

export default App
