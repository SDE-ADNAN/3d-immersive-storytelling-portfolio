export default function Footer() {
  return (
    <footer id="footer" className="w-full py-6 bg-transparent text-center">
      <div className="max-w-4xl mx-auto text-neutral-400 text-sm space-y-2">
        <nav aria-label="Footer navigation">
          <ul className="flex items-center justify-center gap-4">
            <li><a href="#hero" className="text-neutral-400 hover:text-white">Home</a></li>
            <li><a href="#experience" className="text-neutral-400 hover:text-white">Experience</a></li>
            <li><a href="#contact" className="text-neutral-400 hover:text-white">Contact</a></li>
          </ul>
        </nav>
        <div>© {new Date().getFullYear()} Adnan Khan — Built with discipline.</div>
      </div>
    </footer>
  );
}

