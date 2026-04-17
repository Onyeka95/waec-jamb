export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#25D366] rounded-2xl flex items-center justify-center text-white text-xl">📚</div>
            <span className="font-bold text-white text-xl">WAEC/JAMB Coach</span>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>© 2026 WAEC/JAMB Practice Coach. All Rights Reserved.</p>
            <p className="mt-1">Built for Nigerian Students</p>
            {/* <p className="text-xs mt-4 opacity-60">Confidential • Prepared for Onyeka Innocent</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}