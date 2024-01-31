import React from 'react';
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className={styles.container}>
      <h1>My Portfolio</h1>
      <section>
        <h2>Who Am I?</h2>
        <p>
          I'm an enthusiastic computer nerd with a keen interest in networking and cybersecurity. I love playing and
          developing games.
        </p>
      </section>
      <section>
        <h2>Projects</h2>
        <p><a href='https://github.com/your-username/project-1'>Project 1</a></p>
        <p><a href='https://github.com/your-username/project-2'>Project 2</a></p>
      </section>
    </div>
  );
};

export default Home;

