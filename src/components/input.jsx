import propTypes from "prop-types"

Input.propTypes = {
    passWordSize: propTypes.number.isRequired,
    setPassWordSize: propTypes.func.isRequired
}

export default function Input(props) {
    return (
        <input
            type="Number"
            id="passWordSize"
            min={1}
            value={props.customSize}
            onChange={(ev)=>{
                props.setCustomSize(+ev.target.value) //o set customSize fica no lugar do setPassWordSize do parametro
            }}/>
    )
}