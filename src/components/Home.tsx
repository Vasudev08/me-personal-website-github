import profilePic from "../assets/images/VasuPhoto.png";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Profile Picture Section */}
      <div className="mb-8">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="rounded-full h-40 w-40 object-cover"
        />
      </div>

      {/* About Me Section */}
      <div className="text-center max-w-2xl p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          Hi, I'm Vasudev Agarwal, a passionate software developer with a keen
          interest in building impactful solutions. I enjoy working on
          full-stack projects and leveraging cutting-edge technologies to create
          meaningful products.
        </p>
      </div>
    </div>
  );
};

export default Home;
