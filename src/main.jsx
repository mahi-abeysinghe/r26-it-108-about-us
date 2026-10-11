import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  Activity, ArrowDown, ArrowUp, ArrowUpRight, BrainCircuit, Check, ChevronRight,
  CircleDot, Download, Github, HeartPulse, Mail, MapPin, Menu, MoveRight,
  Radio, ShieldCheck, X, Zap,
} from 'lucide-react'
import './styles.css'

const docs = {
  guide: '/docs/SmartGlove_Comprehensive_User_Guide.pdf',
  arrhythmia: '/docs/Arrhythmia_Component_Details.pdf',
  model: '/docs/Arrhythmia_Model_Component_Info.pdf',
  thesis: '/docs/Thesis_IT22291196.pdf',
}

const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Scope', 'scope'], ['Milestones', 'milestones'],
  ['Presentations', 'presentations'], ['Banner', 'banner'], ['Our Team', 'team'], ['Contact', 'contact'],
]

const team = [
  ['Abeysinghe S.A.M.M.', 'IT22081148', 'it22081148@my.sliit.lk', '076 662 5010', '/assets/mahi.jpeg'],
  ['Dissanayake D.M.S.K', 'IT22291196', 'it22291196@my.sliit.lk', '071 634 8616', '/assets/sachi.jpeg'],
  ['PESHALA E A P', 'IT22146410', 'it22146410@my.sliit.lk', '076 176 7356', '/assets/peshala.jpeg'],
  ['LAKSHAN N K T', 'IT22196156', 'it22196156@my.sliit.lk', '071 575 9660', '/assets/Tharindu.jpeg'],
]

const milestones = [
  { title: 'TAF Submission', date: '01', text: 'The initial framework that established our research direction.', files: [['Download TAF document', docs.guide]] },
  { title: 'Project Proposals', date: '02', text: 'Individual proposals from each team member, defining the component research areas.', files: [['Download proposal pack', docs.thesis], ['User guide', docs.guide]] },
  { title: 'Progress Presentation 1', date: '03', text: 'Early findings, literature review and the first system architecture.', files: [['Download presentation', docs.guide]] },
  { title: 'Progress Presentation 2', date: '04', text: 'Validated methodology, model progress and integrated prototype results.', files: [['Download presentation', docs.model]] },
  { title: 'Demonstration', date: '05', text: 'A live look at the SmartGlove monitoring workflow and alert system.', files: [['Download system guide', docs.guide]] },
  { title: 'Final Presentation', date: '06', text: 'The complete research story, from problem to working solution.', files: [['Download final research', docs.thesis], ['Component details', docs.arrhythmia]] },
  { title: 'Final Research Papers', date: '07', text: 'The documented research contributions and supporting technical papers.', files: [['Arrhythmia paper', docs.arrhythmia], ['Model information', docs.model], ['Full thesis', docs.thesis]] },
]

function SectionHeading({ eyebrow, title, children, centered = false }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [activeStep, setActiveStep] = React.useState(0)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return <div className="app">
    <header className="site-header">
      <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
        <span className="brand-mark"><Activity size={18} /></span>
        <span>smart<span>glove</span></span>
      </a>
      <nav className={menuOpen ? 'open' : ''}>
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Get in touch <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <div className="status-pill"><span /> Research project · SLIIT</div>
          <h1>Welcome to the<br /><em>next layer</em> of care.</h1>
          <p className="hero-lead">SmartGlove is an intelligent wearable system that turns everyday signals into early, meaningful health and safety insights.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollTo('about')}>Explore the project <ArrowDown size={16} /></button>
            <button className="text-button" onClick={() => scrollTo('milestones')}>View our journey <MoveRight size={17} /></button>
          </div>
          <div className="hero-proof"><div className="avatar-stack"><span>SA</span><span>BH</span><span>WI</span><span>+</span></div><span>Built by a team of four<br /><strong>with one shared vision.</strong></span></div>
        </div>
        <div className="hero-art" aria-label="SmartGlove system illustration">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="device-card">
            <div className="device-top"><span className="tiny-label">LIVE MONITOR</span><span className="live-dot">● LIVE</span></div>
            <div className="wave"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="pulse-row"><div><strong>72</strong><small>BPM</small></div><div><strong>98</strong><small>SpO₂</small></div><div><strong>36.6°</strong><small>TEMP</small></div></div>
            <div className="device-footer"><span><CircleDot size={13} /> All systems normal</span><Zap size={14} /></div>
          </div>
          <div className="floating-note note-top"><HeartPulse size={16} /><span>Cardiovascular<br /><b>monitoring</b></span></div>
          <div className="floating-note note-bottom"><ShieldCheck size={16} /><span>Always on.<br /><b>Always aware.</b></span></div>
          <div className="art-grid" />
        </div>
      </section>

      <section id="about" className="about section-shell section-pad">
        <SectionHeading eyebrow="01 · About the project" title="Care, connected." >A smarter way to understand the moments that matter. SmartGlove brings wearable sensors, AI and real-time communication into one calm, connected system.</SectionHeading>
        <div className="about-grid">
          <div className="about-intro"><span className="big-number">01</span><h3>One system.<br />Many signals.</h3><p>From a heartbeat to a sudden fall, the human body communicates in patterns. Our project makes those patterns visible — and actionable.</p><button className="circle-link" onClick={() => scrollTo('scope')}><ArrowDown size={20} /></button></div>
          <div className="feature-card"><HeartPulse /><h4>Health, in real time</h4><p>Cardiovascular, respiratory and temperature monitoring for earlier awareness of potential abnormalities.</p></div>
          <div className="feature-card"><BrainCircuit /><h4>Intelligence at the edge</h4><p>Independent AI models and sensor-fusion techniques transform raw readings into meaningful insights.</p></div>
          <div className="feature-card"><Radio /><h4>Support, wherever you are</h4><p>A cloud-connected platform keeps caregivers informed through live dashboards and timely alerts.</p></div>
        </div>
      </section>

      <section id="scope" className="scope section-pad">
        <div className="section-shell"><SectionHeading eyebrow="02 · Research scope" title="Designed for the full picture." >Our work sits at the intersection of wearable hardware, artificial intelligence and human-centred safety.</SectionHeading>
          <div className="scope-layout"><div className="scope-list">
            {[['01', 'Research Project Scope', 'An integrated SmartGlove and chest belt monitoring cardiovascular, stress, respiratory, thermal, tremor and fall risks.'], ['02', 'Literature Survey', 'A study of wearable systems, sensor-based anomaly detection and machine learning for physiological data.'], ['03', 'Research Gap', 'Moving beyond single-condition solutions with sensor fusion and independent AI models in one platform.'], ['04', 'Research Problem', 'How can wearable data and real-time communication identify anomalies and notify caregivers promptly?']].map(([num, title, text]) => <article className="scope-row" key={num}><span>{num}</span><div><h4>{title}</h4><p>{text}</p></div><ChevronRight size={18} /></article>)}
          </div><div className="scope-aside"><div className="aside-number">04</div><p>research<br /><strong>directions</strong></p><div className="sensor-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><span className="orbit-core"><Activity size={28} /></span><span className="orbit-dot d1" /><span className="orbit-dot d2" /><span className="orbit-dot d3" /></div></div></div>
          <div className="objectives"><h3>What we set out to do</h3><div className="objective-grid">{['Monitor cardiovascular signals', 'Identify stress and tremor patterns', 'Detect respiratory & thermal risks', 'Recognise falls and immobility', 'Fuse multiple sensor outputs', 'Deliver cloud-connected alerts'].map((x) => <div key={x}><Check size={16} />{x}</div>)}</div></div>
        </div>
      </section>

      <section className="method section-pad"><div className="section-shell method-grid"><div><SectionHeading eyebrow="03 · Methodology" title="From signal to support." >The system collects, understands and communicates data through a carefully connected pipeline.</SectionHeading><div className="tech-tags">{['ESP32', 'Flask', 'Random Forest', 'Firebase', 'Socket.IO', 'Python'].map(x => <span key={x}>{x}</span>)}</div></div><div className="pipeline">{[['01', 'Collect', 'Wearable sensors gather physiological and motion data.'], ['02', 'Understand', 'Preprocessing and AI models identify meaningful patterns.'], ['03', 'Connect', 'Flask and Firebase transmit insights in real time.'], ['04', 'Protect', 'Dashboards and alerts keep caregivers close.']].map(([n, t, d], i) => <div className="pipeline-row" key={n}><span className="pipeline-no">{n}</span><div><h4>{t}</h4><p>{d}</p></div>{i < 3 && <span className="pipeline-line" />}</div>)}</div></div></section>

      <section id="milestones" className="milestones section-shell section-pad"><SectionHeading eyebrow="04 · Milestones" title="The work behind the work." >Every meaningful result has a sequence. Follow our research from first submission to final paper.</SectionHeading><div className="milestone-layout"><div className="stepper">{milestones.map((m, i) => <button className={`step ${activeStep === i ? 'active' : ''}`} key={m.title} onClick={() => setActiveStep(i)}><span className="step-dot">{m.date}</span><span>{m.title}</span></button>)}</div><div className="milestone-detail"><span className="eyebrow">Milestone {milestones[activeStep].date} / 07</span><h3>{milestones[activeStep].title}</h3><p>{milestones[activeStep].text}</p><div className="download-list">{milestones[activeStep].files.map(([label, href]) => <a className="download-item" href={href} download key={label}><span><Download size={16} />{label}</span><ArrowUpRight size={16} /></a>)}</div></div></div></section>

      <section id="presentations" className="presentations section-pad"><div className="section-shell"><SectionHeading eyebrow="05 · Presentations" title="Ideas, in progress." >Browse the documents that capture our thinking at every stage.</SectionHeading><div className="presentation-grid">{[['Proposal Presentation', 'The beginning of the journey', docs.guide], ['Progress Presentation 1', 'Our first checkpoint', docs.model], ['Progress Presentation 2', 'From theory to prototype', docs.arrhythmia], ['Final Presentation', 'The complete picture', docs.thesis]].map(([title, sub, href], i) => <a className="presentation-card" href={href} download key={title}><span className="presentation-index">0{i + 1}</span><div><h4>{title}</h4><p>{sub}</p></div><span className="download-circle"><Download size={17} /></span></a>)}</div></div></section>

      <section id="banner" className="banner section-shell section-pad"><div className="banner-card"><div className="banner-copy"><span className="eyebrow">06 · The bigger picture</span><h2>Technology should feel<br /><em>human.</em></h2><p>We are building more than a monitoring device. We are building a little more peace of mind into everyday life.</p><button className="button button-light" onClick={() => scrollTo('contact')}>Talk to us <ArrowUpRight size={16} /></button></div><div className="banner-visual"><div className="banner-signal"><div /><div /><div /><div /><div /><div /></div><div className="banner-label"><Activity size={15} /> SMARTGLOVE / 2025—26</div></div></div></section>

      <section id="team" className="team section-shell section-pad"><SectionHeading eyebrow="07 · Our team" title="Four minds, one mission." >Meet the people turning a research question into a working system.</SectionHeading><div className="team-grid"><div className="supervisor"><span className="eyebrow">Research leadership</span><div className="person-avatar supervisor-avatar"><img src="/assets/nelum%20sir.jpg" alt="Mr. Nelum Chathuranga" /></div><h3>Mr. Nelum<br />Chathuranga</h3><p>Supervisor</p><div className="co-supervisor"><div className="person-avatar"><img src="/assets/samadhi%20sir.jpg" alt="Mr. Samadhi Rathnayake" /></div><div><h4>Mr. Samadhi Rathnayake</h4><p>Co-supervisor</p></div></div><span className="supervisor-line" /></div><div className="members">{team.map(([name, id, email, phone, image], i) => <article className="member" key={id}><div className="person-avatar"><img src={image} alt={name} /></div><div><h4>{name}</h4><span className="member-id">{id}</span><a href={`mailto:${email}`}>{email}</a><span>{phone}</span></div><span className="member-num">0{i + 1}</span></article>)}</div></div></section>

      <section id="contact" className="contact section-pad"><div className="section-shell contact-grid"><div><SectionHeading eyebrow="08 · Contact us" title="Let’s start a conversation." >Have a question about our research, or want to know more about SmartGlove? We would love to hear from you.</SectionHeading><a className="contact-email" href="mailto:abeysinghemahi@gmail.com">abeysinghemahi@gmail.com <ArrowUpRight size={18} /></a><div className="contact-details"><span><PhoneIcon />076 662 5010</span><span><MapPin size={17} />SLIIT, Malabe, Sri Lanka</span></div></div><div className="map-card"><div className="map-grid" /><div className="map-pin"><MapPin size={24} /></div><div className="map-label"><span>SLIIT Campus</span><small>Malabe, Sri Lanka</small></div><span className="map-coord">6.9147° N&nbsp;&nbsp; 79.9733° E</span></div></div></section>
    </main>
    <footer><div className="footer-main section-shell"><a className="brand" href="#home"><span className="brand-mark"><Activity size={18} /></span><span>smart<span>glove</span></span></a><p>Wearable intelligence for a safer tomorrow.</p><div className="socials"><a href="mailto:akilamanujith@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="#home" aria-label="Back to top"><ArrowUp size={17} /></a></div></div><div className="footer-bottom section-shell"><span>© 2025–26 SmartGlove Research Project. All rights reserved.</span><span>Built with care · SLIIT</span></div></footer>
  </div>
}

function PhoneIcon() { return <span className="phone-icon">+94</span> }

createRoot(document.getElementById('root')).render(<App />)
