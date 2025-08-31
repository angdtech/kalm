export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <img 
                src="https://res.cloudinary.com/dseqiohhu/image/upload/v1756638141/IMG_2429_zj5wr6.png" 
                alt="Mi Self Care Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold text-[#31545F]">Mi Self Care</span>
            </a>
            
            <div className="flex gap-3">
              <a href="https://apps.apple.com/us/app/mi-affirmations-mindfulness/id6449880491" className="hidden sm:block">
                <button className="bg-[#579989] hover:bg-[#31545F] text-white text-xs px-3 py-2 rounded">
                  iOS
                </button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.mycompany.affirmapp&hl=en_GB" className="hidden sm:block">
                <button className="border border-[#579989] text-[#579989] hover:bg-[#579989] hover:text-white text-xs px-3 py-2 rounded">
                  Android
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#31545F] mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>Mi Self Care uses Apple's Standard Terms and Conditions for all app services and purchases.</p>
            
            <p>By downloading and using our app, you agree to Apple's Licensed Application End User License Agreement (EULA).</p>
            
            <div className="bg-[#F5F5F5] p-6 rounded-lg mt-8">
              <p className="font-semibold text-[#31545F] mb-4">View the complete terms:</p>
              <a 
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#579989] hover:bg-[#31545F] text-white px-6 py-3 rounded-lg transition-colors"
              >
                View Apple's Terms & Conditions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-[#31545F] mb-4">Contact Us</h3>
              <p>If you have questions about these terms, please contact us through the app's support section.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}