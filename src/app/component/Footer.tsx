import React from 'react';

// You can replace these with your actual social media links
const socialLinks = {
  twitter: '#',
  github: '#',
  linkedin: '#',
  instagram: '#',
};

// Updated navigation links for a villa booking website
const navLinks = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Top States',
    links: [
      { label: 'Goa', href: '#' },
      { label: 'Maharashtra', href: '#' },
      { label: 'Uttarakhand', href: '#' },
      { label: 'Himachal Pradesh', href: '#' },
      { label: 'Rajasthan', href: '#' },
      { label: 'Kerala', href: '#' },
    ],
  },
  {
    heading: 'Top Cities',
    links: [
      { label: 'Lonavala', href: '#' },
      { label: 'Manali', href: '#' },
      { label: 'Udaipur', href: '#' },
      { label: 'Shimla', href: '#' },
      { label: 'Munnar', href: '#' },
      { label: 'Jaipur', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

// SVG Icon Components for Social Media
const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const GithubIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
    <svg 
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg 
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
    </svg>
);


const App: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="space-y-8 xl:col-span-1">
             {/* Logo and company description */}
            <div className="flex items-center space-x-3">
               <svg className="h-8 w-auto text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              <span className="text-2xl font-bold text-gray-900">VillaVista</span>
            </div>
            <p className="text-gray-500 text-base">
              Discover your perfect escape in our exclusive collection of villas.
            </p>
            <div className="flex space-x-6">
              <a href={socialLinks.twitter} className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </a>
              <a href={socialLinks.github} className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <GithubIcon />
              </a>
              <a href={socialLinks.linkedin} className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon />
              </a>
               <a href={socialLinks.instagram} className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:mt-0 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase">{navLinks[0].heading}</h3>
              <ul className="mt-4 space-y-4">
                {navLinks[0].links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase">{navLinks[1].heading}</h3>
              <ul className="mt-4 space-y-4">
                {navLinks[1].links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-base text-gray-600 hover:text-blue-600  transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase">{navLinks[2].heading}</h3>
              <ul className="mt-4 space-y-4">
                {navLinks[2].links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-black tracking-wider uppercase">{navLinks[3].heading}</h3>
              <ul className="mt-4 space-y-4">
                {navLinks[3].links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 xl:text-center">
            &copy; {new Date().getFullYear()} VillaVista, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default App;

