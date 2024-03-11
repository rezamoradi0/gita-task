import TextInput from "./TextInput"

const regexPattern=/^\d+$/;  
function NumberInput(props) {
    return (
       <TextInput regexPattern={regexPattern} {...props}/>
    )
}

export default NumberInput
