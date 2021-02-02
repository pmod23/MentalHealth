import React from 'react';
import survey from "../../data/survey"
import Radio from "../forms/Radio";
import Button from "../forms/Button";



export default class Onboarding extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answers: survey.map(i => ""),
            current: 0,
            question: survey[0],
            showResults: false
        }
    }

    updateAnswer(e){
        console.log(e.target.value);
        if (!e.target.checked) return;

        const answers = Array.from(this.state.answers)
        answers[this.state.current] = e.target.value;
        this.setState({answers})

    }
    completeSurvey(){
        this.setState({ showResults: true });
    }
    changeQuestion(x){
        if (this.state.current == survey.length-1 && x > 0){
            return this.completeSurvey()
        }
        const current = this.state.current + x;
        const question = survey[current]
        this.setState({current, question})

    }

    renderQuestion(){
        if (this.state.question.type === "multiple-choice"){

            return (
                <div className="onboarding__question-choices">{this.state.question.choices.map(choice => (
                    <Radio value={choice.key} num={this.state.current} key={choice.key +this.state.current} onChange={e => this.updateAnswer(e)} >{choice.text}</Radio>

                ))}</div>
            )
        }
        else {
            return(
                <div className="onboarding__question-choices">
                    <Radio value="yes" num={this.state.current} onChange={e => this.updateAnswer(e)} >Yes</Radio>
                    <Radio value="no" num={this.state.current} onChange={e => this.updateAnswer(e)} >No</Radio>
                </div>
            )
        }
    }

    renderQuestionData(question, index) {

        if (question.type === 'yes-no') return (
            <div className="onboarding__data">
                <p className="onboarding__answered">{question.data.answered} of 352 responses.</p>
                <div className={`onboarding__data-option${this.state.answers[index].toLowerCase() === 'yes' ? ' picked' : ''}`}>
                    <span style={{width: `${question.data.breakdown.yes}%`}}></span>
                    <h4>Yes: {question.data.breakdown.yes}%</h4>
                </div>
                <div className={`onboarding__data-option${this.state.answers[index].toLowerCase() === 'no' ? ' picked' : ''}`}>
                    <span style={{width: `${question.data.breakdown.no}%`}}></span>
                    <h4>No: {question.data.breakdown.no}%</h4>
                </div>
            </div>
        );

        else return (
            <div className="onboarding__data">
                <p className="onboarding__answered">{question.data.answered} of 352 responses.</p>
                {question.choices.map(choice => (
                    <div className={`onboarding__data-option${this.state.answers[index].toLowerCase() === choice.key.toLowerCase() ? ' picked' : ''}`} key={choice.key}>
                        <span style={{width: `${question.data.breakdown[choice.key]}%`}}></span>
                        <h4>{choice.text}: {question.data.breakdown[choice.key]}%</h4>
                    </div>
                ))}

            </div>
        )


    }

    renderResults() {

        return (
            <section className="onboarding">
                <div className="onboarding__container">
                    {survey.map((q, i) => (
                        <div className="onboarding__question" key={i}>
                            <h3 className="onboarding__question-title">{q.question}</h3>
                            {this.renderQuestionData(q, i)}
                        </div>
                    ))}
                    <div className="onboarding__conclusion">
                        <Button path="/dashboard">Finished</Button>
                    </div>
                </div>
            </section>
        )

    }

    render(){
        if (this.state.showResults) return this.renderResults();
        return(
            <section className="onboarding">
                <div className="onboarding__container">
                    <div className="onboarding__question">
                        <h3 className="onboarding__question-title">{this.state.question.question}</h3>
                        {this.renderQuestion()}
                        <div className="onboarding__buttons">
                            {this.state.current ? <Button type="button" onClick={() => this.changeQuestion(-1)}>Previous</Button>: ""}
                            <Button type="button" onClick={() => this.changeQuestion(1) }>{this.state.current == survey.length-1 ? "Submit": "Next"}</Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
