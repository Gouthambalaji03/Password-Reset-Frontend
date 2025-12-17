import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="min-h-[calc(100dvh-72px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="max-w-lg mx-auto text-center animate-slide-up">
                {/* 404 Number */}
                <div className="relative mb-6 sm:mb-8">
                    <h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-bold text-white/5 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
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
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                        Oops! The page you're looking for doesn't exist or has been moved.
                        Don't worry, let's get you back on track.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            to="/"
                            className="btn-primary px-6 sm:px-8 py-3 sm:py-3.5 text-white rounded-xl font-semibold inline-flex items-center justify-center space-x-2 text-base sm:text-lg active:scale-[0.98] transition-transform"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span>Go Home</span>
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 border border-white/10 hover:border-green-500/30 text-base sm:text-lg active:scale-[0.98]"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            <span>Go Back</span>
                        </button>
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
                    <Link
                        to="/login"
                        className="text-gray-500 hover:text-green-400 transition-colors inline-flex items-center space-x-2 text-sm sm:text-base"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                        </svg>
                        <span>Sign In</span>
                    </Link>
                    <Link
                        to="/register"
                        className="text-gray-500 hover:text-green-400 transition-colors inline-flex items-center space-x-2 text-sm sm:text-base"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                            />
                        </svg>
                        <span>Create Account</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
