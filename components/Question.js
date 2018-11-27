/* global alert */
import React from 'react'

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>
    { children }
    <style jsx>{`
      button {
        background-color: #D84315;
        border-radius: 3px;
        border: 2px solid #FFF;
        color: #FFF;
        padding: 5px 20px;
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
    givenAnswer: null,
    showAll: false
  }

  reset () {
    this.setState({
      showAll: false,
      givenAnswer: null,
      currentAnswer: null
    })
  }

  showAll (action = true) {
    this.setState({
      showAll: action
    })
  }

  setAnswer (currentAnswer) {
    this.setState({ currentAnswer })
  }

  submitAnswer () {
    const { currentAnswer } = this.state
    if (!currentAnswer) {
      alert('Select an answer.')
      return
    }

    this.setState({
      givenAnswer: currentAnswer,
      currentAnswer: null
    })
  }

  renderQuestions () {
    const { answers } = this.props
    return (
      <div className='answer-box'>
        <div className='answers'>
          {answers.map((answer) => (
            <div className='answer' key={answer}>
              <input
                type='radio'
                name='answer'
                value={answer}
                onChange={() => this.setAnswer(answer)}
              />
              <div className='text'>{answer}</div>
              <div className='clearfix' />
            </div>
          ))}
        </div>
        <Button onClick={() => this.submitAnswer()}>Submit</Button>
        <style jsx>{`
          .answer {
            position: relative;
          }

          .answer input {
            position: absolute;
            left: 0;
            top: 5px;
          }

          .answer .text {
            margin-left: 25px;
          }

          .clearfix {
            clear: both;
          }

          .answer-box {
            margin: 15px 0 0 0;
          }

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
      <div className='result-box'>
        { isCorrect ? (
          <div className='correct'>Yes. You are correct :)</div>
        ) : (
          <div className='wrong'>Unfortunately, you missed this :(</div>
        )}
        <div className='correct-answer'>
          <h4>Correct Answer</h4>
          <div>{correctAnswer}</div>
        </div>
        <div className='reset' onClick={() => this.reset()}>( Click here to reset )</div>
        <style jsx>{`
          .result-box {
            margin: 15px 0 0 0;
          }

          h4 {
            margin: 10px 0 0 0;
            padding: 0;
            font-size: 18px;
            font-weight: 600;
          }

          .reset {
            cursor: pointer;
            font-size: 12px;
          }

          .correct-answer {
            margin: 0 0 10px 0;
          }
        `}</style>
      </div>
    )
  }

  renderDetails () {
    const { givenAnswer } = this.state
    return givenAnswer ? this.renderResult() : this.renderQuestions()
  }

  showClickToAnswer () {
    return (
      <div onClick={() => this.showAll()}>
        ( Click here to answer )
        <style jsx>{`
          div {
            cursor: pointer;
            font-size: 12px;
          }
        `}</style>
      </div>
    )
  }

  render () {
    const { question } = this.props
    const { showAll } = this.state

    return (
      <div className='question-box'>
        <div className='question'>Q: {question}</div>
        { showAll ? this.renderDetails() : this.showClickToAnswer() }
        <style jsx>{`
          .question-box {
            background-color: #3f51b5;
            padding: 15px 15px;
            color: #FFF;
          }

          .question {
            font-size: 20px;
            font-weight: 400;
          }
        `}</style>
      </div>
    )
  }
}
