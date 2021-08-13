import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      incorrectAnswer: false,
    }
  }

  handleClick (buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
    if (this.state.incorrectAnswer === true){
      this.setState((state, props) => {
        return {incorrectAnswer: false};
      });
    } else {
      this.setState((state, props) => {
        return {incorrectAnswer: true};
      });
    }

  }

  // Inside of that ul tag, iterate through each of the quiz_question prop's answer_options by using a map that captures the answer_option and index as local variables.
  render(){
    return(
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => (
              <QuizQuestionButton button_text={answer_option} key={index} clickHandler={this.handleClick.bind(this)} />
            ))}
            {/* <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} /> */}
          </ul>
        </section>
        { this.state.incorrectAnswer ? 
        <p className='error'>Sorry, that's not right</p> : null }
      </main>
    )
  }
}

export default QuizQuestion;