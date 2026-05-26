import React, { useState } from "react";
import { BookOpen, Award, Flame, Check, HelpCircle, ArrowRight, RotateCcw, Volume2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const alphabetLessons = [
  {
    name: "Letter A",
    sign: "Point your dominant index finger to the tip of your non-dominant thumb.",
    tip: "Keep your non-dominant hand flat with fingers spread. The thumb represents the vowel 'A'."
  },
  {
    name: "Letter B",
    sign: "Join your index fingers and thumbs of both hands together to form two touching circles resembling an '8' or 'B' shape.",
    tip: "Keep your other fingers curled flat. Touch the two circles together vertically."
  },
  {
    name: "Letter C",
    sign: "Curve your dominant index finger and thumb to form a 'C' shape, similar to the one-handed sign.",
    tip: "No non-dominant hand is needed. Make sure your palm faces sideways so the 'C' curve is visible."
  },
  {
    name: "Letter D",
    sign: "Point your non-dominant index finger straight up, and touch the tips of your dominant index finger and thumb to it to form a 'd' loop.",
    tip: "Your non-dominant finger represents the stem, and your dominant hand forms the loop."
  },
  {
    name: "Letter E",
    sign: "Point your dominant index finger to the tip of your non-dominant index finger.",
    tip: "The non-dominant index finger is the second vowel finger, representing 'E'."
  },
  {
    name: "Letter F",
    sign: "Extend the index and middle fingers of both hands horizontally, and cross the fingers of your dominant hand on top of your non-dominant hand.",
    tip: "Form a perpendicular cross shape with the two sets of fingers."
  },
  {
    name: "Letter G",
    sign: "Form closed fists with both hands, and place your dominant fist directly on top of your non-dominant fist.",
    tip: "Stack them flat like two building blocks. Keep your fists firm."
  },
  {
    name: "Letter H",
    sign: "Lay your non-dominant palm flat, facing upward. Sweep the flat palm of your dominant hand forward across it from wrist to fingertips.",
    tip: "Brush your dominant hand smoothly across the non-dominant palm in one outward motion."
  },
  {
    name: "Letter I",
    sign: "Point your dominant index finger to the tip of your non-dominant middle finger.",
    tip: "The non-dominant middle finger is the third vowel finger, representing 'I'."
  },
  {
    name: "Letter J",
    sign: "Point your dominant index finger to your non-dominant middle finger (the letter I) and trace down into your non-dominant palm, forming a 'J' hook.",
    tip: "This is a moving sign! Slide your finger down the middle finger and hook it towards the thumb."
  },
  {
    name: "Letter K",
    sign: "Point your non-dominant index finger straight up. Bend your dominant index finger into a hook and place the knuckle against your non-dominant index finger.",
    tip: "The dominant hook represents the diagonal arm of the capital letter 'K'."
  },
  {
    name: "Letter L",
    sign: "Open your non-dominant hand flat, palm up. Place your dominant index finger straight across the center of your palm.",
    tip: "Your dominant finger forms a T-junction or L-base on the flat non-dominant palm."
  },
  {
    name: "Letter M",
    sign: "Open your non-dominant hand flat, palm up. Place the tips of your dominant index, middle, and ring fingers onto your non-dominant palm.",
    tip: "Your three fingers represent the three downstrokes of the letter 'M'."
  },
  {
    name: "Letter N",
    sign: "Open your non-dominant hand flat, palm up. Place the tips of your dominant index and middle fingers onto your non-dominant palm.",
    tip: "Your two fingers represent the two downstrokes of the letter 'N'."
  },
  {
    name: "Letter O",
    sign: "Point your dominant index finger to the tip of your non-dominant ring finger.",
    tip: "The non-dominant ring finger is the fourth vowel finger, representing 'O'."
  },
  {
    name: "Letter P",
    sign: "Point your non-dominant index finger straight up. Form a circle with your dominant index finger and thumb, and touch it to the top of your non-dominant index finger.",
    tip: "The dominant circle touching the top of the non-dominant stem resembles the letter 'P'."
  },
  {
    name: "Letter Q",
    sign: "Form a circle with your non-dominant index finger and thumb, and hook your dominant index finger through it.",
    tip: "Hook your dominant index finger over the non-dominant circular shape."
  },
  {
    name: "Letter R",
    sign: "Open your non-dominant hand flat, palm up. Curl your dominant index finger into a hook and place it in the center of your palm.",
    tip: "Your curled index finger sits in the center of your open palm, representing 'R'."
  },
  {
    name: "Letter S",
    sign: "Hook your dominant pinky finger over your non-dominant pinky finger.",
    tip: "Keep your other fingers curled into fists. Only the little fingers hook together."
  },
  {
    name: "Letter T",
    sign: "Open your non-dominant hand flat, palm up. Touch the tip of your dominant index finger to the lower edge (base) of your non-dominant index finger.",
    tip: "Touch the bottom edge near the palm, not the tip of the index finger."
  },
  {
    name: "Letter U",
    sign: "Point your dominant index finger to the tip of your non-dominant pinky finger.",
    tip: "The non-dominant pinky finger is the fifth and final vowel finger, representing 'U'."
  },
  {
    name: "Letter V",
    sign: "Make a 'V' shape with your dominant index and middle fingers, and lay them flat onto the palm of your non-dominant hand.",
    tip: "Spread your fingers wide to make the 'V' shape clear against the flat palm."
  },
  {
    name: "Letter W",
    sign: "Interlace the fingers of both hands together, with palms facing each other.",
    tip: "Lock your fingers together to show the interlocking lines of a 'W'."
  },
  {
    name: "Letter X",
    sign: "Extend the index fingers of both hands and cross them over each other to form a clear 'X' shape.",
    tip: "Cross them at the center. Make sure both fingers are straight."
  },
  {
    name: "Letter Y",
    sign: "Extend the thumb and index finger of your non-dominant hand to form a 'V' shape, and place your dominant index finger in the middle of it.",
    tip: "Your dominant finger points into the gap, forming the stem of the letter 'Y'."
  },
  {
    name: "Letter Z",
    sign: "Touch the fingers of your dominant hand to the palm of your non-dominant hand and draw a zig-zag across it.",
    tip: "This is a moving sign! Touch the palm and trace a Z-shape in a single motion."
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
    question: "How are vowels (A, E, I, O, U) fingerspelled in Indian Sign Language (ISL)?",
    options: [
      "By forming specific shapes with one hand",
      "By pointing your dominant index finger to the corresponding finger of your non-dominant hand",
      "By spelling them out in the air with your pinky",
      "By stacking your fists together"
    ],
    answer: 1,
    explanation: "In ISL, vowels are fingerspelled by pointing your dominant index finger to the fingers of your non-dominant hand starting from the thumb (Thumb = A, Index = E, Middle = I, Ring = O, Pinky = U)."
  },
  {
    question: "To sign the vowel 'E' in ISL, which finger of your non-dominant hand do you point to?",
    options: [
      "Thumb",
      "Index finger",
      "Middle finger",
      "Ring finger"
    ],
    answer: 1,
    explanation: "'E' is the second vowel finger, so you point your dominant index finger to the tip of your non-dominant index finger."
  },
  {
    question: "Which handshape description represents the letter 'G' in ISL?",
    options: [
      "Extend index and middle fingers horizontally in a cross shape",
      "Point index finger and thumb parallel to each other",
      "Form closed fists with both hands and place your dominant fist on top of the other",
      "Cross your index fingers over each other"
    ],
    answer: 2,
    explanation: "The letter 'G' is formed by making closed fists with both hands and stacking the dominant fist flat on top of the non-dominant fist."
  },
  {
    question: "What is the correct way to sign the letter 'M' in ISL?",
    options: [
      "Place three fingers of your dominant hand onto your non-dominant palm",
      "Place two fingers of your dominant hand onto your non-dominant palm",
      "Hook your dominant pinky over your non-dominant pinky",
      "Touch your dominant index finger to your non-dominant thumb"
    ],
    answer: 0,
    explanation: "For the letter 'M', you place the tips of three fingers (index, middle, ring) of your dominant hand onto the flat palm of your non-dominant hand."
  },
  {
    question: "To fingerspell the letter 'S' in ISL, what action is performed?",
    options: [
      "Fists stacked on top of each other",
      "Index fingers crossed in an X shape",
      "Hook your dominant pinky finger over your non-dominant pinky finger",
      "Sweep your dominant flat palm across your non-dominant palm"
    ],
    answer: 2,
    explanation: "The letter 'S' is fingerspelled by hooking your dominant pinky finger over your non-dominant pinky finger, keeping other fingers closed."
  },
  {
    question: "What is the difference between the signs for 'M' and 'N' in ISL?",
    options: [
      "One uses one hand, the other uses two hands",
      "One uses three fingers on the palm, the other uses two fingers on the palm",
      "One is vertical, the other is horizontal",
      "One points to the index finger, the other points to the middle finger"
    ],
    answer: 1,
    explanation: "'M' is signed by placing three fingers (index, middle, ring) onto your non-dominant palm, while 'N' is signed with two fingers (index, middle)."
  },
  {
    question: "Which two letters are the moving (dynamic) fingerspelling signs in ISL?",
    options: [
      "Letters A and E",
      "Letters J and Z",
      "Letters G and H",
      "Letters M and N"
    ],
    answer: 1,
    explanation: "'J' and 'Z' are moving signs: 'J' starts on the middle finger and traces down into the palm, and 'Z' traces a zig-zag across the palm."
  },
  {
    question: "How is the letter 'X' formed in ISL?",
    options: [
      "By crossing both index fingers to form an X shape",
      "By placing two fingers of both hands horizontally in a cross",
      "By looping your dominant index finger through your non-dominant thumb circle",
      "By placing your index finger flat across your palm"
    ],
    answer: 0,
    explanation: "The letter 'X' is signed by crossing the straight index fingers of both hands over each other to form an X."
  },
  {
    question: "To fingerspell the letter 'T' in ISL, where do you touch your dominant index finger?",
    options: [
      "To the tip of your non-dominant index finger",
      "To the lower edge (base) of your non-dominant index finger",
      "To the tip of your non-dominant thumb",
      "To the center of your non-dominant palm"
    ],
    answer: 1,
    explanation: "The letter 'T' is formed by touching your dominant index finger to the lower edge (base) of your non-dominant index finger near the palm."
  },
  {
    question: "How is the letter 'Y' signed in ISL?",
    options: [
      "Touch your little fingers together",
      "Interlace the fingers of both hands together",
      "Place your dominant index finger into the V-shape formed by your non-dominant thumb and index finger",
      "Sweep your dominant palm across your non-dominant palm"
    ],
    answer: 2,
    explanation: "The letter 'Y' is signed by placing your dominant index finger into the V-shape/gap formed by your non-dominant thumb and index finger."
  }
];

export default function Learn() {
  const [activeTab, setActiveTab] = useState("lessons");
  const [selectedCategory, setSelectedCategory] = useState("alphabet");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);
  
  // Visual Motion State for moving signs (J, Z)
  const [isAnimating, setIsAnimating] = useState(false);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeLessons = selectedCategory === "alphabet" ? alphabetLessons : phraseLessons;
  const currentLesson = activeLessons[lessonIndex];
  
  // Extract uppercase character for SVG mapping
  const letterChar = selectedCategory === "alphabet" ? currentLesson.name.slice(-1) : "";

  const handleNextLesson = () => {
    setCardFlipped(false);
    setIsAnimating(false);
    if (lessonIndex < activeLessons.length - 1) {
      setLessonIndex(lessonIndex + 1);
    } else {
      setLessonIndex(0);
    }
  };

  const handlePrevLesson = () => {
    setCardFlipped(false);
    setIsAnimating(false);
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

  const triggerMotion = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1800); // matches the css keyframe transition duration
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
                setIsAnimating(false);
              }}
              className={`w-full flex items-center justify-between p-4 rounded-xl border text-left font-bold transition-all ${
                selectedCategory === "alphabet"
                  ? "bg-violet-600/10 border-violet-500/30 text-violet-600 dark:bg-blue-600/10 dark:border-blue-500/30 dark:text-blue-400"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 dark:bg-[#111827] dark:border-white/5 dark:text-gray-300 dark:hover:bg-white/5"
              }`}
            >
              <span>Alphabet Shapes</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-black/40 text-slate-500 dark:text-gray-400 font-mono">A - Z</span>
            </button>

            <button
              onClick={() => {
                setSelectedCategory("phrases");
                setLessonIndex(0);
                setCardFlipped(false);
                setIsAnimating(false);
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
                  <div className="space-y-4 flex flex-col items-center justify-center animate-fade-in" key={currentLesson.name}>
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-wide">
                      {currentLesson.name}
                    </h2>
                    
                    {selectedCategory === "alphabet" && (
                      <div className="relative flex flex-col items-center justify-center">
                        <div className={`relative flex items-center justify-center p-3 h-36 w-36 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-100 dark:border-white/5 transition-transform duration-300 hover:scale-105 ${
                          isAnimating ? (letterChar === 'J' ? 'animate-draw-j' : letterChar === 'Z' ? 'animate-draw-z' : '') : ''
                        }`}>
                          <img
                            src={`/signs/${letterChar}.svg`}
                            alt={`ASL Sign for ${letterChar}`}
                            className="h-28 w-28 object-contain dark:invert dark:contrast-150"
                          />
                        </div>
                        {(letterChar === 'J' || letterChar === 'Z') && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerMotion();
                            }}
                            className="mt-3 flex items-center gap-1.5 rounded-xl bg-violet-600 text-white dark:bg-[#AAFF00] dark:text-black px-4 py-2 text-xs font-bold hover:opacity-90 shadow-sm transition-all duration-200"
                          >
                            <Sparkles className="h-3.5 w-3.5" /> Play Motion
                          </button>
                        )}
                      </div>
                    )}

                    <p className="text-[11px] font-semibold text-violet-600 dark:text-[#AAFF00] tracking-wide inline-flex items-center gap-1.5 bg-violet-500/10 dark:bg-[#AAFF00]/10 px-3 py-1.5 rounded-full mt-2">
                      <Sparkles className="h-3.5 w-3.5" />
                      Click card to reveal visual shape instructions
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 px-2 animate-fade-in text-left" key={`back-${currentLesson.name}`}>
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                      <div className="flex-1 space-y-3">
                        <p className="text-base sm:text-lg font-bold leading-relaxed text-slate-800 dark:text-white">
                          {currentLesson.sign}
                        </p>
                        <div className="rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 p-4 text-xs text-slate-600 dark:text-gray-400">
                          <strong className="text-violet-600 dark:text-[#AAFF00] block mb-1">PRO-TIP:</strong>
                          {currentLesson.tip}
                        </div>
                      </div>
                      {selectedCategory === "alphabet" && (
                        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-black/25 border border-slate-200 dark:border-white/5 self-stretch sm:self-auto min-w-[120px]">
                          <div className={isAnimating ? (letterChar === 'J' ? 'animate-draw-j' : letterChar === 'Z' ? 'animate-draw-z' : '') : ''}>
                            <img
                              src={`/signs/${letterChar}.svg`}
                              alt={`ASL Sign for ${letterChar}`}
                              className="h-20 w-20 object-contain dark:invert dark:contrast-150"
                            />
                          </div>
                          {(letterChar === 'J' || letterChar === 'Z') && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                triggerMotion();
                              }}
                              className="mt-2.5 px-3 py-1 rounded-xl bg-violet-600 text-white dark:bg-[#AAFF00] dark:text-black text-[10px] font-bold shadow-sm"
                            >
                              Play Motion
                            </button>
                          )}
                        </div>
                      )}
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

            {/* Range Scrollbar for going back and forth */}
            {selectedCategory === "alphabet" && (
              <div className="mt-6 w-full max-w-lg px-6 py-4 bg-slate-50 dark:bg-black/20 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 dark:text-gray-500">Slide to explore alphabet</span>
                  <span className="text-sm font-black text-violet-600 dark:text-[#AAFF00] font-mono">
                    Letter {letterChar} ({lessonIndex + 1}/26)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={lessonIndex}
                  onChange={(e) => {
                    setLessonIndex(parseInt(e.target.value));
                    setCardFlipped(false);
                    setIsAnimating(false);
                  }}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-600 dark:accent-[#AAFF00] focus:outline-none"
                />
              </div>
            )}


            {/* Quick jump keyboard index for alphabet path */}
            {selectedCategory === "alphabet" && (
              <div className="mt-8 w-full max-w-lg border border-slate-200 dark:border-white/5 bg-white dark:bg-[#111827] rounded-2xl p-4 shadow-sm animate-fade-in">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-3 text-center">
                  Quick Selector Index
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter, idx) => (
                    <button
                      key={letter}
                      onClick={() => {
                        setLessonIndex(idx);
                        setCardFlipped(false);
                        setIsAnimating(false);
                      }}
                      className={`h-8 w-8 text-xs font-bold rounded-lg transition-all duration-150 ${
                        lessonIndex === idx
                          ? "bg-violet-600 text-white dark:bg-[#AAFF00] dark:text-black scale-110 shadow-sm"
                          : "bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-black/30 dark:text-gray-400 dark:hover:bg-white/5"
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
