import ExploreNav from './ExploreNav.tsx'
import SideNavBar from './SideNavBar.tsx'
import TabNav from './TabNav.tsx'

function App() {

  return (
    <>
      <div className="container">
        <ExploreNav/>
        <TabNav/>
        <SideNavBar/>
      </div>
    </>
  )
}

export default App
