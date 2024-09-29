import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MaxWidthWrapper from "@/components/mmw";

const quotes = [
  {
    author: "Bill Gates",
    text: "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.",
    image: "/icons/billgates.jpg",
  },
  {
    author: "Elon Musk",
    text: "Automation will make us more human, not less.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Stephen Hawking",
    text: "The development of full artificial intelligence could spell the end of the human race... It would take off on its own, and re-design itself at an ever increasing rate.",
    image: "/api/placeholder/100/100",
  },
  {
    author: "Mark Zuckerberg",
    text: "I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.",
    image: "/api/placeholder/100/100",
  },
];

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote(
      (prevQuote) => (prevQuote - 1 + quotes.length) % quotes.length
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-lg shadow-lg p-8">
      <MaxWidthWrapper>
        <div className="flex items-center">
          <img
            src={quotes[currentQuote].image}
            alt={quotes[currentQuote].author}
            className="w-24 h-24 rounded-full mr-6 object-cover"
          />
          <div className="flex-1">
            <p className="text-xl font-serif italic mb-4">
              {quotes[currentQuote].text}
            </p>
            <p className="text-lg font-semibold">
              - {quotes[currentQuote].author}
            </p>
          </div>
        </div>
        <button
          onClick={prevQuote}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextQuote}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </MaxWidthWrapper>
    </div>
  );
};

export default QuoteCarousel;
