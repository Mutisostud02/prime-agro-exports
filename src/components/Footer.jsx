import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/companyData";

export default function Footer() {
  return (
    <footer className="bg-[#16302A] text-[#F3EEE1] border-t border-[#F3EEE1]/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#F3EEE1]/10 pb-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded bg-[#F3EEE1] text-[#16302A] flex items-center justify-center font-serif text-lg font-bold">P</span>
            <span className="font-serif font-bold text-lg tracking-tight">PRIME AGRO EXPORTS</span>
          </div>
          <p className="text-xs text-[#F3EEE1]/70 font-mono mb-4 leading-relaxed">
            {COMPANY.tagline} Connecting Kenya&apos;s volcanic highlands with global markets daily.
          </p>
          <div className="text-[11px] font-mono text-[#C99A3D] space-y-1">
            <div>📞 {COMPANY.phoneDisplay}</div>
            <div>✉️ {COMPANY.email}</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-xs font-mono">
          <h4 className="font-bold text-[#E1672B] uppercase mb-4 tracking-wider">About & Operations</h4>
          <ul className="space-y-2">
            <li><Link to="/about-us/who-we-are" className="hover:text-[#E1672B] transition-colors">Who We Are</Link></li>
            <li><Link to="/about-us/compliance-accreditation" className="hover:text-[#E1672B] transition-colors">Compliance & Accreditation</Link></li>
            <li><Link to="/about-us/freight-logistics" className="hover:text-[#E1672B] transition-colors">Freight & Logistics</Link></li>
            <li><Link to="/about-us/customers" className="hover:text-[#E1672B] transition-colors">Our Global Customers</Link></li>
            <li><Link to="/about-us/our-team-careers" className="hover:text-[#E1672B] transition-colors">Our Team & Careers</Link></li>
          </ul>
        </div>

        {/* Growing Base & Sustainability */}
        <div className="text-xs font-mono">
          <h4 className="font-bold text-[#E1672B] uppercase mb-4 tracking-wider">Growing & Impact</h4>
          <ul className="space-y-2">
            <li><Link to="/growing-base/our-farms-packhouses" className="hover:text-[#E1672B] transition-colors">Our Farms & Packhouses</Link></li>
            <li><Link to="/growing-base/out-grower-farming" className="hover:text-[#E1672B] transition-colors">Out-Grower Partnerships</Link></li>
            <li><Link to="/sustainability/farming-practice" className="hover:text-[#E1672B] transition-colors">Sustainable Farming & IPM</Link></li>
            <li><Link to="/sustainability/conservation" className="hover:text-[#E1672B] transition-colors">Conservation & Biodiversity</Link></li>
            <li><Link to="/sustainability/corporate-social-initiative-responsibilities" className="hover:text-[#E1672B] transition-colors">Community CSI & CSR</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="text-xs font-mono">
          <h4 className="font-bold text-[#E1672B] uppercase mb-4 tracking-wider">Weekly Crop Report</h4>
          <p className="text-[11px] text-[#F3EEE1]/70 mb-3 leading-relaxed">
            Subscribe to receive our latest crop calendar updates, packaging specifications, and seasonal pricing.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to our crop updates!"); }} className="flex gap-2">
            <input 
              type="email" 
              required 
              placeholder="export@buyer.com" 
              className="bg-[#1F3D33] text-[#F3EEE1] px-3 py-2 rounded text-xs border border-[#F3EEE1]/20 focus:outline-none focus:border-[#E1672B] w-full"
            />
            <button className="bg-[#E1672B] text-white px-3 py-2 rounded font-bold hover:bg-[#C4551F]">Go</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-[#F3EEE1]/50 gap-4">
        <div>
          © 2026 {COMPANY.name}. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <span>{COMPANY.address.line1}, {COMPANY.address.city}</span>
          <span>•</span>
          <Link to="/contact-us" className="hover:text-[#E1672B]">Inquire Export Pack</Link>
        </div>
      </div>
    </footer>
  );
}
