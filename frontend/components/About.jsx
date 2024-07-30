import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className='mid'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius velit cum saepe cupiditate pariatur soluta dignissimos minima deleniti eos magni, eum aliquid non optio quae. A, minus quod iusto, eligendi accusantium repudiandae veniam nobis, facere velit corporis laboriosam? Eveniet porro est nulla accusamus corporis reprehenderit possimus ipsa veritatis tenetur!</p>
          <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  )
}

export default About;
