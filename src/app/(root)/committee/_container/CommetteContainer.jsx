import Image from "next/image";

const CommetteContainer = () => {
  const committees = [
    {
      name: "Anwar Hossain",
      position: "CHAIRMAN",
      phone: "+8801717-274777",
      email: "info@demo.com",
      image: "/images/commit.png",
    },
    {
      name: "MD.KALU MOLLA",
      position: "TEACHER REPRESENTIVE",
      phone: "+8801717-274777",
      email: "info@demo.com",
      image: "/images/commit2.png",
    },
    {
      name: "Mr. Manish Gupta",
      position: "SECRETARY",
      phone: "+8801717-274777",
      email: "info@demo.com",
      image: "/images/commit3.png",
    },
    {
      name: "Mrs. Eka Gandhi",
      position: "JOINT SECRETARY",
      phone: "+8801717-274777",
      email: "info@demo.com",
      image: "/images/commit4.png",
    },
    {
      name: "Mrs. Eka Gandhi",
      position: "SCHOOL COUNSELLOR",
      phone: "+8801717-274777",
      email: "info@demo.com",
      image: "/images/commit.png",
    },
    {
      name: "Mrs. Eka Gandhi",
      position: "GUARDIAN MEMBER",
      phone: "+8801717-274777",
      email: "info@demo.com",
      image: "/images/commit.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            School Committees-২০২৬
          </h1>
          <p className="text-xl">স্বরূপচন্দ্র সরকারী উচ্চ বিদ্যালয়</p>
        </div>
      </div>

      {/* Committee Members */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committees.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-6"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-yellow-500 font-medium mb-2">
                    {member.position}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <span>📞</span>
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-yellow-500 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>✉️</span>
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-yellow-500 transition-colors"
                      >
                        {member.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommetteContainer;
