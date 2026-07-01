export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#195682] mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: July 1, 2026</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <p>
            Prepzora Technologies Limited ("Prepzora," "we," "us," or "our") operates a WhatsApp-based
            exam preparation service for WAEC and JAMB candidates in Nigeria. This Privacy Policy explains
            what information we collect, how we use it, and the choices you have.
          </p>
          <p className="mt-3">
            By using Prepzora through WhatsApp or our website, you agree to the collection and use of
            information as described here.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>WhatsApp account information:</strong> your phone number and WhatsApp profile name, used to identify and communicate with you.</li>
            <li><strong>Information you provide:</strong> your name, school, exam subjects, and coupon/referral codes when you register.</li>
            <li><strong>Learning activity data:</strong> quiz answers, scores, streaks, XP, time spent practicing, and topics attempted — used to track your progress and personalize practice.</li>
            <li><strong>Payment information:</strong> when you subscribe, payment is processed by a third-party payment provider. We do not store your full card or bank details — we receive confirmation of payment only.</li>
            <li><strong>Teacher/school dashboard data:</strong> if you're a teacher, we collect data about students who registered with your coupon code, including their activity and your earnings, to power the dashboard.</li>
            <li><strong>Technical data:</strong> basic usage data automatically provided by the WhatsApp Business Platform (such as message delivery status) and standard website analytics if you visit our landing page.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To deliver exam practice questions, track your streaks/XP, and show your progress.</li>
            <li>To process your subscription and manage billing.</li>
            <li>To operate the teacher/school dashboard and referral coupon system.</li>
            <li>To send service-related messages (e.g., daily practice reminders, streak alerts) via WhatsApp.</li>
            <li>To improve our question bank, product features, and overall service quality.</li>
            <li>To respond to support requests sent to us.</li>
          </ul>
          <p className="mt-3">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">3. Children and Minors</h2>
          <p>
            Prepzora is designed for secondary school students preparing for WAEC and JAMB, many of whom
            are under 18 years of age. We collect only the information necessary to provide the service
            (phone number, name, school, and exam practice activity) and do not knowingly collect
            sensitive personal data beyond this.
          </p>
          <p className="mt-3">
            We encourage parents, guardians, and schools to be involved in a student's use of Prepzora.
            Where a student registers through a school or teacher coupon code, the school/teacher is
            responsible for obtaining any necessary consent from parents or guardians in line with their
            own policies. A parent or guardian may contact us at any time to review, correct, or request
            deletion of their child's information using the contact details in Section 8.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">4. How We Share Information</h2>
          <p>We share information only with:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Meta / WhatsApp Business Platform:</strong> to deliver and receive messages, in line with Meta's own data terms.</li>
            <li><strong>Service providers:</strong> our hosting and database providers (Supabase, Railway, Vercel) and our payment processor, who process data on our behalf and are bound to protect it.</li>
            <li><strong>Schools/teachers:</strong> limited activity data (scores, streaks) for students registered under their coupon code, for the purpose of the teacher dashboard.</li>
            <li><strong>Legal requirements:</strong> if required by law or to protect the rights, safety, or property of Prepzora or our users.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">5. Data Storage and Security</h2>
          <p>
            Your data is stored in encrypted databases hosted by our infrastructure providers. We take
            reasonable technical and organizational measures to protect your information, but no method
            of transmission or storage is 100% secure. Data may be processed on servers located outside
            Nigeria by our hosting providers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">6. Your Rights</h2>
          <p>Under the Nigeria Data Protection Act/Regulation, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Request a copy of the personal information we hold about you.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Withdraw consent to non-essential communications (e.g., promotional messages) at any time.</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us using the details below.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will update the "Last updated" date
            above when we do. Continued use of Prepzora after changes means you accept the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle your data, contact us at:
          </p>
          <p className="mt-2">
            Prepzora Technologies Limited<br />
            Email: <a href="mailto:Prepzora1@gmail.com" className="text-[#195682] underline">Prepzora1@gmail.com</a><br />
            Phone: <a href="tel:+2348069036428" className="text-[#195682] underline">+234 806 903 6428</a>
          </p>
        </section>
      </div>
    </main>
  );
}