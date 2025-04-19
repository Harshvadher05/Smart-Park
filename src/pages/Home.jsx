import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <section className="text-center mx-8 my-20">
        <h1 className="text-3xl font-bold my-10">
          A Smart Parking Management System
        </h1>
        <p className="mx-auto max-w-4xl text-lg">
          Discover a smarter way to park with real-time availability information
          at your fingertips. SmartPark utilizes cutting-edge technology to
          streamline your parking experience, making finding a spot easier than
          ever. A Smart Parking Management system can help users find parking
          spaces, save time, and reduce pollution.
        </p>
      </section>

      <section
        className="bg-black bg-opacity-60 bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600384851704-caa012bbb25d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyZWV0JTIwcGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <h1 className="text-4xl font-bold px-10 drop-shadow-xl">
          Welcome to SmartPark:
          <br />
          Your Guide to Hassle-Free Parking.
        </h1>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#E6DDE1] py-10 px-4">
        {[
          {
            title: "Customise Spaces",
            icon: "https://img.icons8.com/clouds/100/parking-meter.png",
            desc: "Orient your parking spots on each side of an aisle. The size of your aisles will depend on if you create one-way aisles or two-way aisles.",
          },
          {
            title: "View Live Reports",
            icon: "https://img.icons8.com/bubbles/100/bar-chart.png",
            desc: "No more manual checking of empty space. View it on your phone. Also view live reports.",
          },
          {
            title: "Slots Per Vehicle",
            icon: "https://img.icons8.com/clouds/100/traffic-jam.png",
            desc: "Allocate slots as per two-wheeler and four-wheeler vehicles to utilise all available space.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="border border-black p-6 m-6 text-center bg-white rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <img
              src={feature.icon}
              alt="feature icon"
              className="mx-auto mb-4 w-[100px] h-[100px]"
            />
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="mx-8 my-16">
        <h1 className="text-2xl font-bold mb-4">Who We Are</h1>
        <p className="text-lg max-w-4xl">
          SmartPark is at the forefront of parking space management, dedicated
          to creating solutions that simplify urban mobility. <br /> Learn more
          about our mission, values, and commitment to enhancing your parking
          experience.
        </p>
      </section>
    </>
  );
}
