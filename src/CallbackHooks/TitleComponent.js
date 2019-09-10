import React from 'react'

function TitleComponent() {
    console.log('Title is rendering...')
    return (
        <div>
          UseCallback hooks  
        </div>
    )
}

export default React.memo(TitleComponent)
