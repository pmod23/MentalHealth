import { Link } from "react-router-dom";

const Button = props => {

    const cssClasses = props.styles ? `btn ${props.styles}` : 'btn';

    if (props.onClick) return <button className={cssClasses} type={props.type || "submit"} onClick={props.onClick}>{props.children}</button>;

    else if (props.path) return (
        <span className={cssClasses}><Link to={props.path}>{props.children}</Link></span>
    )

    else return <button className={cssClasses} type={props.type || "submit"}>{props.children}</button>
}


export default Button;
