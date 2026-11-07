"use client";

import { useState } from "react";
import styles from "../styles/pages/TreatmentQuiz.module.css";

const questions = [
  {
    title: "What would you like to focus on?",
    options: [
      "A fresh, glowing look",
      "Deep cleansing",
      "Lift & sculpt",
      "Hydration & comfort",
      "Relaxation",
      "Help me decide",
    ],
  },
  {
    title: "How is your skin feeling today?",
    options: [
      "Comfortable / balanced",
      "Dry / tight",
      "Oily / congested",
      "Sensitive / irritated",
      "Not sure",
    ],
  },
];

const treatments = {
  glow: {
    title: "Forlle'd · Freshness & Glow",
    description:
      "You're looking for a fresh, radiant look. This facial focuses on hydration and leaves skin looking smoother and refreshed.",
    service: "Forlle'd",
  },
  hydration: {
    title: "Forlle'd · Hydration & Comfort",
    description:
      "You mentioned dryness or tightness. This facial focuses on replenishing moisture and leaving your skin feeling soft and comfortable.",
    service: "Forlle'd",
  },
  cleansing: {
    title: "Deep Cleansing Facial · Clearer Pores",
    description:
      "This facial focuses on thorough cleansing and extractions where appropriate, for a cleaner, fresher feel.",
    service: "Cleansing",
  },
  lifting: {
    title: "Hollywood Lifting Facial Massage · Lift & Sculpt",
    description:
      "You're looking for more defined facial contours and less puffiness. This hands-on massage focuses on facial tension and a refreshed, sculpted appearance.",
    service: "HL Massage",
  },
  microcurrent: {
    title: "GUINOT Microcurrent Facial · Firmness & Tone",
    description:
      "This treatment focuses on a firmer-looking, more toned appearance.",
    service: "Microcurrent",
  },
  relaxation: {
    title: "Hollywood Lifting Facial Massage · Release Tension",
    description:
      "This massage focuses on the face and neck to help ease that tight, tired feeling.",
    service: "HL Massage",
  },
  guidance: {
    title: "Need a little guidance?",
    description:
      "Not sure what your skin needs? We'll help you choose a treatment based on your goals and how your skin feels.",
    service: "Consultation",
  },
  sensitive: {
    title: "Sensitive or irritated skin?",
    description:
      "You mentioned sensitivity or irritation. Let's check in before choosing a treatment so we can better understand what your skin needs today.",
    service: "Consultation",
  },
};

function getRecommendations(answers) {
  const goal = answers[0];
  const skin = answers[1];

  // Sensitive skin: recommend consultation first.
  if (skin === "Sensitive / irritated") {
    return [treatments.sensitive];
  }

  switch (goal) {
    case "A fresh, glowing look":
      return [treatments.glow];

    case "Deep cleansing":
      return [
        {
          ...treatments.cleansing,
          description:
            skin === "Oily / congested"
              ? "You mentioned oily or congested skin. This facial focuses on thorough cleansing and extractions where appropriate, for a cleaner, fresher feel."
              : treatments.cleansing.description,
        },
      ];

    case "Lift & sculpt":
      return [treatments.lifting, treatments.microcurrent];

    case "Hydration & comfort":
      return [
        {
          ...treatments.hydration,
          description:
            skin === "Dry / tight"
              ? treatments.hydration.description
              : "You're looking for hydration and comfort. This facial focuses on replenishing moisture and leaving your skin feeling soft and comfortable.",
        },
      ];

    case "Relaxation":
      return [treatments.relaxation];

    default:
      return [treatments.guidance];
  }
}

export default function TreatmentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const finished = step === questions.length;
  const results = finished ? getRecommendations(answers) : [];

  function selectAnswer(answer) {
    const updated = [...answers];
    updated[step] = answer;
    setAnswers(updated);
  }

  function nextStep() {
    if (answers[step]) {
      setStep(step + 1);
    }
  }

  function restart() {
    setAnswers([]);
    setStep(0);
  }

  return (
    <section className={styles.quiz}>
      <p className={styles.brand}>Orlando Beauty Studio</p>

      <h1 className={styles.title}>Find Your Treatment</h1>

      {!finished ? (
        <>
          <p className={styles.progressText}>
            Question {step + 1} of {questions.length}
          </p>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${((step + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <h2 className={styles.question}>{questions[step].title}</h2>

          <div className={styles.options}>
            {questions[step].options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => selectAnswer(option)}
                aria-pressed={answers[step] === option}
                className={`${styles.option} ${
                  answers[step] === option ? styles.selected : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              className={styles.back}
            >
              Back
            </button>

            <button
              type="button"
              disabled={!answers[step]}
              onClick={nextStep}
              className={styles.next}
            >
              {step === 1 ? "See My Treatment" : "Continue"}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.results}>
          <p className={styles.resultLabel}>
            Based on your answers, we suggest:
          </p>

          {results.map((treatment) => (
            <div key={treatment.title} className={styles.resultCard}>
              <h2 className={styles.resultTitle}>{treatment.title}</h2>

              <p className={styles.resultDescription}>
                {treatment.description}
              </p>

              {/* Booking link will be added here
                  once Yulia provides service URLs. */}
            </div>
          ))}

          <p className={styles.disclaimer}>
            Our team can help confirm which treatment is right for you.
          </p>

          <button type="button" onClick={restart} className={styles.restart}>
            Start Again
          </button>
        </div>
      )}
    </section>
  );
}
