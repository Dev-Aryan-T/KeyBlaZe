import React from 'react';
import './first.css';

export default function First() {
  return (
    <>
      <div id="testConfig" className="full-width">
    <div className="row">
      <div className="puncAndNum">
        <button className="textButton punctuationMode">
          <i className="fas fa-fw fa-at"></i>
          <a href="#home">punctuation</a>
        </button>
        <button className="textButton numbersMode">
          <i className="fas fa-fw fa-hashtag"></i>
         <a href="#num"> numbers</a>
        </button>
      </div>

      <div className="spacer leftSpacer"></div>

      <div className="mode">
        <button className="textButton active" mode="time">
          <i className="fas fa-fw fa-clock"></i>
          <a  href="#time">time</a>
        </button>
        <button className="textButton" mode="words">
          <i className="fas fa-fw fa-font"></i>
          <a href="#words">words</a>
        </button>
        <button className="textButton" mode="quote">
          <i className="fas fa-fe fa-quote-left"></i>
          <a  href="#quote">quote</a>
        </button>
        <button className="textButton" mode="zen">
          <i className="fas fa-fw fa-mountain"></i>
          <a href="#zen">zen</a>
        </button>
        <button className="textButton" mode="custom">
          <i className="fas fa-fw fa-wrench"></i>
          <a href="#custom">custom</a>
        </button>
      </div>

      <div className="spacer rightSpacer"></div>

      <div className="time">
        <button className="textButton" timeconfig="15"><a href="#15"><span>15</span></a></button>
        <button className="textButton active" timeconfig="30"><a href="#30"><span>30</span></a></button>
        <button className="textButton" timeconfig="60"><a href="#60"><span>60</span></a></button>
        <button className="textButton" timeconfig="120"><a href="#120"><span>120</span></a></button>
        <button className="textButton" timeconfig="custom">
          <i className="fas fa-fw fa-tools"></i>
        </button>
      </div>
</div>
  </div>
    </>
  )
}
