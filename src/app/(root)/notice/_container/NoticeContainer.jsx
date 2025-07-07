const NoticeContainer = () => {
  const notices = [

    {
      date: "20",
      month: "MAY 2026",
      day: "SATURDAY",
      title: "শতবর্ষ উদযাপন-২০২৬ এর ব্যাংক একাউন্ট",
      link: "/notice/2",
    },
    {
      date: "18",
      month: "MAY 2026",
      day: "SATURDAY",
      title: "শতবর্ষ উদযাপন-২০২৬ এর অনুষ্ঠান সমসূচি",
      link: "/notice/3",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            নোটিশসমূহ
          </h1>
        </div>
      </div>

      {/* Notices List */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Date Box */}
                <div className="flex-shrink-0 w-24 border-l-4 border-yellow-500 pl-4">
                  <div className="text-5xl font-bold text-black">
                    {notice.date}
                  </div>
                  <div className="text-gray-600 text-sm">
                    <div>{notice.month}</div>
                    <div>{notice.day}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-black">
                    {notice.title}
                  </h3>
                  <a
                    href={notice.link}
                    className="bg-yellow-500 text-sm text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeContainer;
