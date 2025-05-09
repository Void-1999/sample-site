import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
  return (
    <div className="p-6 space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">About ForRest Of Us</h1>
        <p>
          ForRest Of Us is a community initiative rooted in Vadodara, focused on
          sustainability, creativity, and togetherness. We believe in a hands-on
          approach to creating meaningful experiences and social impact.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What We Do</h2>
        <ul className="space-y-4">
          <li>
            <strong>Jamming Sessions:</strong> Unplugged, soulful music gatherings where
            the community bonds over songs and melodies.
          </li>
          <li>
            <strong>Education:</strong> Designing hands-on workshops for the youth,
            teaching in organizations and institutions and developing a community of
            changemakers.
          </li>
          <li>
            <strong>Climate Change:</strong> Zero waste events and cafes, flowering plants
            plantations, community kitchen events, and more – all aimed at uplifting
            society.
          </li>
          <li>
            <strong>Film Screening:</strong> Monthly film screenings with The Film Society
            Vadodara (TFSV), featuring thought-provoking cinema. Post-screening
            discussions are honest, lively, and reflective.
          </li>
          <li>
            <strong>Maker’s Space:</strong> A space dedicated for those who want to create.
            We invite people to repair, do woodworking, and work on their projects.
          </li>
          <li>
            <strong>Food Lab:</strong> We experiment, ferment, and create interesting food.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <ul className="list-disc pl-6">
          <li>
            Slow Living Workshop 19-25 May –
            <Link
              href="https://forms.gle/gyWFCgUMmVv5V8VY8"
              className="text-blue-600 underline"
              target="_blank"
            >
              Register Here
            </Link>
          </li>
          <li>Flowering Plants Plantation Drive – Date: 15th May</li>
          <li>Jamming Session – Soon, 7:30 PM onwards at ForRest Of Us Terrace</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Stories</h2>
        <ul className="list-disc pl-6">
          <li>
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7310815074095435776"
              target="_blank"
              className="text-blue-600 underline"
            >
              An Introduction
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7318192085512167424"
              target="_blank"
              className="text-blue-600 underline"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7324347337378525185"
              target="_blank"
              className="text-blue-600 underline"
            >
              Film Screenings: Meaningful Cinema
            </Link>
          </li>
          <li>Jamming: How Music Heals (link coming soon)</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Stay</h2>
        <p>
          <Link
            href="https://www.airbnb.com/rooms/1225366340456485396?viralityEntryPoint=1&s=76"
            className="text-blue-600 underline"
            target="_blank"
          >
            Experience our cozy, homely stay
          </Link>
          , equipped with the maker’s space and community space, built with love.
          Be your creative self and hand-craft something. Your stay directly supports
          our community initiative and social causes.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <ul className="space-y-4">
          <li>
            <strong>Aditya Tripathi – Director:</strong> A sustainability practitioner
            from Vadodara, blends grassroots organizing, CSR, and waste systems to build
            inclusive, climate-resilient communities. Co-leads ForRest Of Us.
          </li>
          <li>
            <strong>Vidipta Bafna – Co-founder:</strong> A designer who uses creativity to
            drive community-led change. Supports youth-led projects blending hands-on
            making with care for people and place.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Get Involved</h2>
        <ul className="list-disc pl-6">
          <li>Volunteer – Sign up (link pending)</li>
          <li>Donate – (link pending)</li>
          <li>Participate – Check out our events section</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What People Say</h2>
        <Link
          href="https://www.google.com/search?q=forrest+of+us+vadodara+reviews"
          target="_blank"
          className="text-blue-600 underline"
        >
          Read Google Reviews
        </Link>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <ul className="list-disc pl-6">
          {[
            "https://photos.app.goo.gl/Ca7WYcxzpiSCMpgy5",
            "https://photos.app.goo.gl/KkDLTaGboeizDwFTA",
            "https://photos.app.goo.gl/gaFdwRbT6CDHmUrq7",
            "https://photos.app.goo.gl/cNBdKiVMSGJKPXXJ8",
            "https://photos.app.goo.gl/1hgiBeSbdnvhDskN6",
            "https://photos.app.goo.gl/SRRV6qPSnt1h8m7B9",
            "https://photos.app.goo.gl/7zdqPtwyZ7NiAdVq8",
            "https://photos.app.goo.gl/gp9nvpy8MATiBN637",
          ].map((link, index) => (
            <li key={index}>
              <Link href={link} target="_blank" className="text-blue-600 underline">
                Gallery {index + 1}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p>
          Location:{" "}
          <Link
            href="https://maps.app.goo.gl/yR9oJczPfeme3YJj8"
            target="_blank"
            className="text-blue-600 underline"
          >
            ForRest Of Us, 11/B Parijatak society, Tandalja, Near Muktinagar society,
            Old Padra Road, Vadodara - 390020
          </Link>
        </p>
        <p>Email: forrestofus01@gmail.com</p>
        <p>Phone: +91 9998222133</p>
        <p>
          Follow us: {" "}
          <Link href="https://forrestofus.org/" target="_blank" className="text-blue-600 underline">
            Website
          </Link>
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">All Events</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Upcoming Events</h3>
          <ul className="list-disc pl-6">
            <li>
              Slow Living Workshop (19–25 May, 7:30AM–10:30AM) – A program for youth to
              learn hands-on activities, different forms of creativity and appreciating the
              process – {" "}
              <Link
                href="https://forms.gle/gyWFCgUMmVv5V8VY8"
                className="text-blue-600 underline"
                target="_blank"
              >
                Register
              </Link>
            </li>
            <li>
              Flowering Plants Plantation Drive (15th May @ ForRest Of Us) – Let's together
              make the city a vibrant place to live in!
            </li>
            <li>
              Jamming Session – Soon, 7:30PM onwards, ForRest Of Us Terrace – Inviting all
              artists, non-artists, and bathroom singers for an evening of jamming together
              with the community.
            </li>
          </ul>
          <h3 className="text-xl font-bold mt-4">Past Events</h3>
          <ul className="list-disc pl-6">
            <li>Film Screening: Dead Poet’s Society</li>
          </ul>
        </div>
      </section>
    </div>
  );
}