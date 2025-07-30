import React from "react";
import {Link} from 'react-router-dom'
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161D29] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm">
        {/* Column 1: Company */}
        <div>
          <h3 className="font-bold text-white text-lg mb-2">StudyNotion</h3>
          <ul className="text-[#838894]">
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Careers">Careers</Link></li>
            <li><Link to="/Affiliates">Affiliates</Link></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <Link to={"https://facebook.com"}><FaFacebook /></Link>
            <Link to={'https://google.com'}><FaGoogle /></Link>
            <Link to={'https://twitter.com'}><FaTwitter /></Link>
            <Link to={'https://youtube.com'}><FaYoutube /></Link>
          </div>
        </div>

        {/* Column 2: Resources */}
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="font-bold text-white mb-2">Resources</h4>
            <ul className="text-[#838894]">
                <li>Articles</li>
                <li>Blog</li>
                <li>Chart Sheet</li>
                <li>Code Challenges</li>
                <li>Docs</li>
                <li>Projects</li>
                <li>Videos</li>
                <li>Workspaces</li>
            </ul>
          </div>


          <div>
            <h4 className="font-bold text-white mb-2">Support</h4>
            <ul className="text-[#838894]">
                <li>Help Center</li>
            </ul>
          </div>


        

        </div>

        {/* Column 3: Plans & Community */}
        <div>
          <h4 className="font-bold text-white mb-2">Plans</h4>
          <ul className="text-[#838894]">
            <li>Paid memberships</li>
            <li>For students</li>
            <li>Business solutions</li>
          </ul>
          <h4 className="font-bold text-white mt-4 mb-2">Community</h4>
          <ul className="text-[#838894]">
            <li>Forums</li>
            <li>Chapters</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Column 4: Subjects */}
        <div>
          <h4 className="font-bold text-white mb-2">Subjects</h4>
          <ul className="text-[#838894]">
            <li>AI</li>
            <li>Cloud Computing</li>
            <li>Code Foundations</li>
            <li>Computer Science</li>
            <li>Cybersecurity</li>
            <li>Data Analytics</li>
            <li>Data Science</li>
            <li>Data Visualization</li>
            <li>Developer Tools</li>
            <li>DevOps</li>
            <li>Game Development</li>
            <li>IT</li>
            <li>Machine Learning</li>
            <li>Math</li>
            <li>Mobile Development</li>
            <li>Web Design</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Column 5: Languages */}
        <div>
          <h4 className="font-bold text-white mb-2">Languages</h4>
          <ul className="text-[#838894]">
            <li>Bash</li>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Go</li>
            <li>HTML & CSS</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Kotlin</li>
            <li>PHP</li>
            <li>Python</li>
            <li>R</li>
            <li>Ruby</li>
            <li>SQL</li>
            <li>Swift</li>
          </ul>
        </div>

        {/* Column 6: Career */}
        <div>
          <h4 className="font-bold text-white mb-2">Career building</h4>
          <ul className="text-[#838894]">
            <li>Career paths</li>
            <li>Career services</li>
            <li>Interview prep</li>
            <li>Professional certification</li>
            <li>Full Catalog</li>
            <li>Beta Content</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />


      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <div className="flex gap-4 mb-1 md:mb-0">
          <a href="#">Privacy Policy</a>
          <span className="mx-1">|</span>
          <a href="#">Cookie Policy</a>
          <span className="mx-1">|</span>
          <a href="#">Terms</a>
        </div>
        <div>
          Made By AdityaKale © 2025 Studynotion
        </div>
      </div>

    </footer>
  );
};

export default Footer;
