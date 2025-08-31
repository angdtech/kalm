export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-[#31545F] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">Last updated March 17, 2025</p>

            <p>This privacy notice for Mi Self Care ('we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Download and use our mobile application (Mi Self Care), or any other application of ours that links to this privacy notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>

            <p><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services.</p>

            <h2 className="text-2xl font-bold text-[#31545F] mt-12 mb-6">SUMMARY OF KEY POINTS</h2>
            <p>This summary provides key points from our privacy notice. You can find more details below or by using the table of contents.</p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What personal information do we process?</strong> We may process personal information depending on how you interact with us and the Services.</li>
              <li><strong>Do we process sensitive personal information?</strong> No.</li>
              <li><strong>Do we receive information from third parties?</strong> No.</li>
              <li><strong>How do we process your information?</strong> To provide, improve, and manage Services, and for security and compliance.</li>
              <li><strong>When and with whom do we share personal information?</strong> In specific circumstances and with specific third parties.</li>
              <li><strong>How do we keep your information safe?</strong> Through technical and organisational measures.</li>
              <li><strong>What are your rights?</strong> Depending on your location, you may have privacy rights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#31545F] mt-12 mb-6">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li><a href="#section1" className="text-[#579989] hover:underline">What Information Do We Collect?</a></li>
              <li><a href="#section2" className="text-[#579989] hover:underline">How Do We Process Your Information?</a></li>
              <li><a href="#section3" className="text-[#579989] hover:underline">What Legal Bases Do We Rely On to Process Your Personal Information?</a></li>
              <li><a href="#section4" className="text-[#579989] hover:underline">When and With Whom Do We Share Your Personal Information?</a></li>
              <li><a href="#section5" className="text-[#579989] hover:underline">What Is Our Stance on Third-Party Websites?</a></li>
              <li><a href="#section6" className="text-[#579989] hover:underline">How Long Do We Keep Your Information?</a></li>
              <li><a href="#section7" className="text-[#579989] hover:underline">How Do We Keep Your Information Safe?</a></li>
              <li><a href="#section8" className="text-[#579989] hover:underline">Do We Collect Information From Minors?</a></li>
              <li><a href="#section9" className="text-[#579989] hover:underline">What Are Your Privacy Rights?</a></li>
              <li><a href="#section10" className="text-[#579989] hover:underline">Controls for Do-Not-Track Features</a></li>
              <li><a href="#section11" className="text-[#579989] hover:underline">Do We Make Updates to This Notice?</a></li>
              <li><a href="#section12" className="text-[#579989] hover:underline">How Can You Contact Us About This Notice?</a></li>
              <li><a href="#section13" className="text-[#579989] hover:underline">How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
            </ol>

            <h2 id="section1" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">1. WHAT INFORMATION DO WE COLLECT?</h2>
            
            <h3 className="text-xl font-semibold text-[#31545F] mt-8 mb-4">Personal information you disclose to us</h3>
            <p>We collect personal information that you voluntarily provide to us when you register, express interest in our Services, participate in app activities, or contact us.</p>
            
            <p><strong>Information includes:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Names</li>
              <li>Email addresses</li>
              <li>Passwords</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#31545F] mt-8 mb-4">Application Data</h3>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mobile device access (camera, etc.)</li>
              <li>Mobile device data (model, OS, device ID, IP address, etc.)</li>
              <li>Push notification preferences</li>
            </ul>

            <p>All information you provide must be accurate and updated.</p>

            <h3 className="text-xl font-semibold text-[#31545F] mt-8 mb-4">Information automatically collected</h3>
            <p>Includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address, browser/device type, OS, language, country</li>
              <li>Usage data (e.g., pages viewed, features used, time stamps, crash logs)</li>
            </ul>

            <h2 id="section2" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and manage accounts</li>
              <li>Communicate with you</li>
              <li>Improve, troubleshoot, and analyze our Services</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal requirements</li>
              <li>Protect vital interests when necessary</li>
            </ul>

            <h2 id="section3" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">3. WHAT LEGAL BASES DO WE RELY ON?</h2>
            <p>Under GDPR and UK GDPR, we rely on the following:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Consent (withdrawable at any time)</li>
              <li>Legal obligations</li>
              <li>Vital interests</li>
            </ul>

            <h2 id="section4" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">4. WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</h2>
            
            <h3 className="text-xl font-semibold text-[#31545F] mt-8 mb-4">Business Transfers</h3>
            <p>During mergers, acquisitions, or asset sales</p>

            <h3 className="text-xl font-semibold text-[#31545F] mt-8 mb-4">Offer Wall Providers</h3>
            <p>For virtual rewards (if used), including a unique identifier like your user ID</p>

            <h2 id="section5" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
            <p>We are not responsible for third-party websites, services, or apps that are not affiliated with us. You are encouraged to review their privacy policies separately.</p>

            <h2 id="section6" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p>We retain personal information as long as necessary for the purposes outlined or required by law. Once no longer needed, data is deleted or anonymised.</p>

            <h2 id="section7" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p>We use reasonable organisational and technical safeguards. However, no method is 100% secure. You use the Services at your own risk and should use a secure environment.</p>

            <h2 id="section8" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
            <p>No. We do not knowingly collect or market to children under 18. If we learn we have collected data from a minor, we will delete it.</p>

            <h2 id="section9" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your data</li>
              <li>Correct or delete your data</li>
              <li>Restrict or object to data processing</li>
              <li>Withdraw consent</li>
              <li>File a complaint with your local data protection authority</li>
            </ul>

            <h2 id="section10" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p>We do not currently respond to DNT signals, as there is no universal standard.</p>

            <h2 id="section11" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">11. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p>Yes. This notice may be updated periodically. You'll be notified of significant changes, and the latest version will always reflect the most recent revision date.</p>

            <h2 id="section12" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p>For questions about this privacy policy, please contact us through the app's support section.</p>

            <h2 id="section13" className="text-2xl font-bold text-[#31545F] mt-12 mb-6">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?</h2>
            <p>You can request to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Correct it</li>
              <li>Delete your account</li>
            </ul>
            <p>To do so, please contact us through the app's support section.</p>
          </div>
        </div>
      </div>
    </div>
  );
}