const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-bold">
                D
              </div>

              <h2 className="text-xl font-bold text-slate-800">
                Dev Stack
              </h2>
            </div>

            <p className="text-sm leading-6 text-slate-500">
              Build your developer stack with the technologies you love
              and discover the tools you need to grow your skills.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600 hover:bg-pink-500 hover:text-white transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600 hover:bg-pink-500 hover:text-white transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600 hover:bg-pink-500 hover:text-white transition"
              >
                in
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600 hover:bg-pink-500 hover:text-white transition"
              >
                G
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Your Stack
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-800 mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-pink-500 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500 transition">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;