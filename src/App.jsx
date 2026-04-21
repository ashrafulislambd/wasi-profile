import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <>
      <Header />

      {/* ====== HERO ====== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">⚓ Officer Cadet · President Scout</span>
            <h1 className="hero-name">Wasi Arman Mostafa</h1>
            <p className="hero-tagline">
              Athlete, President Scout Awardee, International Cricketer, and Officer Cadet at the Bangladesh Marine Academy — a life defined by excellence, service, and high-stakes performance.
            </p>
          </div>
          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src="/images/profile/main.jpg"
              alt="Wasi Arman Mostafa"
            />
          </div>
        </div>
      </section>

      <div className="page-container">

        {/* ====== BIOGRAPHY ====== */}
        <section className="section" id="biography">
          <div className="section-header">
            <p className="section-label">About</p>
            <h2 className="section-title">Biography</h2>
            <div className="section-divider"></div>
          </div>

          <div className="bio-grid">
            <div className="bio-card">
              <span className="bio-card-label">Name</span>
              <span className="bio-card-value">Wasi Arman Mostafa</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Born</span>
              <span className="bio-card-value">24 January 2004</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Nickname</span>
              <span className="bio-card-value">Ohi</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Religion</span>
              <span className="bio-card-value">Islam</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Awards</span>
              <span className="bio-card-value">President's Scout Award</span>
            </div>
            <div className="bio-card">
              <span className="bio-card-label">Main Interests</span>
              <span className="bio-card-value">Cricket, Scouting, Writing, Social Works</span>
            </div>
          </div>

          <div className="prose" style={{ marginTop: '2.5rem' }}>
            <p>
              Wasi Arman Mostafa is a distinguished leader whose life is defined by a rare commitment to excellence, service, and high-stakes performance. His journey is anchored by one of the most significant honors a young leader can receive: the <strong>President's Scout Award</strong>. Conferred by the Highly Respected President of the People's Republic of Bangladesh. This foundation of command was established early in his career as the <strong>"Senior Patrol Leader"</strong> of the esteemed <strong>"Adamjee Cantonment Public School Scout Group"</strong>.
            </p>
            <p>
              Wasi's drive for excellence extends far beyond the scouting field and into the arena of international athletics. As a cricketer, he transitioned to the global stage during the <strong>"5th DRM Cup U19 International Cricket Tournament in India (2022)"</strong>, representing his nation. His ability to perform under the pressure of international competition mirrors the discipline he now carries into his professional journey as an <strong>"Officer Cadet"</strong> at the <strong>"Bangladesh Marine Academy"</strong>.
            </p>
            <p>
              An active member of <strong>ATAS-BD</strong> (Association of Top Achiever Scouts), he collaborates with a network of high-achievers to drive positive change. His commitment to society is further evidenced by his role as a dedicated social worker, reflecting a core philosophy of service above self.
            </p>
          </div>

          <Gallery
            columns={4}
            links={[
              ["/images/main/DSC_1525.jpg", ""],
              ["/images/main/IMG-20221223-WA0127.jpg", ""],
              ["/images/main/IMG-20230615-WA0021.jpg", ""],
              ["/images/main/IMG20230325155146.jpg", ""],
            ]}
          />
        </section>

        {/* ====== PROFESSIONAL PROFILE ====== */}
        <section className="section" id="professional">
          <div className="section-header">
            <p className="section-label">Career</p>
            <h2 className="section-title">Professional Profile</h2>
            <div className="section-divider"></div>
          </div>

          <div className="profile-card">
            <img
              className="profile-card-image"
              src="/images/professional_profile/main.jpg"
              alt="Officer Cadet Wasi Arman Mostafa"
            />
            <div className="profile-card-content">
              <h3>Officer Cadet — Bangladesh Marine Academy</h3>
              <div className="prose">
                <p>
                  Wasi Arman Mostafa is an Officer Cadet currently undergoing professional maritime training at the <strong>Bangladesh Marine Academy</strong>. He is pursuing a <strong>Bachelor of Maritime Science (Nautical)</strong> under the affiliation of <strong>Bangladesh Maritime University (BMU)</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Background */}
          <div style={{ marginTop: '3rem' }}>
            <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Academic Background</h3>
            <div className="section-divider"></div>

            <div className="academic-timeline">
              <div className="academic-item">
                <span className="status-badge">🎓 In Progress</span>
                <h4>Bachelor of Maritime Science (Nautical)</h4>
                <p><strong>Institution:</strong> Bangladesh Marine Academy</p>
                <p><strong>Affiliation:</strong> Bangladesh Maritime University</p>
              </div>

              <div className="academic-item">
                <span className="academic-item-badge">2023</span>
                <h4>Higher Secondary Certificate (HSC)</h4>
                <p><strong>Institution:</strong> BAF Shaheen College, Kurmitola</p>
                <span className="gpa-badge">⭐ GPA 5.00 / 5.00</span>
              </div>

              <div className="academic-item">
                <span className="academic-item-badge">2021</span>
                <h4>Secondary School Certificate (SSC)</h4>
                <p><strong>Institution:</strong> Adamjee Cantonment Public School</p>
                <span className="gpa-badge">⭐ GPA 5.00 / 5.00</span>
              </div>
            </div>
          </div>
        </section>

        {/* ====== SCOUTING ====== */}
        <section className="section" id="scouting">
          <div className="section-header">
            <p className="section-label">Leadership</p>
            <h2 className="section-title">Scouting</h2>
            <div className="section-divider"></div>
          </div>

          <div className="content-block">
            <div>
              <div className="feature-image-container">
                <img className="feature-image" src="/images/scouting/photo1.jpg" alt="President Scout Award Ceremony" />
              </div>
            </div>
            <div className="prose">
              <p>
                Wasi Arman Mostafa is an exemplar of leadership and service, distinguished as a recipient of the 2020 <strong>"President's Scout Award"</strong>. Having honed his command as the <strong>"Senior Patrol Leader"</strong> of the <strong>"Adamjee Cantonment Public School Scout Group"</strong>, he has since ascended to the esteemed ranks of <strong>ATAS-BD</strong>. His commitment to the movement is further cemented by his recent appointment as an <strong>"Executive Member"</strong> of the ATAS-BD <strong>"Programme Sub-Committee"</strong> for the 2025–2027 term.
              </p>
              <p style={{ marginTop: '1.5rem' }}>
                <strong>"Association Of Top Achievers Scouts - Bangladesh" (ATAS BD)</strong>
                <br />
                Membership No: <strong>ATAS-BD #967</strong>
              </p>
            </div>
          </div>

          <Gallery
            columns={3}
            links={[
              ["/images/scouting/IMG_20200228_120753.jpg", "Scout Camp"],
              ["/images/scouting/7b30a87a.jpg", ""],
              ["/images/scouting/DSC_1525.jpg", ""],
              ["/images/scouting/FB_IMG_1566724156047.jpg", ""],
              ["/images/scouting/IMG-20230129-WA0013.jpg", ""],
              ["/images/scouting/IMG-20230209-WA0002.jpg", ""],
            ]}
          />
        </section>

        {/* ====== ATHLETIC ACHIEVEMENTS ====== */}
        <section className="section" id="athletics">
          <div className="section-header">
            <p className="section-label">Endurance</p>
            <h2 className="section-title">Athletic Achievements</h2>
            <div className="section-divider"></div>
          </div>

          <div className="content-block">
            <div>
              <div className="feature-image-container">
                <img className="feature-image" src="/images/athletics/photo2.jpg" alt="Marathon Running" />
              </div>
              <div className="feature-image-container" style={{ marginTop: '1rem' }}>
                <img className="feature-image" src="/images/athletics/photo1.jpg" alt="Marathon Achievement" />
              </div>
            </div>
            <div>
              <div className="prose" style={{ marginBottom: '1.5rem' }}>
                <p>
                  Wasi is a professional long-distance runner with a proven record of endurance and mental fortitude. He has successfully competed in various marathons and distance challenges.
                </p>
              </div>

              <div className="run-categories">
                {/* Ultra */}
                <div className="run-category">
                  <div className="run-category-header">
                    <span className="run-category-badge ultra">Ultra-Endurance</span>
                    <h4>53.3 KM</h4>
                  </div>
                  <ul className="run-list">
                    <li>Inspiring Bangladesh Victory Challenge - 2023 (53.3 Kilometers)</li>
                  </ul>
                </div>

                {/* Half Marathon */}
                <div className="run-category">
                  <div className="run-category-header">
                    <span className="run-category-badge half">Half-Marathon</span>
                    <h4>21 KM</h4>
                  </div>
                  <ul className="run-list">
                    <li>Bangabandhu Sheikh Mujib Dhaka Marathon 2024 by Bangladesh Army (21 KM)</li>
                    <li>Joy Bangla Marathon by Bangladesh Police Athletics &amp; Cycling Club - 2024 (21 KM)</li>
                  </ul>
                </div>

                {/* Mid-Distance */}
                <div className="run-category">
                  <div className="run-category-header">
                    <span className="run-category-badge mid">Mid-Distance</span>
                    <h4>5 – 15 KM</h4>
                  </div>
                  <ul className="run-list">
                    <li>UCR Half Marathon 2024 (15 KM)</li>
                    <li>DURC 10K VR 2024 (10 KM)</li>
                    <li>Smart Bangladesh Run 2024 (7.5 KM)</li>
                    <li>UCR Half Marathon 2024 Edition-3 (7.5 KM)</li>
                    <li>Sheikh Russel Half Marathon 2023 (7.5 KM)</li>
                    <li>Shaheed Abu Sayeed Fundraising Virtual Run 2024 (5 KM)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== FOOTBALL ====== */}
        <section className="section" id="football">
          <div className="section-header">
            <p className="section-label">Sports</p>
            <h2 className="section-title">Football</h2>
            <div className="section-divider"></div>
          </div>

          <div className="content-block">
            <div className="feature-image-container">
              <img className="feature-image" src="/images/football/photo1.jpg" alt="Football Competition" />
            </div>
            <div className="prose">
              <p>
                During the <strong>2018–2019 season</strong>, demonstrated his versatility as a utility player for the <strong>Adamjee Cantonment Public School Inter-House Annual Football Competition</strong>, effectively transitioning between defensive and midfield roles.
              </p>
            </div>
          </div>

          <Gallery
            columns={3}
            links={[
              ["/images/football/received_384594492216451.jpeg", "Football"],
              ["/images/football/received_613208062540116.jpeg", "Football"],
              ["/images/football/FB_IMG_1569638058878.jpg", "Football"],
            ]}
          />
        </section>

        {/* ====== CRICKET ====== */}
        <section className="section" id="cricket">
          <div className="section-header">
            <p className="section-label">International</p>
            <h2 className="section-title">Cricket</h2>
            <div className="section-divider"></div>
          </div>

          <div className="content-block">
            <div>
              <div className="feature-image-container">
                <img className="feature-image" src="/images/cricket/photo1.jpg" alt="DRM Cup Trophy" />
              </div>
            </div>
            <div>
              <div className="info-table">
                <span className="info-table-label">Team</span>
                <span className="info-table-value">Aswad Sports Cricket Academy, Bangladesh</span>
                <span className="info-table-label">Batting Style</span>
                <span className="info-table-value">Right Handed</span>
                <span className="info-table-label">Bowling Style</span>
                <span className="info-table-value">Right Arm Off-Break</span>
              </div>

              <div className="prose" style={{ marginTop: '1.5rem' }}>
                <p>
                  <strong>Professional Ascent &amp; Technical Evolution</strong> — Wasi Arman Mostafa's professional cricketing journey commenced in 2020 when he joined the <strong>Aswad Sports Cricket Club</strong>. Initially making his mark as a Right-Arm Off-Break bowler, transitioning into all-rounder.
                </p>
                <p>
                  During the <strong>PKCSBD Talent Hunt (Season 1)</strong> in 2020, he achieved the Division Winner Certificate. His consistent performance propelled him to the <strong>National Level Trials</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="achievement-list" style={{ marginTop: '2rem' }}>
            <div className="achievement-item">
              <div className="achievement-icon gold">🏆</div>
              <div className="achievement-content">
                <h4>International Stage</h4>
                <p>Made his international debut at the <strong>5th DRM Cup U19 Men's Cricket Tournament</strong> in Adra, India. Organised by the South Eastern Railway Sports Association.</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon green">🏏</div>
              <div className="achievement-content">
                <h4>Domestic Campaigns</h4>
                <p>Featured prominently in the <strong>"Bangabandhu Gold Cup T20 Cricket Tournament, 2022"</strong> in Gopalganj and the <strong>"Sheikh Russel Memorial Cricket Tournament, 2022"</strong> in Dhaka.</p>
              </div>
            </div>
          </div>

          <Gallery
            columns={4}
            links={[
              ["/images/cricket/photo2.jpg", ""],
              ["/images/cricket/photo3.jpg", "DRM Cup India"],
              ["/images/cricket/photo4.jpg", "Team Photo"],
              ["/images/cricket/FB_IMG_1647791072602.jpg", ""],
              ["/images/cricket/IMG_20220308_114942.jpg", ""],
              ["/images/cricket/IMG-20220820-WA0015.jpg", ""],
              ["/images/cricket/IMG-20220925-WA0001.jpg", ""],
              ["/images/cricket/IMG-20221221-WA0064.jpg", ""],
              ["/images/cricket/IMG-20221225-WA0042.jpg", ""],
              ["/images/cricket/received_772800450493571.jpeg", ""],
              ["/images/cricket/received_1115769589177958.jpeg", ""],
              ["/images/cricket/received_1742059092953220.jpeg", ""],
            ]}
          />
        </section>

        {/* ====== CO-CURRICULAR ACTIVITIES ====== */}
        <section className="section" id="activities">
          <div className="section-header">
            <p className="section-label">Engagement</p>
            <h2 className="section-title">Co-Curricular Activities</h2>
            <div className="section-divider"></div>
          </div>

          <div className="content-block">
            <div>
              <div className="feature-image-container">
                <img className="feature-image" src="/images/cocurriculumn/photo1.jpg" alt="Co-curricular" />
              </div>
            </div>
            <div>
              <ul className="activities-list">
                <li>Founding President of Conglomerate (2020-2022).</li>
                <li>Joint Secretary of BAF Shaheen College, Kurmitola Writers Club.</li>
                <li>Former Member of Adamjee School Debating Club.</li>
              </ul>
            </div>
          </div>

          <Gallery
            columns={4}
            links={[
              ["/images/cocurriculumn/DSC_1523.jpg", ""],
              ["/images/cocurriculumn/FB_IMG_1553681225393.jpg", ""],
              ["/images/cocurriculumn/IMG-20220820-WA0011.jpg", ""],
              ["/images/cocurriculumn/IMG-20221030-WA0003.jpg", ""],
              ["/images/cocurriculumn/IMG-20221218-WA0045.jpg", ""],
              ["/images/cocurriculumn/IMG-20221219-WA0038.jpg", ""],
              ["/images/cocurriculumn/IMG-20230321-WA0026.jpg", ""],
              ["/images/cocurriculumn/IMG-20230615-WA0007.jpg", ""],
              ["/images/cocurriculumn/IMG-20230615-WA0021.jpg", ""],
              ["/images/cocurriculumn/IMG-20230623-WA0005.jpg", ""],
              ["/images/cocurriculumn/received_355136156457701.jpeg", ""],
            ]}
          />
        </section>

        {/* ====== SPONSOR ====== */}
        <section className="section" id="sponsor">
          <div className="section-header">
            <p className="section-label">Partner</p>
            <h2 className="section-title">Sponsor</h2>
            <div className="section-divider"></div>
          </div>

          <div className="sponsor-card">
            <img className="sponsor-logo" src="/images/sponsor_logo.jpg" alt="Arafin Sports Limited" />
            <div className="sponsor-info">
              <h4>Arafin Sports Limited</h4>
              <p><strong>Owner:</strong> Shams Arafin Pritom</p>
              <p>Road - 17, Sector - 4, Farid Tower, Azampur Railgate, Azampur, Uttara</p>
              <a
                className="sponsor-link"
                href="https://www.facebook.com/share/17rSexoiFX/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🛒 Shop Now on Facebook
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* ====== FOOTER ====== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span>⚓</span>
            <span>Wasi Arman Mostafa</span>
          </div>
          <p className="footer-text">
            © 2020–2025 Wasi Arman Mostafa — Developed by{" "}
            <a href="https://messenger.com/t/acps.ashraful" target="_blank" rel="noopener noreferrer">iRonic</a>
          </p>
        </div>
      </footer>
    </>
  );
}
