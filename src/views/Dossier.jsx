import React from 'react'

const Dossier = () => {
  return (
    <>
    <div classname='content-dossier'>
        <object
        data={require('../documents/Dosier.pdf')}
        type='application/pdf'
        width='100%'
        height='700px'
        >
        </object>
    </div>
    </>
  )
}

export default Dossier