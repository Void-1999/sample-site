import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header activeSection={activeSection} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative" 
        style={{ backgroundImage: 'url(/background.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="text-center relative z-10 px-4">
          <div className="mb-8">
            <Image src="/logo.jpg" alt="ForRest Of Us Logo" width={180} height={180} className="mx-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">ForRest Of Us</h1>
          <p className="text-xl md:text-2xl text-white mb-12">Building sustainable communities through collective action</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#community" className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all">
              Learn More
            </a>
            <a href="https://chat.whatsapp.com/KV3eAdvvSHE0ILAWVhGyW0" target="_blank" rel="noopener noreferrer" 
              className="bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all">
              Join Our Community
            </a>
          </div>
        </div>
      </section>
      
      {/* Community Initiatives Section */}
      <section id="community" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Community Initiatives</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Jamming Sessions */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-60 relative overflow-hidden">
                <Image src="/jamming.jpg" alt="Jamming Sessions" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Jamming Sessions</h3>
                <p className="text-gray-600">
                  Unplugged, soulful music gatherings where the community bonds over songs and melodies.
                </p>
              </div>
            </div>
            
            {/* Education */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-60 relative overflow-hidden">
                <Image src="/education.jpg" alt="Education" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Education</h3>
                <p className="text-gray-600">
                  Designing hands-on workshops for the youth, teaching in organizations and institutions and developing a community of changemakers.
                </p>
              </div>
            </div>
            
            {/* Climate Change */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-60 relative overflow-hidden">
                <Image src="/climate.jpg" alt="Climate Change" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Climate Change</h3>
                <p className="text-gray-600">
                  Zero waste events and cafes, flowering plants plantations, community kitchen events, and more – all aimed at uplifting society.
                </p>
              </div>
            </div>
            
            {/* Film Screening */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-60 relative overflow-hidden">
                <Image src="/film.jpg" alt="Film Screening" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Film Screening</h3>
                <p className="text-gray-600">
                  We host monthly film screenings with The Film Society Vadodara (TFSV), featuring thought-provoking cinema beyond Bollywood. The real magic lies in the post-screening discussions—honest, lively, and reflective.
                </p>
              </div>
            </div>
            
            {/* Maker's space */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-60 relative overflow-hidden">
                <Image src="/maker.jpg" alt="Maker's Space" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Maker's Space</h3>
                <p className="text-gray-600">
                  The space is dedicated for those who want to create. We invite people to repair, do wood working and work on their projects. Making with the community and enjoying the process is what we preach.
                </p>
              </div>
            </div>
            
            {/* Food Lab */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="h-60 relative overflow-hidden">
                <Image src="/food.jpg" alt="Food Lab" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Food Lab</h3>
                <p className="text-gray-600">
                  We experiment, ferment, and create interesting food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section id="events" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Events</h2>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Slow Living Workshop */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/workshop.jpg" alt="Slow Living Workshop" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">May 19-25</span>
                  <h4 className="text-xl font-semibold mb-2">Slow Living Workshop</h4>
                  <p className="text-gray-600 mb-4">
                    7:30AM - 10:30AM - A program for youth to learn hands-on activities, different forms of creativity and appreciating the process.
                  </p>
                  <a 
                    href="https://forms.gle/gyWFCgUMmVv5V8VY8"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-block text-green-600 font-medium hover:text-green-800"
                  >
                    Register Now →
                  </a>
                </div>
              </div>
              
              {/* Plantation Drive */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/plantation.jpg" alt="Flowering Plants Plantation Drive" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">May 15</span>
                  <h4 className="text-xl font-semibold mb-2">Flowering Plants Plantation Drive</h4>
                  <p className="text-gray-600 mb-4">
                    Let's together make the city a vibrant place to live in!
                  </p>
                  <a 
                    href="#"
                    className="inline-block text-green-600 font-medium hover:text-green-800"
                  >
                    Register Now →
                  </a>
                </div>
              </div>
              
              {/* Jamming Session */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/jamming-event.jpg" alt="Jamming Session" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-3">Coming Soon</span>
                  <h4 className="text-xl font-semibold mb-2">Jamming Session</h4>
                  <p className="text-gray-600 mb-4">
                    7:30PM onwards at ForRest Of Us Terrace - Inviting all artists, non-artists and bathroom singers for an evening of jamming together with the community.
                  </p>
                  <a 
                    href="#"
                    className="inline-block text-green-600 font-medium hover:text-green-800"
                  >
                    Stay Tuned →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Past Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 relative overflow-hidden">
                  <Image src="/dead-poets.jpg" alt="Film Screening: Dead Poet's Society" layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Film Screening: Dead Poet's Society</h4>
                  <p className="text-gray-600">
                    A thought-provoking screening followed by community discussion.
                  </p>
                </div>
              </div>
              {/* Add more past events as needed */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Stories */}
      <section id="stories" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* An introduction */}
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7310815074095435776" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-72 relative overflow-hidden">
                  <Image src="/intro.jpg" alt="Introduction" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-green-600 transition-colors">An Introduction</h3>
                  <p className="text-gray-600">
                    Learn about how ForRest Of Us began and the journey we've been on.
                  </p>
                  <span className="inline-block mt-4 text-green-600 font-medium">Read More →</span>
                </div>
              </div>
            </a>
            
            {/* Education */}
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7318192085512167424" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-72 relative overflow-hidden">
                  <Image src="/education-story.jpg" alt="Education" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-green-600 transition-colors">Education</h3>
                  <p className="text-gray-600">
                    Discover how we're building a community of changemakers through hands-on education.
                  </p>
                  <span className="inline-block mt-4 text-green-600 font-medium">Read More →</span>
                </div>
              </div>
            </a>
            
            {/* Film Screenings */}
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7324347337378525185" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-72 relative overflow-hidden">
                  <Image src="/film-story.jpg" alt="Film Screenings" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-green-600 transition-colors">Film Screenings, Meaningful Cinema</h3>
                  <p className="text-gray-600">
                    Explore how we foster dialogue and reflection through thoughtful cinema experiences.
                  </p>
                  <span className="inline-block mt-4 text-green-600 font-medium">Read More →</span>
                </div>
              </div>
            </a>
            
            {/* Jamming */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="h-72 relative overflow-hidden">
                <Image src="/jamming-story.jpg" alt="Jamming" layout="fill" objectFit="cover" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-semibold mb-3">Jamming, How Music Heals</h3>
                <p className="text-gray-600">
                  Discover the power of community music and how it brings people together.
                </p>
                <span className="inline-block mt-4 text-gray-400">Coming soon →</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Stay */}
      <section id="stay" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Our Stay</h2>
          <p className="text-lg text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Experience our cozy, homely stay equipped with the maker's space and community space, built with love. We love to host those traveling to Vadodara, and your stay directly supports our community initiative and social causes.
          </p>
          
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-96 lg:h-auto relative">
                <Image src="/stay.jpg" alt="Our Stay" layout="fill" objectFit="cover" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold mb-6">What we offer</h3>
                <p className="text-xl text-gray-600 mb-8">
                  Be your creative self and hand-craft something
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Maker's space access
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Community spaces for connection
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Cozy, comfortable accommodations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Support for local initiatives
                  </li>
                </ul>
                <a 
                  href="https://www.airbnb.com/rooms/1225366340456485396?viralityEntryPoint=1&s=76"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all inline-block text-center"
                >
                  Book Your Stay
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Aditya Tripathi */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-80 md:h-full relative">
                    <Image src="/aditya.jpg" alt="Aditya Tripathi" layout="fill" objectFit="cover" />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-1">Aditya Tripathi</h3>
                  <p className="text-green-600 font-medium mb-4">Director</p>
                  <p className="text-gray-600">
                    A sustainability practitioner from Vadodara, blends grassroots organizing, CSR, and waste systems to build inclusive, climate-resilient communities. He co-leads Forrest of Us and has worked with organizations like Haiyya, Complexity University, and Shodhyatra.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vidipta Bafna */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-80 md:h-full relative">
                    <Image src="/vidipta.jpg" alt="Vidipta Bafna" layout="fill" objectFit="cover" />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-1">Vidipta Bafna</h3>
                  <p className="text-green-600 font-medium mb-4">Co-founder</p>
                  <p className="text-gray-600">
                    A designer who uses creativity to drive community-led change in Vadodara. With a background in product design, she supports youth-led projects- from upcycling to urban ecology- blending hands-on making with care for people and place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved */}
      <section id="get-involved" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get Involved</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our team of passionate volunteers to help organize events, workshops, and initiatives.
              </p>
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Sign Up
              </a>
            </div>
            
            {/* Donate */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Donate</h3>
              <p className="text-gray-600 mb-6">
                Support our community initiatives with a financial contribution that helps us create sustainable impact.
              </p>
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Contribute
              </a>
            </div>
            
            {/* Participate */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Participate</h3>
              <p className="text-gray-600 mb-6">
                Join our events and workshops to learn, grow, and connect with like-minded community members.
              </p>
              <a 
                href="#events" 
                className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>
    {/* Testimonials / What People Say */}
<section id="testimonials" className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
    
    <div className="bg-white rounded-lg shadow-lg p-8">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14766.497682662092!2d73.1645957!3d22.2975708!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5d59805d49b%3A0x4fb7c8ba07a5c73e!2sForRest%20Of%20Us!5e0!3m2!1sen!2sin!4v1683700638408!5m2!1sen!2sin"
        width="100%" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Reviews for ForRest Of Us"
      ></iframe>
    </div>
  </div>
</section>

{/* Gallery */}
<section id="gallery" className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a 
        href="https://photos.app.goo.gl/Ca7WYcxzpiSCMpgy5" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-1.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
      
      <a 
        href="https://photos.app.goo.gl/KkDLTaGboeizDwFTA" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-2.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
      
      <a 
        href="https://photos.app.goo.gl/gaFdwRbT6CDHmUrq7" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-3.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
      
      <a 
        href="https://photos.app.goo.gl/cNBdKiVMSGJKPXXJ8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-4.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
      
      <a 
        href="https://photos.app.goo.gl/1hgiBeSbdnvhDskN6" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-5.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
      
      <a 
        href="https://photos.app.goo.gl/SRRV6qPSnt1h8m7B9" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-6.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
      
      <a 
        href="https://photos.app.goo.gl/7zdqPtwyZ7NiAdVq8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-7.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
      
      <a 
        href="https://photos.app.goo.gl/gp9nvpy8MATiBN637" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="h-64 relative rounded-lg overflow-hidden shadow-md">
          <Image src="/images/gallery-8.jpg" alt="Gallery Images" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium">View Album</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

{/* Contact / Get in Touch */}
<section id="contact" className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">Address</h4>
                <address className="not-italic text-gray-600">
                  ForRest Of Us,<br />
                  11/B Parijatak society, Tandalja<br />
                  Near Muktinagar society,<br />
                  Old Padra Road<br />
                  Vadodara - 390020
                </address>
                <a 
                  href="https://maps.app.goo.gl/yR9oJczPfeme3YJj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-green-600 hover:text-green-800"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <a href="mailto:forrestofus01@gmail.com" className="text-gray-600 hover:text-green-600">
                  forrestofus01@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <a href="tel:+919998222133" className="text-gray-600 hover:text-green-600">
                  +91 9998222133
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-green-100 text-green-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium mb-1">Follow Us</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.instagram.com/forrestofus/" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/forrestofus" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/forrestofus/" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://forrestofus.org/" target="_blank" rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-green-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter subject"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-center md:text-left">
        © {new Date().getFullYear()} ForRest Of Us. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://www.instagram.com/forrestofus/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
          Instagram
        </a>
        <a href="https://www.facebook.com/forrestofus" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
          Facebook
        </a>
        <a href="https://www.linkedin.com/company/forrestofus/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
          LinkedIn
        </a>
        <a href="https://forrestofus.org/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
          Website
        </a>
      </div>
    </div>
  </div> {/* Close the footer's main container */}
</footer> {/* Ensure proper placement of the footer closing tag */}
</div>
  );
};

export default Home;