import parse from 'html-react-parser';
import { useEffect } from 'react';

function ItemList(props:{ item: any, email: any}) {

    const {item, email} = props

  return (
    <div id="email">
      {parse(email)}
    </div>
  )
}

export default ItemList
