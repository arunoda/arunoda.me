/* global alert */
import React, { useState } from 'react'
import * as gtag from '~/lib/gtag'
import Router from 'next/router'

export default function Question (props) {
  const { question, correctAnswer, answers, explaination } = props
  const [showAll, setShowAll] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [givenAnswer, setGivenAnswer] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [retrying, setRetrying] = useState(false)

  function getGivenAnswer() {
    if (retrying) {
      return null
    }

    return givenAnswer
  }

  function getShowAll() {
    if (retrying) {
      return true;
    }

    return showAll
  }

  function isCorrect() {
    if (typeof(correctAnswer) !== 'number') {
      return false;
    }

    if (getGivenAnswer() !== null) {
      return correctAnswer === getGivenAnswer();
    }

    if (selectedAnswer !== null) {
      return correctAnswer === selectedAnswer;
    }

    return false;
  }

  function getBackgroundColor () {
    if (getGivenAnswer() === null) {
      return '#3f51b5'
    }

    if (typeof(correctAnswer) !== 'number') {
      return '#ce8210'
    }

    return isCorrect() ? '#539803' : '#ca0c0c'
  }

  function getPoints () {
    if (typeof(correctAnswer) !== 'number') {
      return props.points || 5;
    }

    return isCorrect()? props.points : 5
  }

  async function handleClickToAnswer() {
    setShowAll(true);
    gtag.event({
      action: 'click_to_answer',
      category: 'questions',
      label: props.id,
      value: 0
    });
  }

  async function handleSubmitAnswer () {
    if (selectedAnswer === null) {
      alert('Select an answer.')
      return
    }

    setGivenAnswer(selectedAnswer)
    setSelectedAnswer(null)
    setRetrying(false)

    gtag.event({
      action: 'submit_answer',
      category: 'questions',
      label: props.id,
      value: 0
    });
  }

  async function handleRetry(e) {
    e.preventDefault();
    setRetrying(true);

    gtag.event({
      action: 'retry',
      category: 'questions',
      label: props.id,
      value: 0
    });
  }

  function handleSavePoints(e) {
    e.preventDefault();
    Router.push('/points')

    gtag.event({
      action: 'click_save_points',
      category: 'questions',
      label: props.id,
      value: 0
    });
  }

  function renderPointsBar () {
    return (
      <div>
        <span className="points-status">
          Earned {getPoints()}/{props.points} points.
        </span>
        <span>-</span>
        <a href="/" className="retry" onClick={handleRetry}>
          Retry
        </a>
        <style jsx>{`
          div {
            font-size: 10px;
            text-transform: uppercase;
          }

          .sign-in {
            margin: 0 5px;
          }

          .retry {
            margin-left: 5px;
          }
        `}</style>
      </div>
    )
  }

  function renderExplanation () {
    return (
      <div className='explanation'>
        {explaination}
        <style jsx>{`
          .explanation {
            font-size: 15px;
            padding: 15px 20px;
            line-height: 22px;
          }

          .explanation :global(ul),
          .explanation :global(.p), {
            margin: 10px 0;
          }

          .explanation :global(.note) {
            margin: 15px 0;
          }

          .explanation :global(.p:first-child) {
            margin-top: 0;
          }
          
          .explanation :global(.p:last-child) {
            margin-bottom: 0;
          }

          .explanation :global(li) {
            margin: 8px 0;
          }

          .explanation :global(.code),
          .explanation :global(pre) {
            margin: 0;
          }
        `}
        </style>
      </div>
    )
  }

  function renderResultCopy () {
    if (typeof(correctAnswer) !== 'number') {
      return (
        <>
          <b>! There is no right or wrong answer.</b>
        </>
      )
    }

    if (isCorrect()) {
      return (
        <>
          <b>✓ Your Answer</b>: <span className='answer'>{answers[correctAnswer]}</span>
        </>
      )
    }

    return (
      <>
        <b>✕ Correct Answer</b>: <span className='answer'>{answers[correctAnswer]}</span>
      </>
    )
  }

  function renderResult () {
    return (
      <div className='result-box'>
        <div className='correct-answer'>
          {renderResultCopy()}
        </div>
        <style jsx>{`
          .result-box {
            margin: 5px 0 0 0;
            font-size: 15px;
            line-height: 20px;
          }

          h4 {
            margin: 10px 0 0 0;
            padding: 0;
            font-size: 18px;
            font-weight: 600;
          }

          .correct-answer :global(.answer) {
            padding-bottom: 3px;
            border-bottom: 1px solid #FFF;
            line-height: 25px;
          }

          .correct-answer {
            margin: 0 0 0 0;
          }

          .correct-answer h4 {
            font-size: 15px;
            margin: 0;
          }
        `}
        </style>
      </div>
    )
  }

  function renderDetails () {
    return getGivenAnswer() === null ? renderQuestions() : renderResult()
  }

  function renderSubmitButton () {
    return (
      <button
        onClick={() => handleSubmitAnswer()}
        disabled={submitting}
      >
        {submitting? 'Checking ...' : 'Submit'}
        <style jsx>{`
          button {
            background-color: #FFF;
            color: #D84315;
            padding: 5px 20px;
            font-size: 14px;
            cursor: pointer;
            border: 0;
            font-weight: bold;
          }
    
          button:hover {
            opacity: 0.7;
          }
        `}
        </style>
      </button>
    )
  }

  function renderQuestions () {
    return (
      <div className='answer-box'>
        <div className='answers'>
          {answers.map((answer, index) => (
            <div className='answer' key={answer}>
              <input
                id={`${props.id}-radio-answer-${index}`}
                type='radio'
                name={`answer-${props.id}`}
                value={index}
                onChange={() => setSelectedAnswer(index)}
              />
              <label htmlFor={`${props.id}-radio-answer-${index}`} className='text'>{answer}</label>
              <div className='clearfix' />
            </div>
          ))}
        </div>
        {renderSubmitButton()}
        <style jsx>{`
          .answer {
            position: relative;
            font-size: 15px;
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
        `}
        </style>
      </div>
    )
  }

  function renderClickToAnswer () {
    return (
      <div onClick={handleClickToAnswer}>
          ( Click to answer )
        <style jsx>{`
            div {
              cursor: pointer;
              font-size: 12px;
            }
          `}
        </style>
      </div>
    )
  }

  const backgroundColor = getBackgroundColor()

  return (
    <div className='container'>
      <div className='question-box'>
        <div className='question'>Q: {question}</div>
        {getShowAll() ? renderDetails() : renderClickToAnswer()}
      </div>
      {getGivenAnswer() !== null ? (
        <div className="points-bar">
          {renderPointsBar()}
        </div>
      ) : null}
      {explaination && getGivenAnswer() !== null ? renderExplanation() : null}
      <style jsx>{`
        .container {
          margin: 30px 0;
          border: 1px solid ${backgroundColor};
        }

        .points-bar {
          padding: 0px 20px;
          border-bottom: 1px solid #eee;
        }

        .question-box {
          background-color: ${backgroundColor};
          padding: 15px 20px;
          color: #FFF;
        }

        .question {
          font-size: 16px;
          font-weight: 400;
        }
      `}
      </style>
    </div>
  )
}
