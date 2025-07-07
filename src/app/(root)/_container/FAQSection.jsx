"use client";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "শতবর্ষ উদযাপন কবে হতে পারে?",
      answer:
        "শতবর্ষ উদযাপনের সম্ভাব্য তারিখ ২০২৬ সালের .... মাসের ... ও ... তারিখ রোজ .... ও ... নির্ধারণ করা হয়েছে।",
    },
    {
      question: "শতবর্ষ উদযাপনে কারা অংশগ্রহন করতে পারবে?",
      answer:
        "বিদ্যালয় প্রতিষ্ঠার পর থেকে অদ্যাবধি যেসকল শিক্ষার্থী স্বরূপচন্দ্র সরকারী উচ্চ বিদ্যালযয়ে অধ্যয়ন করেছেন, তারা রেজিস্ট্রেশন করে উক্ত শতবর্ষ অনুষ্ঠানে অংশগ্রহণ করতে পারবেন।",
    },
    {
      question: "কিভাবে রেজিস্ট্রেশন করা যাবে?",
      answer:
        "বিকাশ রেজিস্ট্রেশন ফি দিয়ে অন-লাইনে রেজিস্ট্রেশন করা যাবে। পাশাপাশি আমাদের রেজিস্ট্রেশন টিমের মাধ্যমে সরাসরিভাবেও রেজিস্ট্রেশন করা যাবে। সফলভাবে রেজিস্ট্রেশন সম্পন্ন হলে অনলাইনে তাদের ব্যাচ-প্রোফাইল ব্যাকওয়ার্ড তালিকা প্রকাশ হয়ে যাবে। অন-লাইনে রেজিস্ট্রেশন করতে রেজিস্ট্রেশন ফরমে সকল তথ্য সঠিকভাবে পূরণ করে ছবি দিয়ে Next Step  বাটনে ক্লিক করলে টাকার পরিমাণসহ একটি Bill Number পাবেন উক্ত Bill Number  এর বিপরীতে আপনি খুব সহজেই বিকাশ নির্বাচন করে পেমেন্ট করতে পারবেন। বিকাশ নির্বাচন করলে এখান থেকে সরাসরি রেজিস্ট্রেশন ফি পরিশোধ করে রেজিস্ট্রেশন সম্পন্ন করতে পারবেন। রেজিস্ট্রেশন সংক্রান্ত আরো বিস্তারিত এখানে দেয়া হবে।",
    },
    {
      question: "শতবর্ষ উপলক্ষে কোন প্রকাশনা প্রকাশ করা হবে কি?",
      answer:
        "প্রকাশনা প্রকাশের উদ্যোগ নেয়া হয়েছে। এ সংক্রান্ত আরো বিস্তারিত এখানে দেয়া হবে।",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          শতবর্ষ উদযাপন নিয়ে আপনি কি জানতে চাচ্ছেন?
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black">
              <button
                className="w-full flex justify-between items-center py-4 text-left text-black cursor-pointer hover:bg-yellow-500 transition-colors rounded-lg px-3"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <span className="text-2xl text-black">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 px-3 ${
                  activeIndex === index ? "max-h-[1000px] pb-4" : "max-h-0"
                }`}
              >
                <p className="text-black text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
