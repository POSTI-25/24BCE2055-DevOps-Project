import { useState } from 'react';
import './App.css';

const sections = [
  {
    id: 'news',
    label: 'News',
    title: 'Latest News',
    content:
      'Company-wide updates, leadership notes, and internal announcements are published here for all employees.',
  },
  {
    id: 'policies',
    label: 'HR Policies',
    title: 'HR Policies',
    content:
      'Find leave rules, code of conduct guidance, and employee support references in one place.',
  },
  {
    id: 'calendar',
    label: 'Calendar',
    title: 'Holiday Calendar',
    content:
      'View upcoming holidays, maintenance windows, and important company dates for the current quarter.',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('news');
  const activeItem = sections.find((section) => section.id === activeSection);

  return (
    <div className="App">
      <main className="portal-shell">
        <header className="portal-header">
          <p className="eyebrow">Company Intranet Portal</p>
          <h1>Internal updates in one simple place</h1>
          <p className="lead">
            Access news, HR policies, and holiday information from a single lightweight portal.
          </p>
        </header>

        <nav className="tab-list" aria-label="Portal sections">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`tab-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <section className="content-card" aria-live="polite">
          <p className="section-label">{activeItem.label}</p>
          <h2>{activeItem.title}</h2>
          <p>{activeItem.content}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
