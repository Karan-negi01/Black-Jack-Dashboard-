import React from 'react';
import './Uploadmenus.css'
import Form from 'react-bootstrap/Form';



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
        <div className="uploadmenu-files">
          <p className='uploadmenu-files-heading'>Upload your menu and let us do all the work!!!</p>
          <div className='uploadmenu-form'>

            <Form.Group controlId="formFileLg" className="mb-3 custom-form-group">
             
              <Form.Control type="file" size="lg" />
            </Form.Group>
            <button className='uploadmenu-file-buton' type="submit">Upload File</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uploadmenus
