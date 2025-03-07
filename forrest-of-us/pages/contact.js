const Contact = () => {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold mb-6 text-black">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Location</h2>
            <p className="text-lg text-black">[Your City/Address]</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Email</h2>
            <p className="text-lg text-black">[your email]</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Phone</h2>
            <p className="text-lg text-black">[your contact number]</p>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Website/Social Media</h2>
            <p className="text-lg text-black">[Your website or Instagram/Facebook link]</p>
          </div>
        </div>
      </div>
    </div>
 );
};
export default Contact;