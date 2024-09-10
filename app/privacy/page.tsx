import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Privacy Policy - Dann Dieulouard website',
    description: 'Learn about the privacy practices of Dann Dieulouard.',
  };

  export default function PrivacyPolicy() {
    return (
      <section className='pb-24 pt-40'>
        <div className='container max-w-3xl'>
          <h2 className='title'>Privacy policy</h2>
          <h3 className='mt-6'>Last updated: September 10, 2024</h3>

          <h6 className='mt-6'>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website "danndieulouard.com" or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</h6>

          <h6 className='mt-3'>1. Information We Collect</h6>
          <h6 className='mt-3'>We may collect information about you in a variety of ways. The information we may collect on the site includes:</h6>

          <h6 className='mt-3'>Personal Data</h6>
          <h6 className='mt-3'>Personally identifiable information, such as your name and email address, that you voluntarily give to us when you send a message from the site.</h6>

          <h6 className='mt-3'>2. Data Security</h6>
          <h6 className='mt-3'>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</h6>

          <h6 className='mt-3'>3. Your Rights and Choices</h6>
          <h6 className='mt-3'>You have the right to access, update, or delete the personal information we have collected about you.</h6>

          <h6 className='mt-3'>4. Cookies and Tracking Technologies</h6>
          <h6 className='mt-3'>We may use cookies, web beacons, and other tracking technologies to collect information about your interactions with the site, including browsing behavior and purchasing history. You can choose to disable cookies through your individual browser options. If you choose to disable cookies, some features of the site may not function properly.</h6>

          <h6 className='mt-3'>5. Third-Party Websites</h6>
          <h6 className='mt-3'>Our site may contain links to third-party websites and services that are not owned or controlled by us. We are not responsible for the privacy practices or the content of such third-party websites.</h6>

          <h6 className='mt-3'>6. Policy for Children</h6>
          <h6 className='mt-3'>We do not knowingly collect or solicit information from children under the age of 13. If we become aware that we have inadvertently received personal information from a child under the age of 13, we will delete such information from our records.</h6>

          <h6 className='mt-3'>7. Changes to This Privacy Policy</h6>
          <h6 className='mt-3'>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to review this Privacy Policy periodically to stay informed of any updates.</h6>
        </div>
      </section>
    )
  }