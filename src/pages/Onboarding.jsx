
import "../css/Onboarding.css";
import Progress from "../components/onboarding/Progress";
import OnboardingOptions from "../components/onboarding/OnboardingOptions";
import Reminder from "../components/onboarding/Reminder";
import { useOnboarding } from "../hooks/useOnboarding";

function Onboarding() {
  const {
    step,
    answers,
    next,
    previous,
    saveAnswer,
    isReminder,
    question
  } = useOnboarding();

  return (
    <div className="onboarding">
      <h2 className="brand">AURA</h2>
      <div className="content">
        <Progress step={step} />
        <h1>{isReminder ? "Set your reminder time" : question.title}</h1>

        {isReminder ? (
          <Reminder
            value={answers.reminderTime}
            saveAnswer={saveAnswer}
          />
        ) : (
          <OnboardingOptions
            step={step}
            options={question.options}
            selected={answers[question.key]}
            saveAnswer={saveAnswer}
            answerKey={question.key}
          />
        )}

        <div className="actions">
          <button
            className="previous"
            onClick={previous}
            disabled={step === 0}
          >
            ← Previous
          </button>

          <button className="next" onClick={next}>
            {isReminder ? "Continue" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;