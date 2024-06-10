import React from 'react';
import logo from './logo.svg';
import item1P from './images/item1.png'
import item2P from './images/item2.png'
import item3P from './images/item3.png'
import './Advice.css';
import { AdviceType } from './adviceType';

const advices: Array<AdviceType> = [
  {
    image: item1P,
    title: 'Frauds or Mislead',
    description: ['-  The best products start with Figma',
    '-  Design with real data',
    '-  Lightning fast prototyping',
    '-  Fastest way to organize',
    '-  Work at the speed of thought.']
  },
  {
    image: item2P,
    title: 'Bailes & Warrants',
    description: ['-  The best products start with Figma',
    '-  Design with real data',
    '-  Lightning fast prototyping',
    '-  Fastest way to organize',
    '-  Work at the speed of thought.']
  },
  {
    image: item3P,
    title: 'Federal Drug Crimes',
    description: ['-  The best products start with Figma',
    '-  Design with real data',
    '-  Lightning fast prototyping',
    '-  Fastest way to organize',
    '-  Work at the speed of thought.']
  }
]

function Advice() {
  return (

      <div id="Advice" className="Advice">
        <div className="header">
          <p className='title'>Practice Advice</p>

          <p className='subtitle'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>

        <div className="advice-grid">
          {advices.map((advice: AdviceType) =>(
            <div className="advice-item">

              <div className="item-head">
                <img src={advice.image}></img>
                <p className='item-title'>{advice.title}</p>
              </div>
              <div className="item-foot">
                  <ul className='item-list'>
                  {advice.description.map((desc) => (
                    <li>{desc}</li>
                  ))}
                  <a>Learn More</a>
                </ul>
              </div>

            </div>
          ))}

          
        </div>


      </div>
  );
}

export default Advice;
