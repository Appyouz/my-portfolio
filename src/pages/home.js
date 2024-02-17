import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.css';

library.add(faGithub, faGoogle);

const Home = () => {
  return (
    <div className={styles.container}>

      <div className={styles['portfolio-header']}>
        <img src='/images/profile.png' alt='Profile Icon' className={styles['profile-icon']} />
      </div>
      <h1>Appyouz</h1>
      <section>
        <h2>Who Am I?</h2>
        <p>
          I am an enthusiastic computer nerd with a keen interest in networking and
          cybersecurity. Leveraging my passion for technology, I delve into the
          intricacies of networks and cybersecurity to stay at the forefront of
          digital advancements. Beyond my analytical side, I find joy in the creative
          realm, where I indulge in both playing and developing games. This unique blend
          of technical curiosity and creative exploration defines my multifaceted approach
          to the ever-evolving world of computing.
        </p>
      </section>
      <section className={styles['projects-section']}>
        <h2>Projects</h2>
        <ul className={styles['projects-list']}>
          <li className={styles['projects-list-item']}>
            <p><a href='https://github.com/Appyouz/cross-the-road'>Cross the road</a> - A very first game i wrote using c++ and SDL2.</p>

          </li>
          <li className={styles['projects-list-item']}>
            <p><a href='https://github.com/Appyouz/appyouz.github.io'>Online Book shopping</a> - A college project on user interface design front end for online book selling site.</p>
          </li>
          <li className={styles['projects-list-item']}>
            <p><a href='https://github.com/Appyouz/password_generator'>Password Generator</a> - A college project on user interface design front end for online book selling site.</p>
          </li>
        </ul>
      </section>

      <section className={styles['contact-icons']}>
        <a href='https://github.com/appyouz'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
        <a href='@joset64994@flexvio.com'>
          <FontAwesomeIcon icon={faGoogle} size='2x' />
        </a>
        {/* Add more icons or information as needed */}
      </section>
    </div>
  );
};

export default Home;

