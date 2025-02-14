// Sample testimonials - replace with your data
const testimonials = [
  {
    text: "The eyes with which you see things around you",
  },
  {
    text: "The way we rub our hands when together",
  },
  {
    text: "😊 The way you smile when you see me",
  },
  {
    text: "📸 The way we take silly selfies together.",
  },
  {
    text: "I like when we become idiots sometimes and just laugh!",
  },
  {
    text: "The way you fall asleep when tired",
  },
  {
    text: " 😂 Your sense of humour",
  },
  {
    text: "👶🏻 The way you worry about me, as if am a babe",
  },
  {
    text: "Your proud face when you see me groomed well",
  },
  {
    text: "Because you make me a better person!",
  },
  {
    text: "🍨 The way you describe your favourite icecream toppings list",
  },
  {
    text: "🤌🏻  The way you rub my elbow skin, I LOVE IT 😂",
  },
  {
    text: "🤌🏻 The way we become  mental coachs , when one of us goes down",
  },
  {
    text: "☕️ Tea time walk at your attha's house, there's something magical about that day!",
  },
  {
    text: " 👯‍♀️ Sometimes you become my bestie to just share things in life",
  },
  {
    text: "We can both be vulnerable with each other, knowing that neither of us will judge",
  },
  {
    text: "I love your motherly love for your brother! it just wants be to become your brother!",
  },
  {
    text: "😍 I love your moody mornings—they're just so cute!",
  },
  {
    text: "All our times in Vikarabad fulfilled my dream of having a partner with whom time just flies in nature.",
  },
  {
    text: "Girl, I love how we create random scenarios and just laugh our hearts out!",
  },
  {
    text: "You are my besssstttt friend!",
  },
  {
    text: "I love your taste in almost eveyrthing! The way you choose, it's real WISDOM girl!",
  },
  {
    text: "Sreeju, you are the best listner when I talk! I love how you remeber every detail of it",
  },
  {
    text: "I love that we can talk meaningful, deep, silly, almost anything!",
  },
  {
    text: "I love when you said, 'Lets count our blessings', when I was talking about our worries! I love it",
  },
  {
    text: "I love that you cheer on my accomplishments as your own",
  },
  {
    text: "Your laugh is contagious man!",
  },
  {
    text: "The way you get ready! So much thought put into it!",
  },
  {
    text: "Your sense of justice, guess you got that from your father! 😉",
  },
  {
    text: "Your voice sqeeeze, when you say, Yeeeeehhhheeeyyy! That's a melody!",
  },
  {
    text: "The way you enjoy with your cousins!",
  },
  {
    text: "I love how you value self-respect, it inspired me. Holding oneself with honor.",
  },
];

function createTestimonialCard(testimonial) {
  return `
      <div class="testimonial-card">
        <div class="testimonial-text">${testimonial.text}</div>
      </div>
    `;
}

function populateTestimonials() {
  const sections = document.querySelectorAll(".testimonial-section");

  sections.forEach((section) => {
    section.innerHTML = testimonials
      .map((testimonial) => createTestimonialCard(testimonial))
      .join("");
  });
}

// Initialize the scroll
populateTestimonials();

// Reset animation when it completes
const scrollContainer = document.querySelector(".scroll-container");
scrollContainer.addEventListener("animationend", () => {
  scrollContainer.style.animation = "none";
  void scrollContainer.offsetWidth; // Trigger reflow
  scrollContainer.style.animation = "scrollUp 30s linear infinite";
});
