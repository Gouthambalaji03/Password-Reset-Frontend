import { Link } from 'react-router-dom';

const Home = () => {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <div className="min-h-[calc(100vh-72px)] min-h-[calc(100dvh-72px)] flex flex-col px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center py-8 sm:py-12 lg:py-16">
                <div className="w-full max-w-4xl mx-auto text-center animate-slide-up">
                    {/* Icon */}
                    <div className="mb-6 sm:mb-8 inline-flex">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl sm:rounded-3xl flex items-center justify-center animate-float shadow-lg shadow-green-500/30">
                            <svg
                                className="w-10 h-10 sm:w-14 sm:h-14 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                        Secure Password
                    </h1>


                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                        {isAuthenticated ? (
                            <div className="glass-card px-6 sm:px-8 py-4 rounded-2xl">
                                <div className="flex items-center justify-center space-x-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-gray-200 font-medium text-sm sm:text-base">
                                        You are securely logged in
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/register"
                                    className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-2xl active:scale-[0.98] transition-transform"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    to="/login"
                                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-green-500/30 active:scale-[0.98]"
                                >
                                    Sign In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-4 sm:py-6 text-center">
                <p className="text-gray-500 text-xs sm:text-sm">
                    Built with React & Tailwind CSS 
                </p>
            </footer>
        </div>
    );
};

export default Home;
