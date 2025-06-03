import AlumniHistory from "./AlumniHistory";
import Banner from "./Banner";
import FAQSection from "./FAQSection";
import Footer from "../../../components/shared/footer/Footer";
import TimeSchedule from "./TimeSchedule";

export default function HomeContainer() {
  return (
    <div>
      <div className="">
        <Banner />
        <TimeSchedule />
        <div className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            প্রাক্তন শিক্ষার্থীদের উদ্যোগে শতবর্ষ-২০২৫
          </h2>
          <AlumniHistory />
        </div>

        <FAQSection />
      </div>
    </div>
  );
}
