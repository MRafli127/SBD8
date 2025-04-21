import React, { useState } from 'react'
import './App.css'
import DMJLogo from './assets/DMJLogo.svg'
import OSLogo from './assets/OSLogo.svg'
import SBDLogo from './assets/SBDLogo.svg'
import Logo from './assets/Logo.svg'

const PRAKTIKUM_DATA = [
  {
    id: 1,
    name: 'Dasar Manajemen Jaringan',
    shortName: 'Praktikum DMJ',
    logo: DMJLogo,
    description: 'Mempelajari dasar-dasar manajemen jaringan komputer dan konfigurasi perangkat jaringan.',
    materials: [
      'Multi-access & Multi-area OSPFv2',
      'EIGRP',
      'NAT dan ACL',
      'WAN PPP & Frame Relay',
      'VPN',
      'QOS',
      'Network Monitoring',
      'Network Virtualization',
      'Network Automation',
      'SBA'
    ],
    progress: 80,
    status: 'ongoing',
    url: 'https://emas2.ui.ac.id/course/view.php?id=87760'
  },
  {
    id: 2,
    name: 'Sistem Basis Data',
    shortName: 'Praktikum SBD',
    logo: SBDLogo,
    description: 'Mempelajari konsep dan implementasi sistem basis data relasional dan non-relasional.',
    materials: [
      'Setup RDBMS',
      'Relational Database',
      'Join, Views, and Advanced Query',
      'Normalization',
      'Express JS',
      'Advanced Express JS',
      'MongoDB (NoSQL)',
      'Basic Frontend',
      'Advanced Frontend',
      'Proyek Akhir'
    ],
    progress: 80,
    status: 'completed',
    url: 'https://emas2.ui.ac.id/course/view.php?id=87781'
  },
  {
    id: 3,
    name: 'Sistem Operasi',
    shortName: 'Praktikum OS',
    logo: OSLogo,
    description: 'Mempelajari konsep dasar sistem operasi dan implementasinya pada sistem Unix/Linux.',
    materials: [
      'Linux Introduction',
      'Basic Bootloader',
      'Process',
      'Exec Family',
      'Signals',
      'File I/O',
      'Pipe',
      'Input Parsing',
      'Linux Shell',
      'Linux Shell'
    ],
    progress: 70,
    status: 'upcoming',
    url: 'https://emas2.ui.ac.id/course/view.php?id=87783'
  }
]

const FEATURES = [
  {
    icon: 'document',
    title: 'Modul Interaktif',
    description: 'Akses materi praktikum interaktif dengan tutorial langkah demi langkah.',
    url: 'https://learn.netlabdte.com/'
  },
  {
    icon: 'chat',
    title: 'Forum Diskusi',
    description: 'Diskusikan permasalahan praktikum dengan asisten dan teman-teman.',
    url: 'https://link.netlabdte.com/DiscordNetlab24'
  },
  {
    icon: 'file',
    title: 'Tugas Praktikum',
    description: 'Submit tugas praktikum dan dapatkan feedback dari asisten.',
    url: '#'
  }
]

const STATUS_STYLES = {
  ongoing: 'bg-yellow-100 text-yellow-600',
  completed: 'bg-green-100 text-green-600',
  upcoming: 'bg-blue-100 text-blue-600'
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  const IconComponent = ({ iconName }) => {
    switch (iconName) {
      case 'document':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      case 'chat':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        )
      case 'file':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      default:
        return null
    }
  }

  const NavLink = ({ href, isActive, onClick, children }) => {
    return (
      <a 
        href={href} 
        className={`py-3 transition-colors ${isActive ? 'text-blue-800 font-medium' : 'text-gray-700 hover:text-blue-800'}`}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  const PraktikumCard = ({ praktikum }) => {
    return (
      <div className="overflow-hidden transition-transform bg-white rounded-lg shadow-lg hover:-translate-y-1">
        <div className="p-4 text-center text-white bg-blue-800">
          <img 
            src={praktikum.logo} 
            alt={`${praktikum.name} Logo`} 
            className="w-32 h-32 p-2 mx-auto mb-4 bg-white rounded-full" 
          />
          <h3 className="text-xl font-semibold">{praktikum.name}</h3>
          <span>{praktikum.shortName}</span>
        </div>
        <div className="p-6">
          <p className="mb-4 text-gray-600">{praktikum.description}</p>
          <ul className="mb-6 space-y-2">
            {praktikum.materials.map((material, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-xl text-blue-800">•</span>
                <span className="text-gray-800">{material}</span>
              </li>
            ))}
          </ul>
          <div className="h-2 mb-1 overflow-hidden bg-gray-200 rounded-full">
            <div 
              className="h-full bg-green-600" 
              style={{ width: `${praktikum.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mb-6 text-sm text-gray-500">
            <span>Progress</span>
            <span>{praktikum.progress}%</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${STATUS_STYLES[praktikum.status]}`}>
            {praktikum.status === 'ongoing' ? 'Ongoing' : praktikum.status === 'completed' ? 'Completed' : 'Upcoming'}
          </span>
          <a
            href={praktikum.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
          >
            Detail
          </a>
        </div>
      </div>
    )
  }

  const FeatureCard = ({ feature }) => {
    return (
      <a 
        href={feature.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 text-center transition duration-200 bg-white rounded-lg shadow-md hover:shadow-lg"
      >
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
          <IconComponent iconName={feature.icon} />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-blue-800">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </a>
    )
  }

  const SocialIcon = ({ href, children }) => {
    return (
      <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-800 rounded-full hover:bg-blue-800"
      >
        {children}
      </a>
    )
  }

  return (
    <>
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container px-4 py-4 mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Netlab Logo" className="w-10 h-10" />
              <h1 className="text-xl font-semibold text-blue-800">Praktikum Netlab</h1>
            </div>
            <div className={`absolute left-0 right-0 z-40 flex-col items-center px-4 space-y-4 transition-all duration-300 ease-in-out bg-white shadow-lg top-full md:shadow-none md:flex md:static md:flex-row md:space-y-0 md:space-x-6 ${mobileMenuOpen ? 'flex' : 'hidden md:flex'}`}>
              <NavLink href="#home" isActive={activeTab === 'home'} onClick={() => handleTabClick('home')}>Home</NavLink>
              <NavLink href="#praktikum" isActive={activeTab === 'praktikum'} onClick={() => handleTabClick('praktikum')}>Praktikum</NavLink>
              <NavLink href="#fitur" isActive={activeTab === 'fitur'} onClick={() => handleTabClick('fitur')}>Fitur</NavLink>
              <NavLink href="#kontak" isActive={activeTab === 'kontak'} onClick={() => handleTabClick('kontak')}>Kontak</NavLink>
            </div>
            <button 
              className="inline-flex items-center p-2 text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 text-white bg-blue-800">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Selamat Datang di Praktikum Netlab</h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg">Platform belajar interaktif untuk praktikum jaringan komputer dan sistem operasi.</p>
          <a 
            href="#praktikum" 
            className="px-6 py-3 text-blue-800 transition-colors bg-white rounded-md hover:bg-blue-50" 
            onClick={() => setActiveTab('praktikum')}
          >
            Mulai Belajar
          </a>
        </div>
      </section>

      {/* Praktikum Section */}
      <section id="praktikum" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-blue-800">Praktikum Netlab</h2>
            <p className="text-gray-600">Berikut adalah materi praktikum yang tersedia semester ini</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PRAKTIKUM_DATA.map((praktikum) => (
              <PraktikumCard key={praktikum.id} praktikum={praktikum} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-blue-800">Fitur Platform</h2>
            <p className="text-gray-600">Berbagai fitur yang memudahkan proses belajar</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 text-white bg-blue-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Butuh Bantuan?</h2>
          <p className="max-w-xl mx-auto mb-8">Jika Anda memiliki pertanyaan atau kesulitan dalam menggunakan platform ini, jangan ragu untuk menghubungi Aku.</p>
          <a href="https://wa.me/6281931555117"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-blue-800 transition-colors bg-white rounded-md hover:bg-blue-50">
            Hubungi Rafli
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <img src={Logo} alt="Netlab Logo" className="w-12 h-12" />
            </div>
            <div className="flex flex-wrap justify-center mb-8 space-x-6">
              <a href="#home" className="mb-2 transition-colors hover:text-blue-300" onClick={() => setActiveTab('home')}>Home</a>
              <a href="#praktikum" className="mb-2 transition-colors hover:text-blue-300" onClick={() => setActiveTab('praktikum')}>Praktikum</a>
              <a href="#fitur" className="mb-2 transition-colors hover:text-blue-300" onClick={() => setActiveTab('fitur')}>Fitur</a>
              <a href="#kontak" className="mb-2 transition-colors hover:text-blue-300" onClick={() => setActiveTab('kontak')}>Kontak</a>
            </div>
            <div className="flex mb-8 space-x-4">
              <SocialIcon href="https://www.instagram.com/netlab.dteftui/">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@NetlabDTE2023">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </SocialIcon>
            </div>
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 Netlab Praktikum. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App