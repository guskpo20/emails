import { useState } from 'react'
import Form  from "./components/Form"


type itemType = {
  content: string;
};


function App() {
  const [item, setItem] = useState<itemType>({content: ""});

  return (
    <div className='text-center bg-blue-600 h-screen w-screen'>
      <h3 className='text-5xl bold pt-10 pb-10'>Text to Emails</h3>
      <div className='flex gap-3 justify-around flex-wrap'>
        <div className='w-1/3 min-h-10 bg-blue-400 h-auto rounded'>
            <h4 className='text-2xl bold pb-10'>Inserte texto</h4>
            <Form item={item} setItem={setItem} />
        </div>
        <div className='pb-10 max-w-1/3 min-h-10 bg-blue-400 rounded min-w-[600px] h-auto'>
          <h4 className='text-2xl bold'>Previsualizacion (seleccione algo para editar)</h4>
        </div>
      </div>
    </div>
  )
}

export default App
