// src/PrivacyPolicy.js
import React from 'react';
import './PrivacyPolicy.css'; // Optional: for styling the page

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
        <div align="right">
        <button><a href='/'>home</a></button>
        </div>
      <h1>Privacy Policy</h1>
      <p>Effective date: February 3, 2025</p>

      <section>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our blood bank services. We are committed to ensuring your privacy and the security of your personal information.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We collect different types of information to provide our services and improve your experience. This includes:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, phone number, blood type, medical history, etc.</li>
          <li><strong>Health Information:</strong> Blood donation history, eligibility details, and any medical conditions that may affect your ability to donate blood.</li>
          <li><strong>Usage Data:</strong> Information on how you use our website or mobile app, such as pages visited, interactions, and donation scheduling details.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance user experience and for analytics purposes (such as tracking user activity on our site).</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Process your blood donation and medical history.</li>
          <li>Schedule blood donation appointments and notify you about blood drives or events.</li>
          <li>Provide you with personalized content, such as reminders or eligibility checks.</li>
          <li>Improve the functionality and security of our website and mobile app.</li>
        </ul>
      </section>

      <section>
        <h2>How We Protect Your Information</h2>
        <p>
          We use industry-standard security measures to protect your personal and health-related information. This includes encryption, secure servers, and data access controls. However, no system is completely secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Sharing Your Information</h2>
        <p>
          We will not sell, rent, or share your personal information with third parties, except in the following circumstances:
        </p>
        <ul>
          <li>With medical professionals or organizations in case of emergencies, to facilitate blood donation.</li>
          <li>As required by law, such as complying with government health regulations or responding to subpoenas.</li>
        </ul>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access and review your personal and health information.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Request deletion of your personal data (subject to legal and operational requirements).</li>
          <li>Withdraw consent for the collection of your information (where applicable).</li>
        </ul>
        <p>If you wish to exercise any of these rights, please contact us at [email/contact information].</p>
      </section>

      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we update this policy, we will post the revised version on this page with a new effective date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          Email: [akash@gmail.com] <br />
          Phone: [9359994554] <br />
          Address: [CDAC, Pune]
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
