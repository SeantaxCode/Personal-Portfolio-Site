import ExploreNav from './ExploreNav.tsx'
import SideNavBar from './SideNavBar.tsx'
import TabNav from './TabNav.tsx'
import CodeEditor from './CodeEditor.tsx'
import Terminal from './Terminal.tsx'

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
