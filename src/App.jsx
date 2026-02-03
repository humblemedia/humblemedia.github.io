import { useState } from 'react'
import SevaKoans from './SevaKoans'
import SevaFinKoans from './SevaFinKoans'

function App() {
  const [view, setView] = useState('romance')
  
  return (
    <div>
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
        <button onClick={() => setView('Seva')}>Seva</button>
        <button onClick={() => setView('SevaFin')}>Seva FIN</button>
      </nav>
      {view === 'Seva' ? <SevaKoans /> : <SevaFinKoans />}
    </div>
  )
}

export default App