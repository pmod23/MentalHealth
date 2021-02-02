import React from 'react';
import survey from '../../data/wellnessSurvey';
import Radio from "../forms/Radio";
import Button from "../forms/Button";


export default class Survey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: survey.map(i => ""),
            current: 0,
            question: survey[0],
            showResults: false,
            allowForward: false
        }
    }

    updateAnswer(e){
        console.log(e.target.value);
        if (!e.target.checked) return;

        const answers = Array.from(this.state.answers)
        answers[this.state.current] = e.target.value;
        this.setState({answers, allowForward: true})

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
        this.setState({current, question, allowForward: x > 0 ? false : true});

    }

    calculateScore() {
        const key = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        let score = 0;
        this.state.answers.forEach(answer => score += (key[answer] ?? 0));
        return score;
    }

    renderResults() {

        return (
            <section className="onboarding">
                <div className="onboarding__container">
                    <h3 className="onboarding__thanks">Thank you for taking your weekly wellness survey.</h3>
                    <h2 className="onboarding__score">You scored <span>{this.calculateScore()}</span>. Most people score between 41 and 59.</h2>
                    <div className="onboarding__conclusion">
                        <Button path="/dashboard">Back to Dashboard</Button>
                    </div>
                </div>
            </section>
        )

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

    render() {
        if (this.state.showResults) return this.renderResults();
        return(
            <section className="onboarding">
                <div className="onboarding__container">
                    <div className="onboarding__question">
                        <h3 className="onboarding__question-title">{this.state.question.question}</h3>
                        {this.renderQuestion()}
                        <div className="onboarding__buttons">
                            {this.state.current ? <Button type="button" onClick={() => this.changeQuestion(-1)}>Previous</Button>: ""}
                            {this.state.allowForward ? <Button type="button" onClick={() => this.changeQuestion(1) }>{this.state.current == survey.length-1 ? "Submit": "Next"}</Button> : ''}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
