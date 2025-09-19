import { useState, useEffect } from "react";
import "./App.css";

// simple static datasets (can be expanded later)
const prompts = [
  "What’s one thing you noticed today that most people overlooked?",
  "What would your younger self think of you now?",
  "If you could ask one question to the universe, what would it be?",
];

const articles = [
  { title: "The Value of Solitude", link: "#" },
  { title: "Why We Still Read the Greeks", link: "#" },
  { title: "The Art of Asking Questions", link: "#" },
];

const literature = [
  "“The unexamined life is not worth living.” — Socrates",
  "“Man is the measure of all things.” — Protagoras",
  "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle",
];

const history = [
  "On this day in 1787, the US Constitution was signed.",
  "On this day in 1920, the League of Nations held its first meeting.",
  "On this day in 1980, the first shuttle mission prepared for launch.",
];

function App() {
  const [todayIndex, setTodayIndex] = useState(0);
  const [journal, setJournal] = useState("");

  // pick a deterministic index based on the date
  useEffect(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
    setTodayIndex(dayOfYear % prompts.length);
  }, []);

  return (
    <div className="App" style={{ maxWidth: "700px", margin: "0 auto", padding: "2rem" }}>
      <h1>ThinkSpace</h1>

      <section>
        <h2>Daily Prompt</h2>
        <p>{prompts[todayIndex]}</p>
        <textarea
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          placeholder="Write your reflection here..."
          style={{ width: "100%", height: "120px" }}
        />
      </section>

      <section>
        <h2>Curated Articles</h2>
        <ul>
          {articles.map((a, i) => (
            <li key={i}>
              <a href={a.link}>{a.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Literature Excerpt</h2>
        <blockquote>{literature[todayIndex % literature.length]}</blockquote>
      </section>

      <section>
        <h2>Today in History</h2>
        <p>{history[todayIndex % history.length]}</p>
      </section>
    </div>
  );
}

export default App;
