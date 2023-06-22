
function Form(props: {setItem: any, item: string, setEmail: any}) {
    const { item, setItem, setEmail} = props

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        setEmail(item)
        setItem("")
    }


    /*
    
    El item tiene que ser un objeto que tenga 2 keys, los styles del td y lo que tiene actualmente
    
    */
  return (
    <form onSubmit={handleSubmit} className="flex-col justify-center align-middle">
      <textarea 
        value={item}
        onChange={e => setItem(e.target.value)}
        className="w-auto px-10" 
        rows={4} cols={40}
        />
        <button className="bg-blue-600 my-5 py-3 px-3 rounded text-white font-bold hover:bg-blue-500">Agregar!</button>
    </form>
  )
}

export default Form
