// import { useEffect, useState } from "react";
import { useEffect, useState, useRef } from "react";
import "./index.css";

import Beginning from "../src/assets/1.jpeg";
import first from "../src/assets/2.jpeg";
import date from "../src/assets/3.jpeg";
import special from "../src/assets/4.jpeg";
import Present from "../src/assets/6.jpeg";
import today from "../src/assets/5.jpeg";
const memories = [
  {
    title: "The Beginning",
    date: "June 15, 2026",
    image:
      Beginning,
  },
  {
    title: "First Conversation",
    date: "June 17, 2023",
    image:
      first,
  },
  {
    title: "First Date",
    date: "coming soon........",
    image:
      date,
  },
  {
    title: "A Special Memory",
    date: "Sept 9,  2026",
    image:
      special,
  },
  {
    title: "Today",
    date: "Together",
    image:
      Present,
  },
  {
    title: "Our Future",
    date: "Loading... ❤️",
    image:
      today,
  },
];

const reasons = [
  ["♡", "Your smile"],
  ["☺", "Your laugh"],
  ["♫", "Your voice"],
  ["♥", "The way you care"],
  ["☕", "Your weird little habits"],
  ["✦", "Your kindness"],
  ["∞", "How you always believe in me"],
  ["♡", "The way you look at me"],
];

const openWhenLetters = [
  {
    title: "you're missing me",
    icon: "♥",
    message:
      "Close your eyes for a second. Imagine I'm right there beside you, annoying you like always. ❤️",
  },
  {
    title: "you're having a bad day",
    icon: "✦",
    message:
      "Whatever happened today, remember that one bad day doesn't change how amazing you are.",
  },
  {
    title: "you're angry with me",
    icon: "☁",
    message:
      "Okay... first, I'm sorry. Now please read this while being slightly less angry with me. 🥺",
  },
  {
    title: "you need a smile",
    icon: "☺",
    message:
      "Here is your reminder that somewhere in this world there is a person who is completely obsessed with your smile.",
  },
  {
    title: "your birthday",
    icon: "♛",
    message:
      "OHHHH today is 7th February....... Happy birthday to the person who made my world a little more beautiful simply by being in it. ❤️",
  },
  {
    title: "you doubt yourself",
    icon: "♥",
    message:
      "I wish you could see yourself through my eyes for just one minute. You would never doubt yourself again.",
  },
];

function Stars() {
  const stars = Array.from({ length: 100 });

  return (
    <div className="stars">
      {stars.map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

function Heart({ className = "" }) {
  return <span className={`heart-float ${className}`}>♡</span>;
}

function Navigation({ setPage }) {
  const links = [
    ["home", "Home"],
    ["memories", "Memories"],
    ["letters", "Letters"],
    ["world", "Our World"],
    ["surprise", "Surprise"],
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setPage("home")}>
        ♡
      </div>

      <div className="nav-links">
        {links.map(([id, label]) => (
          <button key={id} onClick={() => setPage(id)}>
            {label}
          </button>
        ))}
      </div>

      <div className="nav-heart">♡</div>
    </nav>
  );
}

function Home({ setPage }) {
  return (
    <section className="page hero-page">
      <div className="hero-overlay" />

      <Heart className="heart-one" />
      <Heart className="heart-two" />
      <Heart className="heart-three" />

      <div className="hero-content">
        <p className="small-script">Different from the rest, because you are.</p>

        <h1>
          A little corner
          <br />
          of the internet...
          <br />
          <span>just for you ♡</span>
        </h1>

        <p className="hero-description">
          I wanted to create a tiny place where all our memories,
          little moments and everything I love about you could live.
        </p>

        <button className="pink-button" onClick={() => setPage("memories")}>
          Enter Our World <span>→</span>
        </button>
      </div>

      <div className="hero-couple">
        <div className="couple-shadow" />
      </div>

      <div className="hero-note">
        Same sky.
        <br />
        Same hearts.
        <br />
        Always us ♡
      </div>
    </section>
  );
}

function LoveLetter() {
  return (
    <section className="page letter-page">
      <div className="letter-decoration left">
        For the girl
        <br />
        who makes
        <br />
        ordinary days
        <br />
        feel special.
        <span>♡</span>
      </div>

      <div className="paper">
        <div className="paper-text">
          <p>My dearest,</p>

          <p>
            I don't know if you'll ever truly realize how many small things
            about you I've started loving.
          </p>

          <p>
            Your smile, your voice, the way you care, the way you make even
            the toughest days feel a little lighter...
          </p>

          <p>
            Somehow, you became one of my favorite parts of life without me
            even realizing when it happened.
          </p>

          <p>Thank you for being you.</p>

          <div className="signature">
            Always yours,
            <br />
            <span>♡</span>
          </div>
        </div>
      </div>

      <div className="candle">
        <div className="flame">🔥</div>
        <div className="candle-body" />
      </div>
    </section>
  );
}

function Memories() {
  return (
    <section className="page memories-page">
      <div className="section-heading">
        <p>Moments that changed everything</p>
        <h2>Our Story</h2>
      </div>

      <div className="timeline">
        <div className="timeline-line" />

        {memories.map((memory, index) => (
          <div className="memory-card" key={memory.title}>
            <div className="polaroid">
              <img src={memory.image} alt={memory.title} />
              <h3>{memory.title}</h3>
              <p>{memory.date}</p>
            </div>

            {index !== memories.length - 1 && (
              <div className="timeline-heart">♥</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Song() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section className="page song-page">

      {/* Actual audio */}
      <audio
        ref={audioRef}
        src="/music/our_song.mp3"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="song-player">

        <div className="album-art">
          <img
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=700&q=80"
            alt="Our song"
          />

          {isPlaying && (
            <div className="music-playing">
              <span />
              <span />
              <span />
              <span />
            </div>
          )}
        </div>

        <div className="song-info">

          <h3>Until I Found You</h3>

          <p>Our special song ❤️</p>

          {/* Progress */}
          <input
            className="song-progress"
            type="range"
            min="0"
            max={duration || 0}
            value={progress}
            onChange={handleSeek}
          />

          <div className="song-time">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="player-controls">

            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Math.max(
                    0,
                    audioRef.current.currentTime - 10
                  );
                }
              }}
            >
              ↶
            </button>

            <button
              className="play-button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </button>

            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Math.min(
                    duration,
                    audioRef.current.currentTime + 10
                  );
                }
              }}
            >
              ↷
            </button>

          </div>

        </div>
      </div>

      <div className="song-message">

        <h2>
          {isPlaying ? (
            <>
              Playing...
              <br />
              <span>this one reminds me of you. ❤️</span>
            </>
          ) : (
            <>
              Press play...
              <br />
              <span>this one reminds me of you.</span>
            </>
          )}
        </h2>

        <div className="lyrics">
          “This one is ours.”
        </div>

      </div>

    </section>
  );
}

function Reasons() {
  return (
    <section className="page reasons-page">
      <div className="section-heading">
        <p>A few reasons out of a million...</p>
        <h2>Things I Love About You</h2>
      </div>

      <div className="reason-grid">
        {reasons.map(([icon, text], i) => (
          <div
            className="reason-card"
            key={text}
            style={{
              transform: `rotate(${i % 2 === 0 ? "-2deg" : "2deg"})`,
            }}
          >
            <span>{icon}</span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FunnyMoments() {
  return (
    <section className="page funny-page">
      <div className="section-heading">
        <h2>Our Relationship Starter Pack</h2>
        <p>
          Because love isn't just about the serious moments... it's also about
          all the silly, random, funny ones.
        </p>
      </div>

      <div className="funny-grid">
        <div className="funny-photo">
          <img
            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80"
            alt="Funny memory"
          />
          <p>"I'm not hungry."</p>
        </div>

        <div className="funny-photo">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80"
            alt="Funny memory"
          />
          <p>"Also her 10 minutes later: What are we eating?"</p>
        </div>

        <div className="chat-box">
          <div>
            <strong>You:</strong>
            <p>Are you mad?</p>
          </div>

          <div>
            <strong>Her:</strong>
            <p>No 🙂</p>
          </div>

          <div>
            <strong>2 minutes later:</strong>
            <p>Also her... ❤️</p>
          </div>
        </div>

        <div className="sticky-note">
          Your idea of
          <br />
          <strong>"5 more minutes"</strong>
        </div>
      </div>
    </section>
  );
}

function World() {
  return (
    <section className="page world-page">
      <div className="world-info">
        <h2>Places We've Been</h2>
        <p>Different places, same favorite person.</p>

        <ul>
          <li>📍 Where we met</li>
          <li>📍 First date</li>
          <li>📍 Our favorite place</li>
          <li>📍 Places we've travelled</li>
          <li>📍 Places we haven't visited yet</li>
        </ul>
      </div>

      <div className="map">
        <div className="map-grid" />

        <div className="location l1">♥</div>
        <div className="location l2">♥</div>
        <div className="location l3">♥</div>
        <div className="location l4">♥</div>

        <div className="travel-line" />
      </div>

      <div className="destination-card">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80"
          alt="Future destination"
        />
        <p>
          More places.
          <br />
          More memories.
          <br />
          Together. ♡
        </p>
      </div>
    </section>
  );
}

function Letters() {
  const [opened, setOpened] = useState(null);

  return (
    <section className="page letters-page">
      <div className="section-heading">
        <h2>Open When...</h2>
        <p>A letter for every mood, every moment, every you.</p>
      </div>

      <div className="envelopes">
        {openWhenLetters.map((letter, index) => (
          <button
            className="envelope"
            key={letter.title}
            onClick={() => setOpened(letter)}
            style={{
              transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
            }}
          >
            <span className="envelope-icon">{letter.icon}</span>
            <span>Open when</span>
            <strong>{letter.title}</strong>
          </button>
        ))}
      </div>

      {opened && (
        <div className="modal" onClick={() => setOpened(null)}>
          <div className="letter-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpened(null)}>
              ×
            </button>

            <div className="modal-heart">♥</div>

            <h3>Open when {opened.title}</h3>

            <p>{opened.message}</p>

            <span className="modal-sign">Always yours ♡</span>
          </div>
        </div>
      )}
    </section>
  );
}

function Surprise() {
  const [unlocked, setUnlocked] = useState(false);
  const [answer, setAnswer] = useState("");

  const unlock = () => {
    if (answer.trim().length > 0) {
      setUnlocked(true);
    }
  };

  return (
    <section className="page surprise-page">
      <div className="surprise-content">
        <h2>There's one more thing...</h2>

        <p>
          A little surprise, because you deserve
          <br />
          all the happiness in the world.
        </p>

        {!unlocked ? (
          <>
            <div className="gift-box">
              <div className="gift-lid" />
              <div className="gift-body">
                <span>♥</span>
              </div>
              <div className="gift-ribbon" />
            </div>

            <div className="unlock-box">
              <p>Enter something only you would know...</p>

              <input
                type="text"
                placeholder="Your answer..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              <button className="pink-button" onClick={unlock}>
                Unlock ♡
              </button>
            </div>
          </>
        ) : (
          <div className="unlocked-message">
            <div className="big-heart">♥</div>

            <h3>You unlocked it ❤️</h3>

            <p>
              No matter where life takes us,
              <br />
              I hope we always find our way back to each other.
            </p>

            <span>— Abhishek ♡</span>
          </div>
        )}
      </div>
    </section>
  );
}

function FinalPage() {
  return (
    <section className="page final-page">
      <div className="final-content">
        <p>
          I don't know what the future looks like...
          <br />
          But I know who I want beside me
          <br />
          while I find out. ♡
        </p>

        <div className="final-divider">✦</div>

        <h2>Thank you for being you.</h2>

        <p className="always">
          For everything.
          <br />
          Always.
        </p>

        <div className="final-signature">— Yours ♡</div>
      </div>

      <div className="final-note">
        Same person.
        <br />
        Different adventures.
        <br />
        Always us ♡
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;

      case "memories":
        return <Memories />;

      case "letters":
        return <Letters />;

      case "world":
        return <World />;

      case "surprise":
        return <Surprise />;

      case "letter":
        return <LoveLetter />;

      case "song":
        return <Song />;

      case "reasons":
        return <Reasons />;

      case "funny":
        return <FunnyMoments />;

      case "final":
        return <FinalPage />;

      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="app">
      <Stars />

      <Navigation setPage={setPage} />

      <main>{renderPage()}</main>

      <div className="page-dots">
        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        />
        <button
          className={page === "memories" ? "active" : ""}
          onClick={() => setPage("memories")}
        />
        <button
          className={page === "letters" ? "active" : ""}
          onClick={() => setPage("letters")}
        />
        <button
          className={page === "world" ? "active" : ""}
          onClick={() => setPage("world")}
        />
        <button
          className={page === "surprise" ? "active" : ""}
          onClick={() => setPage("surprise")}
        />
      </div>

      <div className="quick-pages">
        <button onClick={() => setPage("letter")}>💌</button>
        <button onClick={() => setPage("song")}>🎵</button>
        <button onClick={() => setPage("reasons")}>❤️</button>
        <button onClick={() => setPage("funny")}>😂</button>
        <button onClick={() => setPage("final")}>🌙</button>
      </div>
    </div>
  );
}