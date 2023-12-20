import React, { useRef, useState } from "react";

function DisplayQuote() {
  const randomQuote = useRef(null);
  const [quoteText, setQuoteText] = useState(
    "Click the Button to display a random quote."
  );

  // eventlistener for when the quote-button is clicked.
  const handleQuoteToggle = () => {
    const quotes = [
      '"The happiness of your life depends upon the quality of your thoughts." <br /> - Marcus Aurelius',
      '"Do one thing everyday that scares you." <br /> - Eleanor Roosevelt',
      '"Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth." <br /> - Marcus Aurelius',
      '"The more that you read, the more things you will know. The more that you learn, the more places you will go." <br /> - Dr. Seuss',
      '"Learning never exhausts the mind." <br /> - Leonardo da Vinci',
      '"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." <br /> - Malcolm X',
      '"Alone, we can do so little; together, we can do so much." <br /> - Helen Keller',
      '"Great things in business are never done by one person; they are done by a team of people." <br /> - Steve Jobs',
      '"Coming together is a beginning, staying together is progress, and working together is success." <br /> - Henry Ford',
      '"Opportunities do not happen, you create them." <br /> - Chris Grosser',
      '"The only place where success comes before work is in the dictionary." <br /> - Vidal Sassoon',
      '"I am not afraid of storms, for I am learning how to sail my ship." <br /> - Louisa May Alcott',
      '"Innovation distinguishes between a leader and a follower." <br /> - Steve Jobs',
      '"Creativity is intelligence having fun." <br /> - Albert Einstein',
      '"The best way to predict the future is to invent it." <br /> - Alan Kay',
      '“Success is not final, failure is not fatal: It is the courage to continue that counts." <br /> - Winston Churchill',
      '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work." <br /> - Steve Jobs',
      '"Do not wait for leaders; do it alone, person to person." <br />- Mother Teresa',
      '"Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome." <br /> - Booker T. Washington',
      '"The way to get started is to quit talking and begin doing." <br /> - Walt Disney',
      '"Act as if what you do makes a difference. It does." <br /> - William James',
      '"The only limit to our realization of tomorrow will be our doubts of today." <br /> - Franklin D. Roosevelt',
      '"Do not wait for the perfect moment, take the moment and make it perfect." <br /> - Unknown',
      '"Your attitude, not your aptitude, will determine your altitude." <br /> - Zig Ziglar',
      '"Your time is limited, do not waste it living someone else life." <br /> - Steve Jobs',
      '"I find that the harder I work, the more luck I seem to have." <br /> - Thomas Jefferson',
      '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." <br /> - Albert Schweitzer',
      '"You miss 100% of the shots you do not take." <br /> - Wayne Gretzky',
      '"Life is either a daring adventure or nothing at all." <br /> - Helen Keller',
      '"Your life does not get better by chance, it gets better by change." <br /> - Jim Rohn',
      '"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle." <br /> - Christian D. Larson',
      '"The only way to achieve the impossible is to believe it is possible." <br /> - Charles Kingsleigh (from Alice in Wonderland)',
      '"The best preparation for tomorrow is doing your best today." <br /> - H. Jackson Brown Jr.',
      '"The best way to predict your future is to create it." <br /> - Peter Drucker',
      '"Do not count the days, make the days count." <br /> - Muhammad Ali',
      '"Success is the sum of small efforts, repeated day in and day out." <br /> - Robert Collier',
      '"The journey of a thousand miles begins with one step." <br /> - Lao Tzu',
      '"What you get by achieving your goals is not as important as what you become by achieving your goals." <br /> - Zig Ziglar',
      '"Do not be pushed around by the fears in your mind. Be led by the dreams in your heart." <br /> - Roy T. Bennett',
      '"Dream big and dare to fail." <br /> - Norman Vaughan'
    ];
    // creates a random qoute formula
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuoteText = quotes[randomIndex];

    setQuoteText(randomQuoteText);
  };
  return (
    <div className="quote-section">
      <h1
        className="quote"
        ref={randomQuote}
        // Allows me to add a <br /> inside my quote, also inserts the random quote.
        dangerouslySetInnerHTML={{ __html: quoteText }}
      />
      <button className="quote-button" title="Quote Generator" onClick={handleQuoteToggle}>
        Click For Quote
      </button>
    </div>
  );
}

export default DisplayQuote;