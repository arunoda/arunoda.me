import React from 'react'

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    { children }
    <style jsx>{`
      button {
        background-color: #03A9F4;
        border-radius: 3px;
        border: 2px solid #FFF;
        color: #FFF;
        padding: 5px 10px;
        font-size: 16px;
        cursor: pointer;
      }

      button:hover {
        opacity: 0.7;
      }
    `}</style>
  </button>
)

export default class Question extends React.Component {
  state = {
    givenAnswer: null
  }

  reset () {
    this.setState({
      givenAnswer: null,
      currentAnswer: null
    })
  }

  setAnswer (currentAnswer) {
    this.setState({ currentAnswer })
  }

  submitAnswer () {
    const { currentAnswer } = this.state
    this.setState({
      givenAnswer: currentAnswer,
      currentAnswer: null
    })
  }

  renderQuestions () {
    const { answers } = this.props
    return (
      <div>
        <div className="answers">
          {answers.map((answer) => (
            <div key={answer}>
              <input
                type="radio"
                name="answer"
                value={answer}
                onChange={() => this.setAnswer(answer)}
              />
              <span>{answer}</span>
            </div>
          ))}
        </div>
        <Button onClick={() => this.submitAnswer()}>Submit</Button>
        <style jsx>{`
          .answers {
            margin: 0 0 10px 0;
          }
        `}</style>
      </div>
    )
  }

  renderResult () {
    const { correctAnswer } = this.props
    const { givenAnswer } = this.state
    const isCorrect = correctAnswer === givenAnswer 

    return (
      <div>
        { isCorrect? (
          <div className="correct">Yes. You are correct :)</div>
        ) : (
          <div className="wrong">Unfortunately, you missed this :(</div>
        )}
        <div className="correct-answer">
          <h4>Correct Answer</h4>
          <div>{correctAnswer}</div>
        </div>
        <Button onClick={() => this.reset()}>Answer Again</Button>
        <style jsx>{`
          h4 {
            margin: 10px 0 0 0;
            padding: 0;
            font-size: 18px;
            font-weight: 600;
          }

          .correct-answer {
            margin: 0 0 10px 0;
          }
        `}</style>
      </div>
    )
  }

  render () {
    const { question } = this.props
    const { givenAnswer } = this.state

    return (
      <div className="question">
        <h2>Q: {question}</h2>
        { givenAnswer? this.renderResult() : this.renderQuestions() }
        <style jsx>{`
          .question {
            background-color: #3f51b5;
            padding: 15px;
            color: #FFF;
          }

          h2 {
            margin: 0 0 15px 0;
            padding: 0;
            font-size: 20px;
            font-weight: 400;
          }
        `}</style>
      </div>
    )
  }
}