import './about.scss';
import avatarImg from 'assets/images/Avatar.png';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { lang } = useLanguage();
  const contactEmail = 'trongpvn2211@gmail.com';
  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__avatar-wrap">
          <img src={avatarImg} alt="Pham Vu Ngoc Trong" className="about-hero__avatar" />
        </div>
        <div className="about-hero__text">
          <p className="about-hero__greeting">
            {lang === 'en' ? 'Hello,' : 'Xin chào,'}
          </p>
          <h1 className="about-hero__name">
            {lang === 'en' ? "I'm Pham Vu Ngoc Trong" : 'Tôi là Phạm Vũ Ngọc Trọng'}
          </h1>
          <p className="about-hero__tagline">
            {lang === 'en'
              ? 'Java & Web Developer · Building modern applications'
              : 'Java & Web Developer · Xây dựng các ứng dụng hiện đại'}
          </p>
        </div>
      </section>

      <section className="about-intro">
        <h2 className="about-intro__title">
          {lang === 'en' ? 'About Me' : 'Về bản thân tôi'}
        </h2>
        <p className="about-intro__body">
          {lang === 'en'
            ? "I'm a passionate Java and Web Developer who enjoys building modern web applications. I focus on clean code, user experience, and bringing ideas to life from backend to frontend. I enjoy working with technologies such as Java, Spring Boot, and modern web frameworks to create efficient and scalable systems. I am always eager to learn new technologies and continuously improve my development skills through practical projects. I also have an English proficiency equivalent to TOEIC 550+, which allows me to read technical documentation and learn from international development resources. When I'm not coding, I enjoy exploring new technologies."
            : 'Tôi là một Java & Web Developer đam mê xây dựng các ứng dụng web hiện đại. Tôi chú trọng vào clean code, trải nghiệm người dùng và biến ý tưởng thành sản phẩm hoàn chỉnh từ backend đến frontend. Tôi thích làm việc với các công nghệ như Java, Spring Boot và các framework web hiện đại để tạo ra hệ thống hiệu quả, dễ mở rộng. Tôi luôn sẵn sàng học hỏi công nghệ mới và cải thiện kỹ năng thông qua các dự án thực tế. Trình độ tiếng Anh của tôi tương đương TOEIC 550+, đủ để đọc tài liệu kỹ thuật và học hỏi từ nguồn quốc tế. Khi không viết code, tôi thường tìm hiểu thêm về những công nghệ mới.'}
        </p>
      </section>

      <section className="about-education">
        <h2 className="about-education__title">
          {lang === 'en' ? 'Education' : 'Học vấn'}
        </h2>
        <div className="about-education__grid">
          <article className="about-edu-card">
            <h3 className="about-edu-card__name">Thuy Loi University</h3>
            <p className="about-edu-card__detail">
              {lang === 'en' ? 'Information Technology' : 'Công nghệ thông tin'}
            </p>
            <p className="about-edu-card__period">
              {lang === 'en' ? '2022 - present' : '2022 - nay'}
            </p>
          </article>
          {/* <article className="about-edu-card">
            <h3 className="about-edu-card__name">Another Institution</h3>
            <p className="about-edu-card__detail">Certificate or Course</p>
            <p className="about-edu-card__period">Year</p>
          </article> */}
        </div>
      </section>

      <section className="about-contact">
        <h2 className="about-contact__title">
          {lang === 'en' ? 'Find me on' : 'Kết nối với tôi tại'}
        </h2>
        <div className="about-contact__email">
          <span className="about-contact__icon about-contact__icon--email" aria-hidden>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>
          <a href={`mailto:${contactEmail}`} className="about-contact__link">{contactEmail}</a>
        </div>
        <ul className="about-contact__social">
          {socialLinks.map(({ label, href, icon }) => (
            <li key={label} className="about-contact__social-item">
              <a href={href} target="_blank" rel="noopener noreferrer" className="about-contact__social-link" aria-label={label}>
                {icon === 'github' && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
                {icon === 'facebook' && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                {icon === 'instagram' && <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
