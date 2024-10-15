import React from 'react'
import './Uploadmenus.css'

const Uploadmenus = () => {
  return (
    <div>
      <div className="uploadmenu-container">
        <div className="uploadmenu-header">
          <p className='uploadmenu-header-heading'>Menu Upload(optional)</p>
          <button className='uploadmenu-header-button'>Next</button>
        </div>
        <div className="uploadmenu-question">
          <p className='uploadmenu-question-heading'>Do you want us to insert your menu?</p>
          <div className="uploadmenu-question-choice">
            <p className='uploadmenu-question-yes'>Yes</p>
            <p className='uploadmenu-question-no'>No</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uploadmenus
