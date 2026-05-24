import React, { useState } from "react";
import { BookOpen, Award, Flame, Check, HelpCircle, ArrowRight, RotateCcw, Volume2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const alphabetLessons = [
  {
    name: "Letter A",
    sign: "Make a closed fist, with your thumb resting flat against the outer side of your index finger.",
    tip: "Keep your knuckles aligned and face your palm directly forward towards the listener."
  },
  {
    name: "Letter B",
    sign: "Extend all four fingers straight up, touching together, and fold your thumb flat across your palm.",
    tip: "Keep your hand firm. Make sure your fingers are straight and not spread out."
  },
  {
    name: "Letter C",
    sign: "Curve all four fingers and your thumb to form a C shape, as if you are cupping a ball.",
    tip: "Ensure your hand is facing sideways so the outline of the 'C' is clearly visible."
  },
  {
    name: "Letter D",
    sign: "Point your index finger straight up, and touch your thumb to the tips of your middle, ring, and pinky fingers to form a circle.",
    tip: "Only the index finger should point straight up; the others form a circle."
  }
];

const phraseLessons = [
  {
    name: "Hello",
    sign: "Place your flat hand (fingers together) near your forehead, palm down, and move it slightly outward and down in a saluting motion.",
    tip: "A gentle arching motion is all it takes. Keep it friendly and natural!"
  },
  {
    name: "Thank You",
    sign: "Touch the fingertips of your flat hand to your lips, then move your hand downward and forward toward the person you are thanking.",
    tip: "Maintain eye contact and smile to show sincerity while signing."
  },
  {
    name: "Please",
    sign: "Place your flat palm on the center of your chest and move it in a clockwise circular motion several times.",
    tip: "Use a light, soft stroke. Do not press too hard against your chest."
  },
  {
    name: "Sorry",
    sign: "Form a fist (like the letter 'A') and rub it in a circular motion over the center of your chest.",
    tip: "Express the emotion on your face — facial expressions are vital in sign language."
  }
];

const quizQuestions = [
  {
    question: "What is the correct handshape description for the letter 'A'?",
    options: [
      "Raised index finger, other fingers touching thumb to form a circle",
      "Closed fist, with the thumb resting flat against the side of the index finger",
      "Curve all fingers and thumb in a circular shape",
      "Open hand, fingers together, thumb folded flat across palm"
    ],
    answer: 1,
    explanation: "The letter 'A' is formed by making a fist with the thumb resting flat against the outer side of your index finger."
  },
  {
    question: "To sign 'Thank You', where should your hand start?",
    options: [
      "On the center of your chest",
      "Flat near your forehead",
      "Touch your fingertips to your lips",
      "At your shoulder"
    ],
    answer: 2,
    explanation: "The sign for 'Thank You' starts with your fingertips touching your lips, then moving down and forward toward the person."
  },
  {
    question: "What is the primary visual difference between the signs for 'Please' and 'Sorry'?",
    options: [
      "One uses a flat hand, the other uses a closed fist",
      "One is signed on the chest, the other is signed near the head",
      "One moves clockwise, the other moves counter-clockwise",
      "One uses two hands, the other uses one hand"
    ],
    answer: 0,
    explanation: "'Please' is signed with a flat palm on the chest, whereas 'Sorry' uses a closed fist (A-shape) rubbing the chest."
  },
  {
    question: "Which letter requires forming a circle with your thumb and three fingers while the index finger points straight up?",
    options: [
      "Letter A",
      "Letter B",
      "Letter C",
      "Letter D"
    ],
    answer: 3,
    explanation: "The letter 'D' is signed by raising only the index finger, while the middle, ring, and pinky fingers touch the thumb to form a circle."
  }
];

export default function Learn() {
  const [activeTab, setActiveTab] = useState("lessons");
  const [selectedCategory, setSelectedCategory] = useState("alphabet");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeLessons = selectedCategory === "alphabet" ? alphabetLessons : phraseLessons;
  const currentLesson = activeLessons[lessonIndex];

  const handleNextLesson = () => {
    setCardFlipped(false);
    if (lessonIndex < activeLessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
    } else {
      setLessonIndex(0);
    }
  };

  const handlePrevLesson = () => {
    setCardFlipped(false);
    if (lessonIndex > 0) {
      setLessonIndex(lessonIndex - 1);
    } else {
      setLessonIndex(activeLessons.length - 1);
    }
  };

  const handleMastered = () => {
    setMasteredCount(prev => prev + 1);
    handleNextLesson();
  };

  const handleQuizAnswer = (optionIdx) => {
    if (quizAnswered) return;
    setSelectedAnswer(optionIdx);
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === quizQuestions[quizIndex].answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setQuizAnswered(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setQuizAnswered(false);
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const speakTip = (text) => {
    const talk = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(talk);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 font-sans min-h-screen bg-transparent text-slate-800 dark:text-[#F1F1EE] sm:px-6 lg:px-8 pt-28 transition-colors duration-200">
      
      {/* Upper Dashboard Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Sign School</h1>
        <p className="mt-2 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
          Master the language of signs step-by-step through interactive lessons, visual flashcards, and testing sandboxes.
        </p>
      </div>

      {/* Progress & Streak Bar Banner */}
      <div className="grid gap-4 md:grid-cols-3 mb-10">
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-500">
            <Flame className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Daily Streak</p>
            <p className="text-2xl font-black text-slate-800 dark:text-white">5 Days</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400">
            <BookOpen className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Lessons Completed</p>
            <p className="text-2xl font-black text-slate-800 dark:text-white">{masteredCount} Sessions</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-500">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">Practice Score</p>
            <p className="text-2xl font-black text-slate-800 dark:text-white">
              {quizFinished ? `${Math.round((score / quizQuestions.length) * 100)}%` : "94%"}
            </p>
          </div>
        </div>
      </div>

      {/* Main Tab Controller Switchers */}
      <div className="mb-10 flex justify-center border-b border-slate-200 dark:border-white/10">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("lessons")}
            className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === "lessons"
                ? "border-violet-600 text-violet-600 dark:border-[#AAFF00] dark:text-[#AAFF00]"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <BookOpen className="h-4.5 w-4.5" />
            Interactive Lessons
          </button>
          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === "quiz"
                ? "border-violet-600 text-violet-600 dark:border-[#AAFF00] dark:text-[#AAFF00]"
                : "border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Award className="h-4.5 w-4.5" />
            Quiz Sandbox
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      {activeTab === "lessons" ? (
        <div className="grid gap-8 lg:grid-cols-4">
          
          {/* Left Category Selector Panel */}
          <div className="lg:col-span-1 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-4 px-2">Learning Paths</h3>
            
            <button
              onClick={() => {
                setSelectedCategory("alphabet");
                setLessonIndex(0);
                setCardFlipped(false);
              }}
              className={`w-full flex items-center justify-between p-4 rounded-xl border text-left font-bold transition-all ${
                selectedCategory === "alphabet"
                  ? "bg-violet-600/10 border-violet-500/30 text-violet-600 dark:bg-blue-600/10 dark:border-blue-500/30 dark:text-blue-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-[#111827] dark:border-white/5 dark:text-gray-300 dark:hover:bg-white/5"
              }`}
            >
              <span>Alphabet Shapes</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-black/40 text-slate-500 dark:text-gray-400 font-mono">A - D</span>
            </button>

            <button
              onClick={() => {
                setSelectedCategory("phrases");
                setLessonIndex(0);
                setCardFlipped(false);
              }}
              className={`w-full flex items-center justify-between p-4 rounded-xl border text-left font-bold transition-all ${
                selectedCategory === "phrases"
                  ? "bg-violet-600/10 border-violet-500/30 text-violet-600 dark:bg-blue-600/10 dark:border-blue-500/30 dark:text-blue-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-[#111827] dark:border-white/5 dark:text-gray-300 dark:hover:bg-white/5"
              }`}
            >
              <span>Common Greetings</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-black/40 text-slate-500 dark:text-gray-400 font-mono">Phrases</span>
            </button>
          </div>

          {/* Right Flashcard Presentation Deck Panel */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center">
            
            {/* 3D-like Flashcard Element */}
            <div 
              onClick={() => setCardFlipped(!cardFlipped)}
              className={`relative w-full max-w-lg aspect-[5/3.5] rounded-3xl border border-slate-200/80 dark:border-white/5 bg-white dark:bg-[#111827] p-8 shadow-md hover:shadow-lg dark:hover:border-violet-500/30 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden`}
            >
              
              {/* Backlight decorative glows */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-600/5 dark:bg-[#AAFF00]/5 blur-2xl pointer-events-none" />

              {/* Card Header progress */}
              <div className="flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">
                  {selectedCategory === "alphabet" ? "Letter Lesson" : "Conversational Phrase"}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-black/30 px-2.5 py-1 rounded-lg">
                  {lessonIndex + 1} / {activeLessons.length}
                </span>
              </div>

              {/* Card Main Body */}
              <div className="my-auto text-center pointer-events-none">
                {!cardFlipped ? (
                  <div className="space-y-4">
                    <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-wide">
                      {currentLesson.name}
                    </h2>
                    <p className="text-xs font-semibold text-violet-600 dark:text-[#AAFF00] tracking-wide inline-flex items-center gap-1.5 bg-violet-500/10 dark:bg-[#AAFF00]/10 px-3.5 py-1.5 rounded-full">
                      <Sparkles className="h-3.5 w-3.5" />
                      Click card to reveal visual shape instructions
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 px-2">
                    <p className="text-lg sm:text-xl font-bold leading-relaxed text-slate-800 dark:text-white">
                      {currentLesson.sign}
                    </p>
                    <div className="rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 p-4 text-xs text-left text-slate-600 dark:text-gray-400">
                      <strong className="text-violet-600 dark:text-[#AAFF00] block mb-1">PRO-TIP:</strong>
                      {currentLesson.tip}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer actions */}
              <div className="flex justify-between items-center mt-4">
                {cardFlipped ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakTip(currentLesson.sign);
                      }}
                      className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
                    >
                      <Volume2 className="h-4 w-4" /> Speak
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMastered();
                      }}
                      className="flex items-center gap-1.5 rounded-xl bg-violet-600 text-white dark:bg-[#AAFF00] dark:text-black px-4 py-2 text-xs font-bold hover:opacity-90 shadow-sm"
                    >
                      <Check className="h-3.5 w-3.5" />
                      Got It!
                    </button>
                  </>
                ) : (
                  <div className="w-full text-center text-xs font-medium text-slate-400 dark:text-gray-500 pointer-events-none">
                    Flipped Card details will show translation and advice.
                  </div>
                )}
              </div>
            </div>

            {/* Slider control buttons below flashcard */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrevLesson}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/5 dark:bg-[#111827] dark:hover:bg-white/5 text-slate-600 dark:text-gray-400 transition-colors"
                aria-label="Previous Lesson"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNextLesson}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/5 dark:bg-[#111827] dark:hover:bg-white/5 text-slate-600 dark:text-gray-400 transition-colors"
                aria-label="Next Lesson"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>
        </div>
      ) : (
        /* Quiz Sandbox Interactive Component */
        <div className="max-w-2xl mx-auto">
          {!quizFinished ? (
            <div className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-6 sm:p-8 shadow-md">
              
              {/* Question progress and bar */}
              <div className="mb-6 flex justify-between items-center">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-gray-500">
                  Question {quizIndex + 1} of {quizQuestions.length}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-black/30 px-2 py-0.5 rounded">
                  Score: {score}
                </span>
              </div>
              
              {/* Progress Bar indicator */}
              <div className="w-full bg-slate-100 dark:bg-black/30 h-2 rounded-full mb-8 overflow-hidden">
                <div 
                  className="bg-violet-600 dark:bg-[#AAFF00] h-full transition-all duration-300"
                  style={{ width: `${((quizIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              {/* The Question */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug mb-8">
                {quizQuestions[quizIndex].question}
              </h3>

              {/* Answer options */}
              <div className="space-y-3 mb-8">
                {quizQuestions[quizIndex].options.map((opt, idx) => {
                  let buttonClass = "w-full border p-4 text-left rounded-xl text-sm font-semibold transition-all ";
                  
                  if (!quizAnswered) {
                    buttonClass += selectedAnswer === idx 
                      ? "border-violet-600 bg-violet-600/5 text-violet-700 dark:border-[#AAFF00] dark:bg-[#AAFF00]/5 dark:text-[#AAFF00]" 
                      : "border-slate-200 bg-slate-50/50 hover:bg-slate-100/50 text-slate-700 dark:border-white/5 dark:bg-black/20 dark:hover:bg-white/5 dark:text-gray-300";
                  } else {
                    const isCorrectChoice = idx === quizQuestions[quizIndex].answer;
                    const isUserChoice = idx === selectedAnswer;

                    if (isCorrectChoice) {
                      buttonClass += "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold";
                    } else if (isUserChoice) {
                      buttonClass += "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400 line-through";
                    } else {
                      buttonClass += "border-slate-200 opacity-40 dark:border-white/5 dark:bg-black/20 dark:text-gray-500";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleQuizAnswer(idx)}
                      disabled={quizAnswered}
                      className={buttonClass}
                    >
                      <span className="inline-flex mr-3 h-5 w-5 items-center justify-center rounded-full bg-slate-200 dark:bg-black/40 text-[10px] font-mono">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Action and feedback explanation banner */}
              {quizAnswered && (
                <div className="mb-6 p-4 rounded-xl border border-slate-200 bg-slate-50 dark:border-white/5 dark:bg-black/20 text-xs">
                  <strong className="text-violet-600 dark:text-[#AAFF00] block uppercase tracking-wider mb-1">Explanation:</strong>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                    {quizQuestions[quizIndex].explanation}
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex justify-end">
                {!quizAnswered ? (
                  <button
                    onClick={handleSubmitQuiz}
                    disabled={selectedAnswer === null}
                    className={`flex items-center gap-2 rounded-xl py-3 px-6 text-sm font-bold text-white transition-all shadow-md shadow-violet-500/10 ${
                      selectedAnswer === null 
                        ? "bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-50 shadow-none" 
                        : "bg-violet-600 hover:bg-violet-500 dark:bg-blue-600 dark:hover:bg-blue-500"
                    }`}
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 dark:bg-blue-600 dark:hover:bg-blue-500 py-3 px-6 text-sm font-bold text-white shadow-md shadow-violet-500/10 transition-all hover:-translate-y-0.5"
                  >
                    {quizIndex === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Results Screen */
            <div className="rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] p-8 text-center shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/15 dark:bg-[#AAFF00]/15 text-violet-600 dark:text-[#AAFF00]">
                <Award className="h-8 w-8 animate-bounce" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Quiz Completed!</h3>
              <p className="text-slate-600 dark:text-gray-400 mb-6 max-w-sm mx-auto text-sm">
                Congratulations! You completed the Sign School review. Let's see your final score.
              </p>

              {/* Big Score Display */}
              <div className="inline-block p-6 rounded-3xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/5 mb-8">
                <p className="text-5xl font-black text-violet-600 dark:text-[#AAFF00] font-mono">
                  {score} / {quizQuestions.length}
                </p>
                <p className="text-xs uppercase font-bold tracking-widest text-slate-400 dark:text-gray-500 mt-2">Correct Answers</p>
              </div>

              {/* Feedback text */}
              <p className="text-base font-bold text-slate-800 dark:text-white mb-8">
                {score === quizQuestions.length ? "🎖 Perfect score! You've mastered these sign shapes!" : "👍 Good effort! Practice makes perfect. Try again to get 100%!"}
              </p>

              <button
                onClick={handleResetQuiz}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 dark:border-white/10 dark:bg-[#111827] dark:hover:bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-white transition-all shadow-sm"
              >
                <RotateCcw className="h-4 w-4" />
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
