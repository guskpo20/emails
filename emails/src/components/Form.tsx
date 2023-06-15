
function Form(props: {setItem: any, item: string, items: any, setItems: any}) {
    const { item, setItem, items, setItems} = props

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        setItems([...items, item]);
        setItem("")
    }
  return (
    <form onSubmit={handleSubmit} className="flex-col justify-center">
      <textarea 
        value={item}
        onChange={e => setItem(e.target.value)}
        className="w-auto px-10" />
        <button className="bg-blue-600 my-5 py-3 px-3 rounded text-white font-bold hover:bg-blue-500">Agregar!</button>
    </form>
  )
}

export default Form
