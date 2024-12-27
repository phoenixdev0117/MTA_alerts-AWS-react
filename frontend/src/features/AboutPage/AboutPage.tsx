
import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">About</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">App Overview</h2>
        <p className="text-lg text-gray-700">
          Service to subscribe to MTA alerts for particular line or stop. Alerts
          are viewable on the application or sent to your phone.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">GitHub</h2>
        <a
          href="https://github.com/MackHalliday/subscribe_to_MTA_alerts"
          className="text-lg text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-github"></i> GitHub Project
        </a>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Connect with Me</h2>
        <a
          href="https://www.linkedin.com/in/mackhalliday/"
          className="text-lg text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-linkedin"></i> LinkedIn Profile
        </a>
      </section>
    </div>
  )

}

export default AboutPage
