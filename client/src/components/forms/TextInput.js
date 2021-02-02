const TextInput = props => {


    return (
        <div className="text-input">
            <h6 className="text-input__label">{props.label || ""}</h6>
            <input className={`text-input__input${props.error ? " error": ""}`} type={props.type || "text"} placeholder={props.placeholder || ""} value={props.value || ""} onChange={props.onChange}/>
            <p className="text-input__error">{props.error || ""}</p>
        </div>
    )
}



export default TextInput;
