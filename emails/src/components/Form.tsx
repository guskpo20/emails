
function Form(props: {setItem: any, item: string, setEmail: any}) {
    const { item, setItem, setEmail} = props

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        setEmail(item)
        setItem("")
    }


  return (
    <form onSubmit={handleSubmit} className="flex-col justify-center align-middle">
      <textarea 
        value={item}
        onChange={e => setItem(e.target.value)}
        className="w-auto px-10" 
        rows={30} cols={70}
        />
        <br></br>
        <button className="bg-black text-white my-5 py-3 px-3 rounded font-bold hover:bg-white hover:text-black">Agregar!</button>
    </form>
  )
}

export default Form
