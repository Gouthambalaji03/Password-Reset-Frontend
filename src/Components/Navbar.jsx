import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('token');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    const NavLink = ({ to, children }) => (
        <Link
            to={to}
            className={`relative px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                isActiveLink(to)
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
        >
            {children}
        </Link>
    );

    return (
        <nav className="glass-navbar sticky top-0 z-50 px-3 sm:px-4 py-3">
            <div className="container mx-auto max-w-7xl">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2 sm:space-x-3 group"
                    >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">
                            <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            SecurePass
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        <NavLink to="/">Home</NavLink>
                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="ml-2 px-4 lg:px-6 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 flex items-center space-x-2 border border-white/10 hover:border-green-500/30 text-sm lg:text-base"
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
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                <span>Logout</span>
                            </button>
                        ) : (
                            <>
                                <NavLink to="/login">Login</NavLink>
                                <Link
                                    to="/register"
                                    className="ml-2 px-4 lg:px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-sm lg:text-base"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 active:scale-95"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-slide-up">
                        <div className="flex flex-col space-y-2">
                            <NavLink to="/">Home</NavLink>
                            {isAuthenticated ? (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="px-4 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 text-left border border-white/10 active:scale-[0.98]"
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <NavLink to="/login">Login</NavLink>
                                    <Link
                                        to="/register"
                                        className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium text-center active:scale-[0.98]"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
