import { Carousel } from "@material-tailwind/react";
import FeedbackCard from "/src/components/searchcards/FeedbackCard";
const Feedback = () => {
  return (
    <div>
      <div className="bg-white p-10 m-20 rounded-[30px] shadow-3xl gap-2 ">
        <h1 className="text-4xl font-semibold flex justify-center text-secondary">
          Cảm nhận của khách hàng
        </h1>

        <Carousel
          className="rounded-xl gap-5"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-[10px] left-2/4 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-primary" : "w-4 bg-secondary/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
