import { Link } from 'react-router-dom';

const Home = () => {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <div className="min-h-[calc(100vh-72px)] flex flex-col">
            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="max-w-4xl mx-auto text-center animate-slide-up">
                    {/* Icon */}
                    <div className="mb-8 inline-flex">
                        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex items-center justify-center animate-float shadow-lg shadow-red-500/30">
                            <svg
                                className="w-14 h-14 text-white"
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Secure Password
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">Management Made Simple</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Protect your digital life with our secure password management solution.
                        Easy to use, impossible to crack.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {isAuthenticated ? (
                            <div className="glass-card px-8 py-4 rounded-2xl">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <span className="text-gray-200 font-medium">You are securely logged in</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/register"
                                    className="btn-primary px-8 py-4 text-white rounded-2xl font-semibold text-lg shadow-2xl"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    to="/login"
                                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-red-500/30"
                                >
                                    Sign In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="px-4 py-6 text-center">
                <p className="text-gray-500 text-sm">
                    Built with React & Tailwind CSS
                </p>
            </footer>
        </div>
    );
};

export default Home;
