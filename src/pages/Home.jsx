import { Imagess } from "../constant";
import { FaCirclePlay } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaSass } from "react-icons/fa";



export const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eiugqtd", "template_g0ag2uz", form.current, {
        publicKey: "ujtPcAk1HUM5qA8ZF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.value=null
  };

  return (
    <>
      <nav className="flex justify-around items-center p-3 bg-blue-700">
        <div className="text-2xl font-medium text-white">Saad</div>
        <ul className="flex gap-7 text-white">
          <li className="text-yellow-400 hover:border-b-2 border-yellow-500">
            Home
          </li>
          <li className="hover:border-b-2 border-yellow-500">About</li>
          <li className="hover:border-b-2 border-yellow-500">Portfolio</li>
          <li className="hover:border-b-2 border-yellow-500">Services</li>
        </ul>
        <div>
          <button className="bg-yellow-500 py-3 px-6 text-white rounded-full shadow-lg hover:bg-white hover:text-yellow-500">
            Contact-me
          </button>
        </div>
      </nav>

      <section className="bg-blue-700 h-[60vh] flex items-center justify-around relative p-7">
        <div className="text-[50px] font-semibold text-white">
          Hello,I'm <br /> Saad Mamdouh An <br />{" "}
          <span className="text-yellow-500 font-medium">UI/UX</span> and
          WebDeveloper.
          <br />
          <div className="flex gap-6 text-[20px] font-normal pt-4">
            <button className="bg-yellow-500 py-3 px-6 rounded-full shadow-lg hover:bg-white hover:text-yellow-500 ">
              Contact me
            </button>
            <div className="flex gap-3 items-center justify-center px-5">
              <a href="https://x.com/SDM09472536" target="_blank">
                <FaXTwitter className="hover:text-yellow-500 text-3xl" />
              </a>
              <a href="https://github.com/Saadmamdouh123" target="_blank">
                <FaGithub className="hover:text-yellow-500 text-3xl" />
              </a>
              <FaLinkedin className="hover:text-yellow-500 text-3xl" />
              <SiGmail className="hover:text-yellow-500 text-[20px]" />
            </div>
          </div>
          <div className="flex flex-col fixed bottom-10 right-6 z-50 rounded-xl bg-blue-700 py-5  text-white gap-3 items-center justify-center px-4 border-1 border-y-white ">
            <a href="https://x.com/SDM09472536" target="_blank">
              <FaXTwitter className="hover:text-yellow-500 text-[20px]" />
            </a>
            <a href="https://github.com/Saadmamdouh123" target="_blank">
              <FaGithub className="hover:text-yellow-500 text-[20px]" />
            </a>
            <FaLinkedin className="hover:text-yellow-500 text-[20px]" />
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTRSzsgBBTlgzQPdhMmvrBMghGvNHRdvjTfvwspWWLwdzwMpKZqrfXbhnzjJljZFHvFMsSl">
              <SiGmail className="hover:text-yellow-500 text-[20px]" />
            </a>
          </div>
        </div>
        <div>
          <img
            src={Imagess.img1}
            className="w-[300px] h-[400px] rounded-xl border-2 border-blue-500"
            alt=""
          />
        </div>
        <img src={Imagess.img2} className="absolute w-32 bottom-10 rounded-xl" alt="" />
      </section>

      <section className="p-12">
        <div className="text-center pt-6">
          <h1 className="text-xl font-medium text-blue-600">Services</h1>
          <p className="text-4xl font-bold">
            Expertise Service ! Let's check it out
          </p>
          <p className="text-gray-500 font-normal pt-3 pb-3">
            UI/UX Design Transform your ideas into visually stunning and
            intuitive interfaces. I create wireframes, prototypes,
            <br /> and high-fidelity designs that prioritize usability and
            aesthetics, tailored to your brand identity.
          </p>
        </div>

        <div className="flex gap-4 justify-around pt-5">
          <div className="bg-[#f8f8f8] p-4 h-80 w-80 text-center flex flex-col justify-center items-center rounded-lg">
            <img src={Imagess.img3} className="w-20 h-15" alt="" />
            <p className="font-bold text-xl pb-2">UI UX Design</p>
            <p>
              UI/UX designer is to create intuitive, user-friendly products that
              meet the needs of their target audience
            </p>
          </div>
          <div className="bg-[#5d5cdc] h-80 w-80 text-center p-4 flex flex-col justify-center items-center rounded-lg text-white">
            <img src={Imagess.img4} className="w-21 h-28 py-2" alt="" />
            <p className="font-bold text-xl pb-2">Frontend WebDeveloper</p>
            <p>
              UI/UX designer is to create intuitive, user-friendly products that
              meet the needs of their target audience
            </p>
          </div>
          <div className="bg-[#f8f8f8] h-80 w-80 text-center flex flex-col justify-center items-center rounded-lg p-4">
            <img src={Imagess.img5} className="w-20 h-15" alt="" />
            <p className="font-bold text-xl pb-2">Product Designer</p>
            <p>
              UI/UX designer is to create intuitive, user-friendly products that
              meet the needs of their target audience
            </p>
          </div>
        </div>
      </section>

      <section className="flex gap-5 items-center bg-slate-100 p-6">
        <div>
          <img src={Imagess.img6} alt="" />
        </div>
        <div>
          <h1 className="text-xl text-yellow-500">About Me</h1>
          <p className="text-4xl font-bold py-2">Designing Solutions , Not <br /> just Visuals</p>
          <p>I'm a newly certified full stack developer with a strong passion for creating engaging web applications. <br /> Having completed my training at #Lionsgeeks, I've gained proficiency in front-end technologies including: </p>
          <div className="flex gap-2 items-center pt-5 justify-center font-semibold text-xl pb-8"><FaReact className="text-blue-500 text-2xl" />React.js, <FaHtml5 className="text-orange-500 text-2xl" />HTML, <FaCss3Alt className="text-blue-500 text-2xl" />CSS, <RiTailwindCssFill className="text-[#2c96c4] text-2xl" />Tailwind CSS,<RiJavascriptFill className="text-yellow-500 text-2xl" />JavaScript</div>
          <button className="bg-yellow-500 py-3 px-6 text-white rounded-full shadow-lg hover:bg-white hover:text-yellow-500">
            Contact-me
          </button>
        </div>
      </section>
      
      <section className="p-9 shadow-md">
        <h1 className="text-lg text-yellow-500 text-center">Portfolio</h1>
        <h1 className="text-3xl font-bold text-center">Digital Product Showcases</h1>
        <div className="flex gap-6 justify-around p-9">
            <div className="h-72 w-80 relative">
                <img src={Imagess.Dashboard} className=" object-contain border-2 border-yellow-500 rounded-xl" alt="" />
                <p className="pt-4 text-lg font-bold">UI/UX Dashboard Project</p>
                <p className="text-sm">Website/landingPage</p>
                <div className="h-9 w-9 bg-blue-700 rounded-full absolute bottom-1 right-2 border-2 border-yellow-500 flex items-center justify-center"><FaArrowRight className="text-white" /></div>
            </div>
            <div className="h-80 w-80 relative">
                <img src={Imagess.sass2} className=" object-contain border-2 border-yellow-500 rounded-xl" alt="" />
                <p className="pt-4 text-lg font-bold">UI/UX Dashboard Project</p>
                <div className="h-9 w-9 bg-blue-700 rounded-full absolute top-52 right-2 border-2 border-yellow-500 flex items-center justify-center"><FaArrowRight className="text-white" /></div>
                <p className="text-sm">Website/landingPage</p>
            </div>
            <div className="h-72 w-80 relative">
                <img src={Imagess.sass} className=" object-contain border-2 border-yellow-500 rounded-xl" alt="" />
                <p className="pt-4 text-lg font-bold">UI/UX Sass Project</p>
                <div className="h-9 w-9 bg-blue-700 rounded-full absolute top-72 right-2 border-2 border-yellow-500 flex items-center justify-center"><FaArrowRight className="text-white" /></div>
                <p className="text-sm">Website/landingPage</p>
            </div>
            <div className="h-72 w-80 relative">
                <img src={Imagess.fashe} className=" object-contain border-2 border-yellow-500 rounded-xl" alt="" />
                <p className="pt-4 text-lg font-bold">React Project</p>
                <div className="h-9 w-9 bg-blue-700 rounded-full absolute bottom-1 right-2 border-2 border-yellow-500 flex items-center justify-center"><FaArrowRight className="text-white" /></div>
                <p className="text-sm">Website/landingPage</p>
            </div>
        </div>
      </section>

      <section className="p-7 shadow-md">
        <h1 className="text-center text-xl text-yellow-500">Technical Skills</h1>
        <h1 className="text-2xl font-bold text-center pb-2 pt-2">Front-end Web developer</h1>
        <p className="text-center">I am proficient in a variety of web development technologies, including React.js, HTML, CSS, Tailwind CSS, and JavaScript. <br /> My expertise in these areas allows me to create dynamic and responsive web applications.</p>
        <div className="flex gap-4 justify-around items-center pt-9 p-8 ">
              <div className="flex flex-col items-center">
                  <FaHtml5 className="hover:text-orange-500 text-8xl"/>
                  <p>HTML</p>
              </div>
             <div className="flex flex-col items-center">
                  <FaCss3Alt className="hover:text-blue-500 text-8xl" />
                  <p>CSS</p>
             </div>
             <div className="flex flex-col items-center">
                  <RiJavascriptFill className="hover:text-yellow-500 text-8xl" />
                  <p>Javascript</p>
             </div>
             <div className="flex flex-col items-center">
                  <FaReact className="hover:text-blue-500 text-8xl" />
                  <p>React.JS</p>
             </div>
             <div className="flex flex-col items-center">
                  <RiTailwindCssFill className="hover:text-[#2c96c4] text-8xl" />
                  <p>Tailwind.CSS</p>
             </div>
             <div className="flex flex-col items-center">
                  <FaSass className="hover:text-red-600 text-8xl" />
                  <p>Sass</p>
             </div>
             <div className="flex flex-col items-center">
                  <FaLaravel className="hover:text-orange-500 text-8xl" />
                  <p>PHP.Laravel</p>
             </div>
        </div>
      </section>

      <section className="flex justify-around p-6 relative bg-[#f8f8f8]">
        <div>
          <h1 className="text-blue-700">Subscribe</h1>
          <h1 className="text-4xl font-bold">Subscribe to Get Latest <br /> Update From Us</h1>
          <p className="pt-2">I'm Excited To Work With You All To Launch a Good Product</p>
        </div>
        <img src={Imagess.effect1} className="absolute bottom-36 h-20" alt="" />
        <img src={Imagess.effect2} className="absolute bottom-64 h-20" alt="" />
      <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <label>Name</label>
        <input type="text" name="user_name" className="border-2 border-gray-200 shadow-sm w-96 rounded-md h-10" />
        <label>Email</label>
        <input type="email" name="user_email" className="border-2 border-gray-200 shadow-sm w-96 rounded-md h-10" />
        <label>Message</label>
        <textarea name="message" className="border-2 border-gray-200 shadow-sm h-24 rounded-md" />
        <input type="submit" value="Send" className="bg-blue-700 text-white mt-5 w-96 rounded-md h-10" />
      </form>
      </section>
      <div className="flex justify-center ">
          <div className="h-1 bg-gray-300 w-[80%] rounded-lg"></div>
      </div>
    </>
  );
};
