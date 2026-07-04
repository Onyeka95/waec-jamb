export default function DataDeletion() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#195682] mb-2">Data Deletion Instructions</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: July 1, 2026</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <p>
            You have the right to request deletion of your personal data from Prepzora at any time. This
            page explains what data we store and how to request that it be deleted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">1. What Data We Store</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your WhatsApp phone number and profile name</li>
            <li>Your name, school, and exam subjects (if provided)</li>
            <li>Exam practice activity: questions answered, scores, streaks, and XP</li>
            <li>Subscription and payment status (we do not store full card/bank details)</li>
            <li>Coupon code and referral information, where applicable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">2. How to Request Deletion</h2>
          <p>
            Send an email to{' '}
            <a href="mailto:Prepzora1@gmail.com" className="text-[#195682] underline">
              Prepzora1@gmail.com
            </a>{' '}
            with the subject line <strong>"Data Deletion Request."</strong> Please include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Your full name (optional, but helps us verify you)</li>
            <li>The WhatsApp phone number used to register on Prepzora</li>
            <li>The email address associated with your account, if applicable</li>
          </ul>
          <p className="mt-3">
            If you're a parent or guardian requesting deletion on behalf of a student under 18, please
            state this in your email along with the student's registered phone number.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">3. Processing Time</h2>
          <p>
            We will verify your request and delete your personal information within <strong>14 days</strong>.
            You will receive a confirmation email once the deletion is complete.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">4. What Gets Deleted vs. Retained</h2>
          <p>Upon a verified request, we will delete:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Your name, phone number, and profile information</li>
            <li>Your exam practice history, scores, streaks, and XP</li>
            <li>Your coupon/referral association</li>
          </ul>
          <p className="mt-3">We may retain limited records where required by law, such as:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Transaction/payment records needed for tax, accounting, or fraud-prevention purposes</li>
            <li>Records needed to resolve disputes or enforce our Terms of Service</li>
          </ul>
          <p className="mt-3">
            Any retained data is kept only as long as legally necessary and is not used for any other
            purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">5. Contact Us</h2>
          <p>
            Prepzora Technologies Limited<br />
            Email: <a href="mailto:Prepzora1@gmail.com" className="text-[#195682] underline">Prepzora1@gmail.com</a><br />
            Phone: <a href="tel:+2348069036428" className="text-[#195682] underline">+234 806 903 6428</a>
          </p>
        </section>
      </div>
    </main>
  );
}