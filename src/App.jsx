import { useState } from "react"

export default function App() {
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")
  let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let newPassWord = ""

    const buildPassWord = ()=>{
      for (let i = 0; i < 8; i++) {
        const index = Math.floor(Math.random() * caracters.length);
        newPassWord += caracters.charAt(index)
      }
      setPassword(newPassWord)
      setCopy("Copiar")
    }

    const handleCopy = ()=> {
      navigator.clipboard.writeText(password)
      setCopy("Copiado")
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
      </div>
      <p>{password}</p>
    </div>
  )
}