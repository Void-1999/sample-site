export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Forrest of Us</h3>
          <p className="text-gray-400">Creating sustainable communities through zero waste initiatives.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/programs" className="hover:text-green-400">Programs</a></li>
            <li><a href="/events" className="hover:text-green-400">Events</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="text-gray-400 space-y-2">
            <li>email@forrestofus.org</li>
            <li>(123) 456-7890</li>
            <li>City, Country</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400">Facebook</a>
            <a href="#" className="hover:text-green-400">Instagram</a>
            <a href="#" className="hover:text-green-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-700">
        <p className="text-gray-400">&copy; 2023 Forrest of Us. All rights reserved.</p>
      </div>
    </footer>
  );
}