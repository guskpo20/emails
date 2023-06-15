import {useState} from "react"


function EmailValues(props:{setDefaultEmailValues: any}) {
    const {setDefaultEmailValues} = props
    
    const [emailWidth, setEmailWidth] = useState("")
    const [fontSize, setFontSize] = useState("")
    const [textColor, setTextcolor] = useState("")
    const [background, setBackground] = useState("")

    const handleSubmit = (e: any) =>{
        e.preventDefault();
        setDefaultEmailValues({
            emailWidth : emailWidth || "600",
            fontSize: fontSize || "14" ,
            textColor: textColor ||"#000000" ,
            background: background || "#ffffff"
        })
        console.log(e.target)
    }


    return (

    
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Valores generales del email</h5>
        <br />
        <label>
            Ancho del email (pixeles): 
            <input 
                value={emailWidth} 
                onChange={(e) => setEmailWidth(e.target.value)}
                placeholder="600"
                type="number" />
        </label>
        <br />
        <br />
        <label>
            Tamaño del texto (pixeles): 
            <input 
                value={fontSize} 
                onChange={(e) => setFontSize(e.target.value)}
                placeholder="14"
                type="number" />
        </label>
        <br />
        <br />
        <label>
            Color del texto 
            <input 
                value={textColor} 
                onChange={(e) => setTextcolor(e.target.value)}
                type="string" placeholder="#000000"/>
        </label>
        <br />
        <br />
        <label>
            Color de fondo 
            <input 
                value={background} 
                onChange={(e) => setBackground(e.target.value)}
                type="string" placeholder="#ffffff"/>
        </label>
        <br />
        <button className="bg-blue-600 my-5 py-3 px-3 rounded text-white font-bold hover:bg-blue-500">Cambiar!</button>
      </form>
    </div>
  )
}

export default EmailValues
