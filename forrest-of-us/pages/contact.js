const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <p>[Your City/Address]</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Email</h2>
            <p>[your email]</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Phone</h2>
            <p>[your contact number]</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Website/Social Media</h2>
            <p>[Your website or Instagram/Facebook link]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;