import React from "react";
import TextInput from "../forms/TextInput";
import Button from "../forms/Button";


export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            emailError: "",
            passwordError: ""
        }
    }
    //use axios once auth & jwt is good to go
    async onSubmit(e){
        e.preventDefault()
        if (this.state.password.length<8) {
            this.setState({passwordError: "password must be atleast 8 characters long"})
        }
    }

    render(){
        return (

            <section className="dashboard">
                <div className="dashboard__container">

                    <div className="dashboard__header">
                        <h2 className="dashboard__title">Hello, Create an Account</h2>
                    </div>

                    <div className="dashboard__form-container">
                        <form className="auth__container" onSubmit={e => this.onSubmit(e)}>
                            <TextInput
                                label="Name"
                                type="name"
                                placeholder="Tom Thomas"
                                value={this.state.name}
                                onChange={e => this.setState({name: e.target.value})}
                                />
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
                            <Button path="/onboarding">Signup</Button>
                        </form>
                    </div>

                </div>
            </section>
        )
    }
}
