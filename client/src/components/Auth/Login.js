import React from "react";
import TextInput from "../forms/TextInput";
import Button from "../forms/Button";


export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }
    //use axios once auth & jwt is good to go
    async onSubmit(e){
        e.preventDefault()
        this.setState({emailError: "No acct for this email found"})
        console.log(this.state);
    }
    render(){
        return (

            <section className="dashboard">
                <div className="dashboard__container">

                    <div className="dashboard__header">
                        <h2 className="dashboard__title">Welcome Back, Login to get started</h2>
                    </div>

                    <div className="dashboard__form-container">
                        <form className="auth__container" onSubmit={e => this.onSubmit(e)}>
                            <TextInput
                                label="Email"
                                type="email"
                                placeholder="tom@example.com"
                                error={this.state.emailError}
                                value={this.state.email}
                                onChange={e => this.setState({email: e.target.value})}
                            />
                            <TextInput
                                label="Password"
                                type="password"
                                error={this.state.passwordError}
                                value={this.state.password}
                                onChange={e => this.setState({password: e.target.value})}
                                />
                            <Button path="/dashboard">Login</Button>
                        </form>
                    </div>

                </div>
            </section>
        )
    }
}
