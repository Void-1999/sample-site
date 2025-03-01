export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0">
            <img className="h-12" src="/images/logo.svg" alt="Forrest of Us logo" />
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-green-700 hover:text-green-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-green-700">About</a>
            <a href="/programs" className="text-gray-600 hover:text-green-700">Programs</a>
            <a href="/events" className="text-gray-600 hover:text-green-700">Events</a>
            <a href="/contact" className="text-gray-600 hover:text-green-700">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}