import parse from 'html-react-parser';
import { useEffect } from 'react';

function ItemList(props:{ items: any, defaultEmailValues: any}) {

    const {items, defaultEmailValues} = props

  return (
    <table style={{ color: defaultEmailValues.textColor, fontSize: defaultEmailValues.fontSize, width: defaultEmailValues.emailWidth, background: defaultEmailValues.background }}>
        <tbody>
            {items.map((item:any, index: number) => (
                <tr id={index.toString()}>
                    <td className='w-full bg-blue-50' >
                        {parse(item)}
                    </td>
                </tr>
            ))} 
      </tbody>
    </table>
  )
}

export default ItemList
