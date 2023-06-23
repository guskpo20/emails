import { useState } from 'react'
import Form  from "./components/Form"
import ItemList from './components/ItemList';



function App() {
  const [item, setItem] = useState("");
  const [email, setEmail] = useState("");
  const [showedLinks, setShowedLinks] = useState(false);
  const [showedImages, setShowedImages] = useState(false);
  const [mobileVersion, setMobileVersion] = useState(false);

  const showLinks = (e: any) =>{
    e.preventDefault();
    const fullEmail = document.getElementById("email")

    if(fullEmail){
      const links = fullEmail.querySelectorAll("a")
      if(links){
        if(showedLinks){
          for (let i = 0; i < links.length; i++) {
            if(links[i].getAttribute("href")){
              links[i].style.background  = ""
            }else{
              links[i].style.background  = ""
            }
          }
        }else{
          for (let i = 0; i < links.length; i++) {
            if(links[i].getAttribute("href")){
              links[i].style.background  = "rgb(0,255,0)"
            }else{
              links[i].style.background  = "rgb(255,0,0)"
            }
          }
        }

        setShowedLinks(!showedLinks);
        
      }
    }
    
    
  }

  const showImages = (e: any) =>{
    e.preventDefault();
    const fullEmail = document.getElementById("email")
    if(fullEmail){
      const images = fullEmail.querySelectorAll("img")
      if(images){
        if(showedImages){
          for (let i = 0; i < images.length; i++) {
              images[i].style.border  = "none"
          }
        }else{
          for (let i = 0; i < images.length; i++) {
            if(images[i].hasAttribute("alt")){
              images[i].style.border  = "3px solid green"
            }else{
              images[i].style.border  = "3px solid red"
            }
          }
        }

        setShowedImages(!showedImages);
        
      }
    }
  }

  const mobileChange = (e: any) => {
    e.preventDefault()
    const fullEmail = document.getElementById("email") 
    if(fullEmail){
      const body = fullEmail.getElementsByTagName("body")[0]
      if(body){
        if(mobileVersion){
          body.style.width = "480px !important"
        }else{
          body.style.width = "600px !important"
        }
      }
      setMobileVersion(!mobileVersion);
      }
    }
  

  return (
    <div className='text-center bg-blue-600 h-max w-screen'>
      <h3 className='text-5xl bold pt-10 pb-10'>Emails QA</h3>
      <div className='flex gap-3 justify-around flex-wrap'>
        <div className='min-w-[650px] w-1/3 min-h-10 bg-blue-400 h-auto rounded pt-10 pb-10'>
            
            <h4 className='text-2xl bold pb-5'>Inserte el codigo del Email</h4>
            <Form item={item} setItem={setItem} setEmail={setEmail} />
            <div className='flex justify-center gap-5 py-5'>
              <button className="bg-blue-600 my-5 py-3 px-3 rounded text-white font-bold hover:bg-blue-500" onClick={showLinks}>{showedLinks ? "Ocultar Links!" : "Señalar Links!"}</button>
              <button className="bg-blue-600 my-5 py-3 px-3 rounded text-white font-bold hover:bg-blue-500" onClick={showImages}>{showedImages ? "Ocultar Imagenes!" : "Señalar Imagenes!"}</button>
              <button className="bg-blue-600 my-5 py-3 px-3 rounded text-white font-bold hover:bg-blue-500" onClick={mobileChange}>{mobileVersion ? "Version Desktop!" : "Version Mobile!"}</button>
            </div>
            <div className='px-32'>
              {showedLinks && 
                <p className='text-white font-bold'>Se señalaron todos los links! Si su fondo es verde, tienen HREF. Si no se pintan de rojo</p>
              
              }
              <br></br>
              {showedImages &&
                <p className='text-white font-bold'>Las imagenes se señalan con un borde verde cuando tiene alt. Si no, se pintan de rojo</p>
              }
            </div>
        </div>
        <div className='pb-10 max-w-1/3 min-h-10 bg-white rounded min-w-[650px] h-auto'>
          <ItemList item={item} email={email} />
        </div>
      </div>
    </div>
  )
}

export default App
