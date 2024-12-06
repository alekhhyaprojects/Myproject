import React, { useRef } from 'react';
import './Pagescontainer.css';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Pages = () => {
  const slider = useRef();
  let tx = 0;

  const handleNextClick = () => {
    if (tx > -50) {
      tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`; // Removed the semicolon
  };

  const handlePreviousClick = () => {
    if (tx < 50) {
      tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`; // Removed the semicolon
  };

  return (
    <div className='pages'>
      <GrFormNextLink className='previous-icon' onClick={handlePreviousClick} />
      <GrFormPreviousLink className='next-icon' onClick={handleNextClick} />
      <div className='pagerow'>
        <ul ref={slider}>
          <li>
            <div className='page'>
              <div className='user-info'>
                <img
                  src='https://th.bing.com/th/id/OIP.-gIa8O1emZ9LOoFV9hPMFgHaF7?pid=ImgDet&w=159&h=127&c=7'
                  alt=''
                  className='img'
                />
                <div>
                  <h3>International Virology Summit 2024 November 25-26,</h3>
                  <span>2024 Paris, France</span>
                </div>
              </div>
              <div className='pages-btn'>
                <Link to="/virologysummit"><button className='btn'>Visit page</button></Link>
              </div>
            </div>
          </li>
          <li>
            <div className='page'>
              <div className='user-info'>
                <img
                  src='https://www.microbiomeinstitute.com.au/wp-content/uploads/elementor/thumbs/3d-medical-background-with-dna-strands-virus-cells-1-1-q602f61rl29uxt9ted9pxi537zxy5oeqbtqgwj7r7s.jpeg'
                  alt=''
                  className='img'
                />
                <div>
                  <h3 className='text'>
                    International Emerging Viral Diseases Conferences November
                    25-26,
                  </h3>
                  <span>2024 Paris, France</span>
                </div>
              </div>
              <div className='pages-btn'>
                <Link to="/Emerging"><button className='btn'>Visit page</button></Link>
              </div>
            </div>
          </li>
          <li>
            <div className='page'>
              <div className='user-info'>
                <img
                  src='https://img.freepik.com/premium-photo/virus-flu-bacteria-closeup_161299-137.jpg'
                  alt=''
                  className='img'
                />
                <div>
                  <h3 className='text'>Virology Infectious Disease Conference- 2025</h3>
                  <span>July 07-08, 2025 Zurich, Switzerland</span>
                </div>
              </div>
              <div className='pages-btn'>
              <Link to="/Virologyinfectious"><button className='btn' >Visit page</button></Link>
              </div>
            </div>
          </li>
          <li>
            <div className='page'>
              <div className='user-info'>
                <img
                  src='https://www.isaps.org/media/3wsdzguj/adobestock_130277597.jpg?width=720&height=720&rnd=133064175046800000'
                  alt=''
                  className='img'
                />
                <div>
                  <h3>World Virology and Vaccine Development Forum- 2025</h3>
                  <span>November 24-25, 2025 Paris, France</span>
                </div>
              </div>
              <div className='pages-btn'>
                <Link to="/Vaccine"><button className='btn'>Visit page</button></Link>
              </div>
            </div>
          </li>
          <li>
            <div className='page'>
              <div className='user-info'>
                <img
                  src='https://www.eatg.org/wp-content/uploads/2021/11/covid-pill.webp'
                  alt=''
                  className='img'
                />
                <div>
                  <h3>
                    International Conference on Antiviral Therapy and Drug
                    Development- 2025
                  </h3>
                  <span>October 6-7, 2025 Paris, France</span>
                </div>
              </div>
              <div className='pages-btn'>
                <Link to="/Antiviral"><button className='btn'>Visit page</button></Link>
              </div>
            </div>
          </li>
          <li>
            <div className='page'>
              <div className='user-info'>
                <img
                  src='https://nationaltoday.com/wp-content/uploads/2020/12/UNIVERSAL-HEALTH-COVERAGE-DAY-1.jpg'
                  alt=''
                  className='img'
                />
                <div>
                  <h3>
                    International Conference on Public Health and Viral
                    Epidemiology 2025
                  </h3>
                  <span>August 11-12, 2025 Toronto, Canada</span>
                </div>
              </div>
              <div className='pages-btn'>
                <Link to="/Viral"><button className='btn'>Visit page</button></Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <h1 className='details-heading'>Why Choose Us?</h1>
    </div>
   
  );
};

export default Pages;