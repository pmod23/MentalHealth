const Radio = props => {

    return(
        <label className="radio">
            <input type="radio" name={"rb-" + props.num} value={props.value} onChange={props.onChange}/>
            <div className="radio__button">
                <h4 className="radio__text">{props.children || props.text}</h4>
            </div>
        </label>
    )

}

    export default Radio;
