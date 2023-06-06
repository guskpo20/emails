type newItem = {
    content: string;
};

function Form(props: {setItem: any, item: newItem}) {
    const { item, setItem} = props

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        console.log("hola")
        //setItem = .....
    }
  return (
    <form onSubmit={handleSubmit} className="flex-col justify-center">
      <textarea 
        value={item.content} 
        onChange={setItem} 
        rows={5}
        className="w-auto px-10" />
        <button className="bg-blue-600 my-5 py-3 px-3 rounded text-white font-bold hover:bg-blue-500">Confirmar!</button>
    </form>
  )
}

export default Form
