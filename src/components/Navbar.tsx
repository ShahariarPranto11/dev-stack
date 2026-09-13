import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        <img src={Logo} alt="Dev Stack Logo" className="w-32 h-auto" />

        <ul className="flex items-center gap-5">
          <li className="text-sm font-medium text-pink-500">Home</li>
          <li className="text-sm font-medium text-slate-600">Technologies</li>
          <li className="text-sm font-medium text-slate-600">Projects</li>
          <li className="text-sm font-medium text-slate-600">About</li>
          <li className="text-sm font-medium text-slate-600">Contact</li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-5">
          <button className="text-sm font-medium text-slate-600 hover:text-pink-500 transition">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
