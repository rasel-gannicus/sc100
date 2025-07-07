import Link from "next/link";

const TimeSchedule = () => {
  const schedules = [
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          অনুষ্ঠান সমসূচি
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {schedules.map((schedule, index) => (
            <div key={index} className="flex items-start gap-6 group">
              {/* Date Box */}
              <div className="flex-shrink-0 w-24 border-l-4 border-yellow-500 pl-4">
                <div className="text-5xl font-bold text-black">
                  {schedule.date}
                </div>
                <div className="text-gray-600 text-sm">
                  <div>{schedule.month}</div>
                  <div>{schedule.day}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex items-center justify-between border-b pb-6">
                <h3 className="text-xl font-semibold text-black">
                  {schedule.title}
                </h3>
                <Link
                  href={schedule.link}
                  className="bg-yellow-500 text-sm text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/notice"
            className="inline-block text-lg bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors"
          >
            View all Notices
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TimeSchedule;
