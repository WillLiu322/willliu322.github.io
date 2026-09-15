import { ArrowUpRight } from 'lucide-react';
import { publications } from './publications';

const awards = [
  ['Outstanding Graduate of Liaoning Province', '2026'],
  ['National Scholarship', '2024, 2025'],
  ['First-class Academic Scholarship', '2019, 2024, 2025'],
  ['Second-class Academic Scholarship', '2023'],
  ['Interdisciplinary Contest in Modeling · Meritorious Winner', '2021'],
  ['Liaoning Physics Academic Competition · First Prize', '2019'],
  ['Liaoning Physics Experiment Competition · First Prize', '2019'],
  ['National College Mathematics Competition · Third Prize', '2019'],
  [
    'Liaoning Electronic Design Competition · Second Prize (Flight Control)',
    '2019',
  ],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="academic-page" id="top">
        <nav className="section-nav" aria-label="Page sections">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#honors">Honors</a>
        </nav>
        <main id="main" className="academic-content">
          <section
            className="profile-intro"
            id="about"
            aria-labelledby="profile-name"
          >
            <div className="profile-media">
              <img
                className="profile-photo"
                src="/images/wei-liu.png"
                width="1531"
                height="2041"
                alt="Wei Liu"
                fetchPriority="high"
              />
              <div className="profile-links" id="contact">
                <a href="mailto:liuw8@mails.neu.edu.cn">Email</a>
                <a
                  href="https://scholar.google.com/citations?user=NL42oisAAAAJ&hl=zh-CN"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar
                </a>
                <a
                  href="https://github.com/WillLiu322"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="profile-bio">
              <h1 id="profile-name">
                Wei Liu <span lang="zh-CN">刘威</span>
              </h1>
              <p>
                I am a Research Assistant at{' '}
                <a
                  href="https://www.hkust-gz.edu.cn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Hong Kong University of Science and Technology (Guangzhou)
                </a>
                , where I have been working since August 2026.
              </p>
              <p>
                I received my master’s degree in Control Engineering from{' '}
                <a
                  href="https://www.neu.edu.cn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Northeastern University
                </a>{' '}
                in June 2026, advised by{' '}
                <a
                  href="https://graduate.neuq.edu.cn/info/1136/3299.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prof. Zhenyu Gao
                </a>{' '}
                and{' '}
                <a
                  href="https://graduate.neuq.edu.cn/info/1402/5316.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prof. Ge Guo
                </a>
                .
              </p>
            </div>
          </section>
          <section id="publications">
            <div className="heading-row">
              <h2>Publications</h2>
              <span>5 journal articles · 1 conference paper</span>
            </div>
            <div className="papers">
              {publications.map((paper) => (
                <article className="paper" key={paper.url}>
                  <div className="paper-visual">
                    <img
                      src={paper.image?.src ?? '/images/paper-blank.svg'}
                      alt={paper.image?.alt ?? ''}
                      className={paper.image ? undefined : 'paper-placeholder'}
                      width="320"
                      height="180"
                      loading="lazy"
                    />
                    <span className="venue-label">
                      {paper.tag} <span>{paper.year}</span>
                    </span>
                  </div>
                  <div className="paper-body">
                    <h3>
                      <a href={paper.url} target="_blank" rel="noreferrer">
                        {paper.title}
                      </a>
                    </h3>
                    <p className="paper-authors">
                      {paper.authors.split('Wei Liu').map((part, i) => (
                        <span key={i}>
                          {i > 0 && <strong>Wei Liu</strong>}
                          {part}
                        </span>
                      ))}
                    </p>
                    <p className="paper-venue">{paper.venue}</p>
                    <p className="paper-details">{paper.details}</p>
                    <div className="paper-actions">
                      <a
                        className="paper-button"
                        href={paper.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={'Publisher page: ' + paper.title}
                      >
                        Paper <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                      {paper.note && (
                        <span
                          className={
                            paper.note.includes('finalist')
                              ? 'paper-note award-note'
                              : 'paper-note'
                          }
                        >
                          {paper.note}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="experience">
            <h2>Research Experience</h2>
            <article className="experience">
              <div className="entry-heading">
                <h3>HKUST (Guangzhou)</h3>
                <span>Aug 2026–Present</span>
              </div>
              <p className="entry-role">Research Assistant</p>
            </article>
            <article className="experience">
              <div className="entry-heading">
                <h3>Central South University</h3>
                <span>May–Aug 2025</span>
              </div>
              <p className="entry-role">Research Assistant</p>
            </article>
          </section>
          <section id="education">
            <h2>Education</h2>
            <article className="education">
              <div className="entry-heading">
                <h3>Northeastern University</h3>
                <span>Sep 2023–Jun 2026</span>
              </div>
              <p>Master’s degree in Control Engineering</p>
            </article>
            <article className="education">
              <div className="entry-heading">
                <h3>Dalian Polytechnic University</h3>
                <span>Sep 2018–Jun 2022</span>
              </div>
              <p>Bachelor’s degree in Automation</p>
            </article>
          </section>
          <section id="honors">
            <h2>Honors & Awards</h2>
            <ul className="honors-list">
              {awards.map(([name, years]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span className="honor-years">{years}</span>
                </li>
              ))}
            </ul>
          </section>
          <footer>
            <span>© 2026 Wei Liu</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </>
  );
}
