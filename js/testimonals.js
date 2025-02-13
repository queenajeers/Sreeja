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
    text: "🤌🏻 The way we become a mental coachs , when one of us goes down",
  },
  {
    text: "Tea time walk at your attha's house, there's something magical about that day!",
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
