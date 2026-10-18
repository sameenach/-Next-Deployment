
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import './home.css';

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="welcome-text">WELCOME TO MY WEBSITE</p>

          <h1>
            Welcome To <span>The Web</span>
          </h1>

          <p className="description">
            Explore a colorful world of creativity, fun, and imagination.
            Discover something wonderful every time you visit!
          </p>

          <Link href="#about" className="explore-button">
            Explore More
          </Link>
        </div>

        <div className="hero-image">
          <Image
            src="/masha.jpg"
            alt="Masha"
            height={500}
            width={500}
            priority
          />
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About This Website</h2>
        <p>
          This is my little corner of the web, created to share happiness,
          creativity, and beautiful moments. I hope you enjoy exploring!
        </p>
      </section>
    </main>
  );
}




 
