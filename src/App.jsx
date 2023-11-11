import { useState } from "react"

export default function App() {
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")
  const [passWordSize, setPassWordSize] = useState(1)
  let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let specialCaracters = "!@#$%^&*()_+{}[]|;:'<>,.?/";
  let newPassWord = ""

    const buildPassWord = ()=>{
      for (let i = 0; i < passWordSize; i++) {
        const index = Math.floor(Math.random() * caracters.length);
        newPassWord += caracters[index]
      }
      setPassword(newPassWord)
      setCopy("Copiar")
    }

    const handleCopy = ()=> {
      navigator.clipboard.writeText(password)
      setCopy("Copiado")
    }

    const handleSpecialCaracter = () =>{
      for (let i = 0; i < passWordSize / 2; i++) {
        const index = Math.floor(Math.random() * specialCaracters.length);
        newPassWord += specialCaracters[index]
      }
      for (let i = 0; i < passWordSize / 2; i++) {
        const index = Math.floor(Math.random() * caracters.length);
        newPassWord += caracters[index]
      }
      setPassword(newPassWord)
      setCopy("Copiar")
    }

  return(
    <div 
    style={{
      height: "97vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
    >
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passWordSize">Tamanho da senha:</label>
        <input
          type="number" 
          name="passWordSize" 
          id="passWordSize"
          min={1}
          value={passWordSize}
          onChange={(ev)=>{
            setPassWordSize(ev.target.value)
          }}/>
      </div>
      <div
      style={{
        display: "flex",
        gap: "1rem"
      }}
      >
        <button onClick={buildPassWord} 
        style={{
          padding: "0.40rem",
          backgroundColor: "black",
          color: "#fff",
          cursor: "pointer"
        }}
        >Gerar senha</button>
        <button onClick={handleCopy}
        style={{
          padding: "0.40rem",
          backgroundColor: "black",
          color: "#fff",
          cursor: "pointer"
        }}
        >{copy}</button>
        <button onClick={handleSpecialCaracter}
          style={{
            padding: "0.40rem",
            backgroundColor: "black",
            color: "#fff",
            cursor: "pointer"
          }}>
            Gerar Senha com Caracter especial
          </button>
      </div>
      <p>{password}</p>
    </div>
  )
}