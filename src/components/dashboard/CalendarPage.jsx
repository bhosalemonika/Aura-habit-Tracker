import { useMemo, useState } from "react";

const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMonthDates(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(firstDay.getDate() - firstDay.getDay());

  const days = [];
  for (let index = 0; index < 32; index += 1) {
    const current = new Date(startDate);
    current.setDate(startDate.getDate() + index);
    days.push(current);
  }

  return {
    monthLabel: new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric"
    }).format(date),
    days,
    totalDays: lastDay.getDate()
  };
}

function getHabitDate(habit, monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  if (habit.startDate) {
    const parsedDate = new Date(habit.startDate);
    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate;
    }
  }

  const seed = [...habit.name].reduce((total, character) => total + character.charCodeAt(0), 0);
  const fallbackDay = 1 + (seed % daysInMonth);
  return new Date(year, month, fallbackDay);
}

function HabitPill({ habit, dateKey }) {
  const shortName = habit.name.length > 10 ? `${habit.name.slice(0, 10)}…` : habit.name;

  return (
    <span className="habit-pill" key={`${dateKey}-${habit.id}`} title={habit.name}>
      {shortName}
    </span>
  );
}

function CalendarDay({ date, dateKey, isCurrentMonth, isSelected, isToday, dayHabits, onSelectDate }) {
  return (
    <button
      key={dateKey + date.getTime()}
      type="button"
      className={`calendar-day compact-day ${isCurrentMonth ? "current-month" : "other-month"} ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}`}
      onClick={() => onSelectDate(date)}
    >
      <span className="calendar-day-number">{date.getDate()}</span>
      <div className="calendar-day-habits compact-habits">
        {dayHabits.slice(0, 1).map((habit) => (
          <HabitPill key={`${dateKey}-${habit.id}`} habit={habit} dateKey={dateKey} />
        ))}
        {dayHabits.length > 1 && (
          <span className="habit-pill more">+{dayHabits.length - 1}</span>
        )}
      </div>
    </button>
  );
}

function SelectedDayPanel({ selectedDate, selectedHabits }) {
  const selectedKey = selectedDate.toDateString();

  return (
    <aside className="calendar-side-panel compact-side-panel">
      <h2>{selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</h2>
      <div className="calendar-side-list compact-side-list">
        {selectedHabits.length > 0 ? (
          selectedHabits.map((habit) => (
            <div className="calendar-side-item compact-side-item" key={`${selectedKey}-${habit.id}`}>
              <div>
                <strong>{habit.name}</strong>
                <small>{habit.category}</small>
              </div>
              <span>{habit.reminderTime || "Anytime"}</span>
            </div>
          ))
        ) : (
          <div className="calendar-empty-state">
            <span>No habits scheduled</span>
          </div>
        )}
      </div>
    </aside>
  );
}

function CalendarPage({ habits }) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );

  const monthData = useMemo(() => getMonthDates(today), []);

  const habitsByDate = useMemo(() => {
    return habits.reduce((accumulator, habit) => {
      const dateKey = getHabitDate(habit, today).toDateString();
      if (!accumulator[dateKey]) {
        accumulator[dateKey] = [];
      }
      accumulator[dateKey].push(habit);
      return accumulator;
    }, {});
  }, [habits, today]);

  const selectedKey = selectedDate.toDateString();
  const selectedHabits = habitsByDate[selectedKey] || [];

  return (
    <section className="calendar-page simple-page compact-calendar">
      <div className="calendar-header">
        <div>
          <h1>Calendar</h1>
        </div>
        <div className="calendar-month">{monthData.monthLabel}</div>
      </div>

      <div className="calendar-layout compact-layout">
        <div className="calendar-panel compact-panel">
          <div className="calendar-weekdays compact-weekdays">
            {weekdayNames.map((dayName) => (
              <span key={dayName}>{dayName}</span>
            ))}
          </div>

          <div className="calendar-grid compact-grid">
            {monthData.days.map((date) => {
              const dateKey = date.toDateString();
              const dayHabits = habitsByDate[dateKey] || [];
              const isCurrentMonth = date.getMonth() === today.getMonth();
              const isSelected = selectedKey === dateKey;
              const isToday = date.toDateString() === today.toDateString();

              return (
                <CalendarDay
                  key={dateKey + date.getTime()}
                  date={date}
                  dateKey={dateKey}
                  isCurrentMonth={isCurrentMonth}
                  isSelected={isSelected}
                  isToday={isToday}
                  dayHabits={dayHabits}
                  onSelectDate={setSelectedDate}
                />
              );
            })}
          </div>
        </div>

        <SelectedDayPanel selectedDate={selectedDate} selectedHabits={selectedHabits} />
      </div>
    </section>
  );
}

export default CalendarPage;
