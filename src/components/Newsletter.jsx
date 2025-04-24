import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import footerbg from '../assets/bg-shadow.png';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('newsletterEmail');
    if (storedEmail) {
      setSubscribedEmail(storedEmail);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address!');
      return;
    }

    localStorage.setItem('newsletterEmail', email);
    setSubscribedEmail(email);
    toast.success('Subscribed successfully!');
    setEmail('');
  };

  const handleUnsubscribe = () => {
    localStorage.removeItem('newsletterEmail');
    setSubscribedEmail('');
    toast.info('You have been unsubscribed.');
  };

  return (
    <div className="relative p-6 z-50 w-full px-4 sm:px-8 md:px-8 -mt-20 border-2 border-gray-300 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
      <div
        style={{
          backgroundImage: `url(${footerbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="bg-gray-100 h-70 bg-opacity-80 rounded-2xl shadow-lg p-6 sm:p-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Join Our Newsletter
          </h2>

          {subscribedEmail ? (
            <>
              <p className="text-base sm:text-lg mb-4 text-gray-800">
                ✅ Welcome back, <strong>{subscribedEmail}</strong>! You are already subscribed.
              </p>
              <button
                onClick={handleUnsubscribe}
                className="mt-4 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition-all"
              >
                Unsubscribe
              </button>
            </>
          ) : (
            <>
              <p className="text-base sm:text-lg mb-6 text-gray-800">
                Get the latest updates and team news straight to your inbox!
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-2/3 px-4 py-3 text-sm rounded-xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
