import './Toggle.scss'

const Toggle  = () => {
  return (
    <>
      <input
        type="checkbox"
        className="sr-only"
        id="darkmode-toggle"
      />

      <label htmlFor="darkmode-toggle" className="toggle">
            <span>Toggle dark mode</span>
      </label>
    </>
  )
}

export default Toggle