import { useState } from "react"
import Input from "./components/input";

export default function App() {
  const [password, setPassword] = useState("") //estado da senha
  const [copy, setCopy] = useState("Copiar") //estado do botao de copiar
  const [customSize, setCustomSize] = useState(8) // estado do tamanho da senha que por padrão é 8
  const [showInput, setShowInput] = useState(false) // estado de mostrar o input que por padrão é false
  
  const passWordSize = showInput ? customSize : 8 //variável que guarda o valor padrão do tamanho da senha e verifica: se o input estiver true, ele ira mostrar o valor atual do customSize, se não, será 8
  let caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let specialCaracters = "!@#$%^&*()_+{}[]|;:'<>,.?/";
  let newPassWord = "" //criamos uma variável para armazena a nova senha

    const buildPassWord = ()=>{
      for (let i = 0; i < passWordSize; i++) {
        const index = Math.floor(Math.random() * caracters.length);
        newPassWord += caracters[index]
      }
      setPassword(newPassWord) //setamos o valor da senha com o valor da nova senha que obtivemos anteriormente
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
      for (let i = 1; i <= passWordSize / 2; i++) {
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
        <label htmlFor="showInput">Personalizar Tamanho</label>
        <input 
        type="checkbox"
        id="showInput"
        value={showInput} //o valor do input é variado pelo estado do showInput, que por padrão é falso 
        onChange={()=>{
          setShowInput((currentState) => {
            return !currentState //adicionamos uma função para que toda vez que o input for marcado (check) o estado do showInput passa a ser ao contrário do que ele era, uma espécie de toggle (Setamos essa função no próprio setShowInput, para poder mudar o estado do showInput)
          })
        }}
        />
      </div>
      {showInput ? ( //uma operação ternária que ao validar se o show input é true, ele ira renderizar o bloco de código em (), caso não for true, irá ser null, assim, não renderizando nada
      <div>
        <label htmlFor="customSize">Tamanho da senha:</label>
        <Input
          customSize={customSize}
          setCustomSize={setCustomSize} //passando os valores das props do componente
        />
      </div>
      ): null}
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
        }} //Operação ternária para deixar dinâmico o valor do botão, se o showInput for verdadeiro, o botão ira renderizar o valor respectivo do tamnho da senha que está sendo utilizada, se não for true ira renderizar 8
        >Gerar senha de {showInput ? passWordSize : 8}</button> 
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