import React from 'react';

const End = () => {
  return (
    <section className="h-[300px] relative bg-transparent text-white">
      {/* Link container */}
      <div className="absolute bottom-4 right-4 text-sm text-white/80 space-y-2">
        <h4 className="font-semibold text-white">Important Links</h4>
        <ul className="space-y-1">
          <li>
            <a href="/privacy-policy" className="hover:underline hover:text-white">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:underline hover:text-white">Terms of Service</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline hover:text-white">Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default End;
