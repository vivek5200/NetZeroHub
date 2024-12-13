import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="font-roboto bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              alt="Brand logo with a green leaf and the text 'Carbon Offset Platform'"
              className="h-10 w-10"
              src="https://storage.googleapis.com/a1aa/image/mIBIVVVbV1rBIp78oUOTJ0n0g3Sn8pSXey8xF0wqejaRUh5TA.jpg"
            />
            <span className="ml-2 text-xl font-bold text-green-600">
              Carbon Offset Platform
            </span>
          </div>
          <nav className="space-x-4">
            <Link className="text-gray-700 hover:text-green-600" to="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-green-600" to="/">
            Calculator
            </Link>
            <Link className="text-gray-700 hover:text-green-600" to="/register">
              Sign Up
            </Link>
            <Link className="text-gray-700 hover:text-green-600" to="/login">
              Login
            </Link>
          </nav>
          <Link className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" to="/register">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-700">
            Offset Your Carbon Emissions by Trading Verified Carbon Credits
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Buy, sell, and donate carbon credits to help reduce global carbon emissions, with transparency and security on the blockchain.
          </p>
          <Link className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700" to="/login">
            Start Now
          </Link>
          <img
            alt="A lush green forest representing environmental conservation"
            className="mt-8 mx-auto"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/7SXfVfLZlfRXeSCZhFOlvPr8wJ5ev4H70vjt8aJmHceMHVYeJA.jpg"
            width="1200"
          />
        </div>
      </section>

      {/* About the Platform Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700">About Our Platform</h2>
          <p className="mt-4 text-lg text-gray-700">
            Our platform empowers individuals and businesses to offset their carbon footprint by purchasing verified carbon credits from trusted environmental projects.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            By participating in our marketplace, you contribute to real-world environmental impact, helping the planet move toward a net-zero future.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                alt="Icon representing browsing carbon credits"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/o2bRsemhYQS6byqdpE4PZkUosOdeRrIyb 4e0I0fIaFtPRFmPB.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Find Verified Carbon Credits</h3>
              <p className="mt-2 text-gray-700">Browse through a list of certified carbon offset projects.</p>
            </div>
            <div>
              <img
                alt="Icon representing buying or selling credits"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/56au038OVj7WGFXrmbPtaGdfMwtKCMnm7zGMEoL4f6oOUh5TA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Buy or Sell Credits</h3>
              <p className="mt-2 text-gray-700">Choose the credits you want to offset your carbon footprint or sell.</p>
            </div>
            <div>
              <img
                alt="Icon representing tracking impact"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/GaRlfan3IgUNcqUt760jNL4TVc7WXf4hnlddw9PeXcIWoCznA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Track Your Impact</h3>
              <p className="mt-2 text-gray-700">Monitor your credits and track the environmental impact you've made.</p>
            </div>
            <div>
              <img
                alt="Icon representing donating to causes"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/V2jCtUDClKJnJVWjQ7DRuwZDbFwu1IxPOxDBMAFofkeeoCznA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Donate to Causes</h3>
              <p className="mt-2 text-gray-700">Donate credits to environmental causes and projects around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700">Key Features</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                alt="Icon representing verified carbon credits"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/hpbQIjGzZtISJ58wHZkNqbQqz0ETXQCQ8WLBjoe1qa5Kqw8JA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Verified Carbon Credits</h3>
              <p className="mt-2 text-gray-700">Only certified projects are listed.</p>
            </div>
            <div>
              <img
                alt="Icon representing blockchain transparency"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/GjRBcFffHvr7404uUqvjQHraFGezE8KB8Z7ruMaFIHAxoCznA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Blockchain Transparency</h3>
              <p className="mt-2 text-gray-700">All transactions are tracked and secured on the blockchain.</p>
            </div>
            <div>
              <img
                alt="Icon representing carbon footprint calculator"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/wjkWSSzUTk71PtRRdJR5SA3OjNQItbNDU2YBijdjjZQDVYeJA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Carbon Footprint Calculator</h3>
              <p className="mt-2 text-gray-700">Help users calculate how many carbon credits they need to offset their emissions.</p>
            </div>
            <div>
              <img
                alt="Icon representing portfolio management"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/vUF2XfnU4zzgOClKpsi57x4UeLk6TKBcfE79zcldgRueRFmPB.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Portfolio Management</h3>
              <p className="mt-2 text-gray-700">Keep track of purchased credits and monitor your contributions.</p>
            </div>
            <div>
              <img
                alt="Icon representing global impact"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/72T9TfaMlhwxGK1MNApcucHMXcowejbKv8EHHhn0Nc3WUh5TA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Global Impact</h3>
              <p className="mt-2 text-gray-700">Contribute to projects worldwide that reduce carbon emissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Benefits Section */}
      <section className="bg-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700">Impact & Benefits</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-700">Over 1 million tons of CO2 offset!</h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700">100+ verified projects worldwide.</h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700">Thousands of businesses and individuals reducing their carbon footprint.</h3>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-green-700">Testimonials</h3>
            <div className="mt-4">
              <p className="text-lg text-gray-700">"This platform has made it so easy for us to offset our carbon emissions and contribute to meaningful projects around the world." - Jane Doe, CEO of GreenTech</p>
              <p className="mt-2 text-lg text-gray-700">"I love how transparent and secure the transactions are. I can see the real impact I'm making." - John Smith, Environmental Activist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700">Featured Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                alt="Image of a reforestation project with young trees planted in rows"
                className="w-full h-40 object-cover rounded-md"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/7WGUM4uA4W6kB9hygBcRmueuQ6IygpdpCOHl880BgwmNqw8JA.jpg"
                width="300"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Reforestation Project</h3>
              <p className="mt-2 text-gray-700">Offset: 500 tons of CO2</p>
              <a className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" href="#">Learn More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                alt="Image of a wind farm with several wind turbines generating clean energy"
                className="w-full h-40 object-cover rounded-md"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/F7KuG26 vvl53Ihfo5dHJLn2XfnfJVdUz4auGli1oAKDuoCznA.jpg"
                width="300"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Wind Energy Project</h3>
              <p className="mt-2 text-gray-700">Offset: 300 tons of CO2</p>
              <a className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" href="#">Learn More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                alt="Image of a solar farm with multiple solar panels capturing sunlight"
                className="w-full h-40 object-cover rounded-md"
                height="200"
                src="https://storage.googleapis.com/a1aa/image/qgQMmkaBODKuKdZF1l2QZ9qL7xvC8z4n6qxELFC6UeRIqw8JA.jpg"
                width="300"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Solar Energy Project</h3>
              <p className="mt-2 text-gray-700">Offset: 400 tons of CO2</p>
              <a className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700" href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Join the Movement</h2>
          <p className="mt-4 text-lg text-white">Start offsetting your carbon footprint today and contribute to a sustainable future.</p>
          <a className="mt-6 inline-block bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-200" href="#">Start Offsetting Now</a>
        </div>
      </section>

      {/* Security and Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700">Security and Trust</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                alt="Icon representing blockchain security"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/JPdygK9HJTbVOJTXBQGnH7ndRFIJZOicPIo4gAs5VirCVYeJA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Blockchain Security</h3>
              <p className="mt-2 text-gray-700">Highlight the security of your transactions and data.</p>
            </div>
            <div>
              <img
                alt="Icon representing verified partners"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/QkXDx4hAIrJCHplNz7iNPWkDTbnEZr1yQBok8GXcRmQGVYeJA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Verified Partners</h3>
              <p className="mt-2 text-gray-700">Showcase logos of environmental organizations, verifiers, or any partnerships that back the legitimacy of your platform.</p>
            </div>
            <div>
              <img
                alt="Icon representing certifications"
                className="mx-auto"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/ODssykPUogZTA98JM4b7Sr0Fz8Qi5ZCVgt85D0k5SiAFVYeJA.jpg"
                width="100"
              />
              <h3 className="mt-4 text-xl font-bold text-green-700">Certifications</h3>
              <p className="mt-2 text-gray-700">Display trusted third-party certifications, like carbon certification bodies, to build trust.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="mb-6">
            <Link className="text-gray-400 hover:text-white mx-2" to="/about">
              About Us
            </Link>
            <Link className="text-gray-400 hover:text -white mx-2" to="/contact">
              Contact
            </Link>
            <Link className="text-gray-400 hover:text-white mx-2" to="/privacy">
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Carbon Offset Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;