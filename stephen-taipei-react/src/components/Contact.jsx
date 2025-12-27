import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call when backend is ready
    try {
      // For now, open mailto link as fallback
      const subject = encodeURIComponent(`Contact from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.location.href = `mailto:support@stephen.taipei?subject=${subject}&body=${body}`;

      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const isChinese = language?.toLowerCase().startsWith('zh');

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
            <p className="text-gray-600 mb-8 text-lg">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t.contact.email}</p>
                  <a href="mailto:support@stephen.taipei" className="text-gray-900 font-semibold hover:text-primary transition-colors">
                    support@stephen.taipei
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t.contact.location}</p>
                  <p className="text-gray-900 font-semibold">{t.contact.locationValue}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/tw-stephen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/stephen-chuang-taipei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.formName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none bg-white"
                  placeholder={t.contact.formNamePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.formEmail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none bg-white"
                  placeholder={t.contact.formEmailPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t.contact.formMessage}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none bg-white"
                  placeholder={t.contact.formMessagePlaceholder}
                ></textarea>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {isChinese ? '郵件客戶端已開啟，請完成發送！' : 'Email client opened, please complete sending!'}
                  </span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {isChinese ? '發送失敗，請直接發送郵件至 support@stephen.taipei' : 'Failed to send. Please email directly to support@stephen.taipei'}
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {isChinese ? '處理中...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.sendMessage}
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
