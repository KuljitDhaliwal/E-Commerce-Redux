import React from 'react'
function FilterCheckbox({value, handle, checkRef}) {

  return (
    <div className='flex'>
        <input type="checkbox" onClick={()=> handle(value)} ref={checkRef}/>
        <p className='ml-5'>{value}</p>
    </div>
  )
}

export default FilterCheckbox