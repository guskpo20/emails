import { useEffect, useState } from 'react'
import Form  from "./components/Form"
import EmailValues from './components/EmailValues';
import ItemList from './components/ItemList';



function App() {
  const [defaultEmailValues, setDefaultEmailValues] = useState({})
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    return () => {
      console.log(items)
    };
  }, [items])

  return (
    <div className='text-center bg-blue-600 h-screen w-screen'>
      <h3 className='text-5xl bold pt-10 pb-10'>Text to Emails</h3>
      <div className='flex gap-3 justify-around flex-wrap'>
        <div className='w-1/3 min-h-10 bg-blue-400 h-auto rounded pt-10'>
            <EmailValues setDefaultEmailValues={setDefaultEmailValues} />
            <h3 className='py-10'>Aca iria un form para los estilos del td</h3>
            
            <h4 className='text-2xl bold'>Inserte texto del TD</h4>
            <Form item={item} setItem={setItem} items={items} setItems={setItems} />
        </div>
        <div className='pb-10 max-w-1/3 min-h-10 bg-blue-400 rounded min-w-[650px] h-auto'>
          <ItemList defaultEmailValues={defaultEmailValues} items={items} />
        </div>
      </div>
    </div>
  )
}

export default App
