import Calculator from './components/Calculator'
import Title from './components/Title'
import Toggle from './components/Toggle'

function App() {
  const theme = "dark";

  return (
    <html data-theme={theme} >
      <main>

        <Title />
        <Calculator />
        <Toggle />

      </main>
    </html>
  )
}

export default App
