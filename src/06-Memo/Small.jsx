import  {memo}  from 'react'

export const Small = memo(({value}) => {

    console.log('Regenerate')

  return (
    <small>{value}</small>
  )
})
