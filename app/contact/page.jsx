"use client";
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {

  return (
    <div className="contact-subpage" style={{ paddingTop: '100px' }}>
      <section className="subpage-hero" style={{ padding: '60px 0 20px' }}>
        <div className="wrap center">
          <span className="eyebrow">School Partnerships</span>
          <h1 className="hero-title">LET'S BUILD AN INNOVATIVE FUTURE.</h1>
          <p className="hero-sub center" style={{ margin: '0 auto 20px' }}>
            We work directly with school management, principals, and educators to establish practical innovation ecosystems.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
