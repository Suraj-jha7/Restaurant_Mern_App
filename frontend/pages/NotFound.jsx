import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight} from 'react-icons/hi'; 'react-icons/hi';

const NotFound = () => {
  return (
    <>
      <section className='notFound'>
        <div className="container">
        <img src="/notFound.svg" alt="notFound" />
        <h1>LOOKS LIKE YOU'RE LOST!</h1>
        <p>we can't seem to find the page you're looking for</p>
        <Link to={'/'}>Back to Home Page<span>{<HiOutlineArrowNarrowRight/>}</span></Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
