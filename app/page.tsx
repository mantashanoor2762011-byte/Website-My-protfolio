"use client";

import "./globals.css";
import { useEffect, useState } from "react";

const skills = [
  {
    image: "/images/javascript.png",
    title: "Web Development",
    text: "HTML, CSS, JavaScript, React, Next.js",
  },
  {
    image: "/images/sketching.png",
    title: "Sketching",
    text: "Pencil Sketches, Portraits, Art",
  },
  {
    image: "/images/calligraphy.png",
    title: "Calligraphy",
    text: "Arabic Calligraphy, Typography, Designs",
  },
  {
    image: "/images/craft.png",
    title: "Craft Work",
    text: "Handmade Crafts, Creative Ideas",
  },
  {
    image: "/images/stiching.png",
    title: "Stitching",
    text: "Designing & Stitching, Creative Outfits",
  },
  {
    image: "/images/mehndi.png",
    title: "Mehndi Art",
    text: "Bridal Mehndi, Traditional Designs",
  },
  {
    image: "/images/jewellery.png",
    title: "Jewellery Making",
    text: "Handmade Jewellery, Customized Pieces",
  },
  {
    image: "/images/ms.png",
    title: "CIT Course",
    text: "Certified Information Technology Course",
  },
  {
    image: "/images/bouquet.png",
    title: "Bouquet Making",
    text: "Creative Note Bouquets, Ribbon Flowers & Gift Arrangements",
  },
  {
    image: "/images/gajray.png",
    title: "Gajray",
    text: "Ribbon Flowers, Handmade Gajray & Floral Accessories",
  },
];

export default function Home() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSkill((previous) => (previous + 1) % skills.length);
    }, 2500);

    return () => clearInterval(slider);
  }, []);

  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo-area">
          <img
            src="/images/logo.png"
            alt="Mantasha Noor Logo"
            className="logo"
          />
        </div>

        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#creative-work">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <a href="#contact" className="contact-btn">
            Contact Me
          </a>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="hero-small">Hi, I&apos;m</p>

          <h1>Mantasha Noor</h1>

          <h2>Web Developer &amp; Creative Artist</h2>

          <p className="hero-text">
            I create beautiful digital experiences and bring ideas to life
            with creativity. I specialize in web development along with
            sketching, calligraphy, craft work, stitching, mehndi art and
            jewellery making.
          </p>

          <div className="hero-buttons">

            <a href="#creative-work" className="btn-primary">
              View My Work →
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>

          </div>

        </div>


        <div className="hero-image">

          <img
            src="/images/hero image.png"
            alt="Mantasha Noor creative workspace"
            className="hero-img"
          />

        </div>

      </section>


      {/* ================= ABOUT ME ================= */}

      <section className="about" id="about">

        <div className="about-image">

          <img
            src="/images/about.png"
            alt="Mantasha Noor creative work"
          />

        </div>


        <div className="about-content">

          <p className="section-small">
            Get To Know Me
          </p>

          <h2>About Me</h2>

          <h3>Where Creativity Meets Technology</h3>

          <p>
            I&apos;m Mantasha Noor, a passionate Web Developer and Creative
            Artist. I enjoy combining technology with creativity to create
            beautiful and meaningful digital experiences.
          </p>

          <p>
            Along with web development, I love sketching, Arabic calligraphy,
            craft work, stitching, mehndi art and jewellery making. These
            creative skills allow me to explore new ideas and express my
            imagination in different ways.
          </p>

          <p>
            I have also completed a CIT course, which has helped me build a
            strong foundation in computer and information technology.
          </p>

          <a href="#skills" className="about-btn">
            Explore My Skills →
          </a>

        </div>

      </section>


      {/* ================= SKILLS SECTION ================= */}

<section className="skills" id="skills">

  <div className="skills-header">
    <p className="section-small">WHAT I DO</p>
    <h2>My Skills &amp; Expertise</h2>
  </div>

  <div className="skills-carousel">

    <div className="skills-track">

      {[...skills, ...skills].map((skill, index) => (

        <div className="skill-card" key={index}>

          <div className="icon">
            <img
              src={skill.image}
              alt={skill.title}
            />
          </div>

          <h3>{skill.title}</h3>

          <p>{skill.text}</p>

        </div>

      ))}

    </div>

  </div>

</section>
 

  
     {/* ================= MY PROJECTS ================= */}

<section className="creative-section" id="creative-work">

  <div className="creative-header">

    <span>MY PROJECTS</span>

    <h2>My Creative Work</h2>

    <p>
      Explore my creative projects, websites and assignments.
    </p>

  </div>


  <div className="website-grid">


    {/* 1. CALLIGRAPHY */}

    <a
  href="https://calligraphy-website-nu.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="website-card"
>
      <img
        src="/images/calligraphy-web.png"
        alt="Calligraphy Website"
      />

      <div className="website-overlay">

        <h3>Calligraphy Website</h3>

        <p>Arabic Calligraphy & Creative Designs</p>

        <span>Visit Website →</span>

      </div>

    </a>


    {/* 2. JEWELLERY */}

    <a
      href="https://your-jewellery-website.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >

      <img
        src="/images/jewellery-web.png"
        alt="Jewellery Website"
      />

      <div className="website-overlay">

        <h3>Jewellery Website</h3>

        <p>Elegant Jewellery & Creative Designs</p>

        <span>Visit Website →</span>

      </div>

    </a>


    {/* 3. SKETCHING */}

    <a
      href="https://your-sketching-website.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >

      <img
        src="/images/sketching-web.png"
        alt="Sketching Website"
      />

      <div className="website-overlay">

        <h3>Sketching Website</h3>

        <p>Pencil Sketches, Portraits & Artwork</p>

        <span>Visit Website →</span>

      </div>

    </a>


    {/* 4. CRAFT */}

    <a
      href="https://your-craft-website.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >

      <img
        src="/images/craft-web.png"
        alt="Craft Website"
      />

      <div className="website-overlay">

        <h3>Craft Website</h3>

        <p>Handmade Crafts & Creative Ideas</p>

        <span>Visit Website →</span>

      </div>

    </a>


    {/* 5. MEHNDI */}

    <a
      href="https://your-mehndi-website.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >

      <img
        src="/images/mehndi-web.png"
        alt="Mehndi Website"
      />

      <div className="website-overlay">

        <h3>Mehndi Website</h3>

        <p>Traditional & Creative Mehndi Designs</p>

        <span>Visit Website →</span>

      </div>

    </a>


    {/* 6. STITCHING */}

    <a
      href="https://your-stitching-website.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >

      <img
        src="/images/stitching-web.png"
        alt="Stitching Website"
      />

      <div className="website-overlay">

        <h3>Stitching Website</h3>

        <p>Creative Outfits & Stitching Designs</p>

        <span>Visit Website →</span>

      </div>

    </a>


    {/* 7. WEB DEVELOPMENT */}

    <a
      href="https://my-assignments-web-site.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >

      <img
        src="/images/assignment.png"
        alt="Web Development Assignments"
      />

      <div className="website-overlay">

        <h3>Web Development</h3>

        <p>My Web Development Projects & Assignments</p>

        <span>View Assignments →</span>

      </div>

    </a>


    {/* 8. CIT */}

    <a
      href="https://your-cit-assignments.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >

      <img
        src="/images/cit-web.png"
        alt="CIT Assignments"
      />

      <div className="website-overlay">

        <h3>CIT Assignments</h3>

        <p>Computer & Information Technology Assignments</p>

        <span>View Assignments →</span>

      </div>

    </a>


  </div>

</section>

</main>
  );
}