export default function RefundPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#195682] mb-2">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: July 17, 2026</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <p>
            This Refund Policy explains how refunds work for Prepzora's paid subscription. We recommend
            trying our Free Tier first to confirm Prepzora is right for you before subscribing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">1. Subscription Charges</h2>
          <p>
            The Full Access plan is at ₦2,000 per month. 
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">2. General Policy</h2>
          <p>
            Because Prepzora provides immediate digital access to unlimited practice questions once payment is
            confirmed, subscription fees are generally non-refundable once a month's payment has been made and
            access granted.
        
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">3. When We Do Offer Refunds</h2>
          <p>We will consider a refund if:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>You were charged in error or charged more than once for the same period (duplicate charge).</li>
            <li>A technical issue on our end prevented you from accessing the service for a significant part of your subscription period, and we were unable to resolve it.</li>
            <li>You contact us within 48 hours of an accidental subscription with little to no usage.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">4. How to Request a Refund</h2>
          <p>
            Message us on WhatsApp or email{' '}
            <a href="mailto:hello@prepzora.com" className="text-[#195682] underline">hello@prepzora.com</a>{' '}
            with your registered phone number and the reason for your request. We aim to respond within
            3–5 business days.
          </p>
        </section>

        <section>
        <h2 className="text-xl font-semibold text-[#195682] mb-3">5. No Auto-Renewal</h2>
            <p>
              Prepzora subscriptions are manual and month-to-month — we do not automatically charge or renew your
              subscription. Each month, you choose whether to subscribe again. If you don't wish to continue, simply
              don't make the next month's payment; your Full Access will end when the current paid period expires
              and your account will return to the Free Tier.
            </p>
      </section>

        <section>
          <h2 className="text-xl font-semibold text-[#195682] mb-3">6. Contact Us</h2>
          <p>
            Prepzora Technologies Limited<br />
            Email: <a href="mailto:hello@prepzora.com" className="text-[#195682] underline">hello@prepzora.com</a><br />
            Phone: <a href="tel:+2348069036428" className="text-[#195682] underline">+234 806 903 6428</a>
          </p>
        </section>
      </div>
    </main>
  );
}