import './Title.scss'

function Title() {
  return (
    <>
      <section className="title-container">
        <div className="title-wrapper">
          <h1 className="sweet-title">
            <span data-text="calc-ui">calc-ui</span>
          </h1>
          <h3 className="subtitle">Just another calculator but **fancy**</h3>
        </div>
      </section>
    </>
  )
}

export default Title
