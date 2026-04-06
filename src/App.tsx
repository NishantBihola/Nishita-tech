/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  HardHat, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Linkedin, 
  ArrowRight,
  Droplets,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";

const IMAGES = {
  logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=286,h=118,fit=crop,trim=0;58.3756345177665;0;78.68020304568527/AQEDoyz7PySBjqbb/era-logo-Aq2qKGK0bahNp8EB.jpg",
  redSeal: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=95,h=97,fit=crop,trim=0;0;0;4.639175257731958/AQEDoyz7PySBjqbb/red-seal-imge-1-mp8qK4KXVNiv2OMR.jpg",
  core: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=105,h=107,fit=crop,trim=0;4.205607476635514;0;0/AQEDoyz7PySBjqbb/core-AMqlgDgVxZSJnJZN.jpg",
  acsa: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=294,h=186,fit=crop,trim=0;2.027027027027027;0;0/AQEDoyz7PySBjqbb/acsa-YZ9xgEgnrPcQpoqd.jpeg",
  project1: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=700,fit=crop,q=95/AQEDoyz7PySBjqbb/img-20240619-wa0011-1-mk3qKB5Jj6C1DeKD.jpg",
  project2: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=302,h=428,fit=crop,trim=0;0;324.76722532588457;0/AQEDoyz7PySBjqbb/img_20220925_090012694_hdr-1-mxBMKMMpDwterO4v.jpg",
  project3: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=712,fit=crop,trim=0;791.1532385466035;0;173.1437598736177/AQEDoyz7PySBjqbb/img-20170902-wa0010-AQEDoD4qQvtLv7g0.jpg",
  project4: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=602,h=423,fit=crop/AQEDoyz7PySBjqbb/img-20181122-wa0011-AE0ag7gvnDf1NvKn.jpg",
  project5: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=304,fit=crop/AQEDoyz7PySBjqbb/img-20170902-wa0011-YyvZK3JO6oIVrq0Z.jpg",
  fortMcMurray: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=127,fit=crop,trim=0;23.42032967032967;0;10.304945054945055/AQEDoyz7PySBjqbb/fort-mcmurray-mp8qK4KX1BfR24p0.jpg"
};

const CONTACT_INFO = {
  email: "Naishadh_bihola@yahoo.ca",
  phone: "780-270-8729",
  location: "2212, 55 street SW, Edmonton, Alberta, Canada",
  hours: "Mon-Fri: 7:00 AM - 7:00 PM",
  linkedin: "https://www.linkedin.com/in/naishadhsinh/"
};

import { Logo } from "./components/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Logo className="h-10 sm:h-14 w-auto" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-brand-primary hidden sm:block">
              NISHITA TECHNICAL
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Services</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-accent transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 shadow-xl"
        >
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-600 hover:text-brand-accent transition-colors"
          >
            About
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-600 hover:text-brand-accent transition-colors"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-600 hover:text-brand-accent transition-colors"
          >
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-primary text-white">
    <div className="absolute inset-0 -z-10 opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm font-bold mb-8 border border-red-500/20">
          <ShieldCheck className="w-4 h-4" />
          <span>Safety is a lifestyle</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold leading-[1.1] mb-6 sm:mb-8 tracking-tight">
          Precision Electrical <br />
          <span className="text-brand-accent">Solutions.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          NISHITA TECHNICAL & TECHNOLOGY LTD. provides highly specialized electrical services to industrial applications across Alberta.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
          <a href="#contact" className="bg-brand-accent text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-orange-900/40">
            Work With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold hover:bg-white/20 transition-all text-center">
            Our Services
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
        {[
          { label: "Qualified Employees", value: "Expert Team", desc: "Not only is our team full of professionals - we're a fun bunch, too." },
          { label: "Projects Delivered", value: "Successfully Completed", desc: "We successfully completed individual projects across Alberta." },
          { label: "Key Industries", value: "Specialist Experience", desc: "We have specialist experience in a handful of industries." }
        ].map((stat, i) => (
          <div key={i} className="space-y-2 sm:space-y-3">
            <p className="text-brand-accent font-bold text-base sm:text-lg uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl sm:text-3xl font-bold text-brand-primary">{stat.value}</p>
            <p className="text-slate-500 text-sm max-w-xs mx-auto">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section className="py-8 sm:py-12 bg-slate-50 border-y border-slate-200 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <img src={IMAGES.redSeal} alt="Red Seal" className="h-12 sm:h-16 w-auto" referrerPolicy="no-referrer" />
        <img src={IMAGES.core} alt="COR Certification" className="h-12 sm:h-16 w-auto" referrerPolicy="no-referrer" />
        <img src={IMAGES.acsa} alt="ACSA" className="h-12 sm:h-16 w-auto" referrerPolicy="no-referrer" />
        <img src={IMAGES.fortMcMurray} alt="Fort McMurray" className="h-10 sm:h-12 w-auto" referrerPolicy="no-referrer" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-brand-primary mb-8">Who are we?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Industrial Electrician",
                "Maintenance Electrician",
                "Repair and install of Equipment",
                "Motor, Light, Breaker, Control Panel",
                "Consultants and Help oil & gas companies",
                "Live plant, SAGD Expertise"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-primary p-10 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <ShieldCheck className="text-brand-accent" />
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Integrity",
                "Partner of Choice",
                "Driven to Perform",
                "Culture of Quality",
                "Safety & Service"
              ].map((value, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 mt-12 lg:mt-0">
          <div className="relative">
            <img 
              src={IMAGES.project4} 
              alt="Industrial Electrician at Work" 
              className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-8 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <p className="text-3xl sm:text-5xl font-bold text-brand-accent mb-1">2013</p>
              <p className="text-[10px] sm:text-sm font-bold text-brand-primary uppercase tracking-widest">Since Establishment</p>
            </div>
          </div>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-4 sm:pt-8 px-2 sm:px-0">
            NISHITA TECHNICAL & TECHNOLOGY LTD. values integrity to enable us to work better and more efficiently. It strengthens our relationships and establishes us as the partner of choice in our industry.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img src={IMAGES.project2} alt="Project Site" className="rounded-2xl shadow-lg w-full h-32 sm:h-48 object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src={IMAGES.project3} alt="Electrical Panel" className="rounded-2xl shadow-lg w-full h-32 sm:h-48 object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src={IMAGES.project1} alt="Industrial Facility" className="rounded-2xl shadow-lg w-full h-32 sm:h-48 object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src={IMAGES.project5} alt="Control Systems" className="rounded-2xl shadow-lg w-full h-32 sm:h-48 object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mb-12 sm:mb-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Services</h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg px-4">
          We're passionate about providing highly specialized services to industrial electrical applications. Our expertise allows us to efficiently service and maintain the equipment necessary to keep Alberta up and running.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Panel Assembly & Experience */}
        <div className="space-y-6 sm:space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-brand-accent border-b border-white/10 pb-4">Panel Assembly & Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4">
              {[
                "Quality workmanship As Per Built",
                "Assembly, wiring & testing reports",
                "Drawing mark-up",
                "Packaging & fast track shipping",
                "Explosion Proof connector/JB",
                "PLC Control Panels",
                "DCS Marshalling Panels",
                "Industrial Control Panels",
                "Instrument Racks",
                "VFD / Motor Control Panels"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-brand-accent border-b border-white/10 pb-4">E-HOUSES / MCC / PDC</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "4160V Switchgear",
                "600V MCC Sections",
                "Automatic Transfer Switches",
                "VFD's",
                "Power Distribution (347/600V)",
                "UPS Systems",
                "HVAC System Integration",
                "Generator Packages",
                "Utility Power Solutions"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Construction & Maintenance */}
        <div className="space-y-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-brand-accent border-b border-white/10 pb-4">Construction Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Processing Facilities",
                "Facility Decommissioning",
                "Wellsite & SCADA/RTU",
                "Modular Skid Wiring",
                "Medium Voltage Distribution",
                "Transformer Installations",
                "Heat Trace Installations",
                "Fibre Optic Cabling",
                "Cable Tray & Raceways",
                "Commissioning & Start-up"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-brand-accent border-b border-white/10 pb-4">Maintenance Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "On-Call Service 24/7",
                "Troubleshooting Live Plants",
                "Plant Turnarounds",
                "PM Planning & Scheduling",
                "Pneumatic & Electronic Controls",
                "Field Instrument Calibrations",
                "Master Scheduling",
                "Workforce Loading",
                "Material Procurement"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 sm:p-8 lg:p-16">
              <h2 className="text-3xl font-bold text-brand-primary mb-8">Get in Touch</h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary">Location</p>
                    <p className="text-slate-600">{CONTACT_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary">Hours</p>
                    <p className="text-slate-600">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary">Call Us</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 hover:text-brand-accent transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary">Email Us</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-brand-accent transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-slate-100">
                <p className="font-bold text-brand-primary mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a 
                    href={CONTACT_INFO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-accent hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-brand-primary p-6 sm:p-8 lg:p-16 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" 
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-accent text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-900/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white py-8 sm:py-12 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
        <div className="flex items-center gap-2">
          <Logo className="h-8 sm:h-10 w-auto" />
          <span className="font-bold text-base sm:text-lg text-brand-primary">NISHITA TECHNICAL</span>
        </div>
        <div className="text-slate-500 text-xs sm:text-sm space-y-1">
          <p>©2019 by NISHITA TECHNICAL & TECHNOLOGY LTD.</p>
          <p className="break-all sm:break-normal">{CONTACT_INFO.phone} | {CONTACT_INFO.email}</p>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-brand-accent transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs sm:text-sm text-slate-500 hover:text-brand-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-brand-accent">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Certifications />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
