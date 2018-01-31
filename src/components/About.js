import React from 'react';

const About = (props) => {

  return(
    <div className="about" style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
      <div className="about-text">
        <img style={{"border-radius": "3px"}} src="https://78.media.tumblr.com/9c1c09d2585f251f15b61771dd28b49b/tumblr_p3e5juat4E1u86ylfo1_400.jpg" alt="portrait" />
      </div>
      <div className="about-text">
        I’ve done a lot of things in my short professional career. <br/><br/>After graduating from the University of Massachusetts Amherst in 2014, I moved to New York and worked in the crazy, yet rewarding, world of sales at Yelp. I then followed a dream of working in the fashion industry to Tory Burch where I was deeply involved in both the design and sales processes as a women’s footwear merchandiser. I then indulged my wanderlust and taught English in elementary schools in the South of France.<br/><br/> It’s a pretty diverse background, sure, but what drove me has never changed. <strong>I love creating. I love learning. I love a good challenge.</strong> So here I am now, a recent graduate of the Flatiron School immersive web development program and a professional computer programmer.<br /><br />-Brian
      </div>
    </div>
  )
}

export default About;
