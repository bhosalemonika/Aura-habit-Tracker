import { categoryOptions, frequencyOptions, habitIcons } from "../../data/habitOptions";

function FormField({ label, children, fullWidth = false }) {
  return (
    <div className={`field ${fullWidth ? "field-full" : ""}`}>
      <label>{label}</label>
      {children}
    </div>
  );
}

function HabitForm({ form, isEditing, onChange, onSubmit, onCancel }) {
  const setValue = (field) => (event) => {
    onChange(field, event.target.value);
  };

  return (
    <form className="habit-form" onSubmit={onSubmit}>
      <FormField label="HABIT NAME" fullWidth>
        <input
          type="text"
          placeholder="e.g., Deep Work Session"
          value={form.name}
          onChange={setValue("name")}
        />
      </FormField>

      <FormField label="DESCRIPTION" fullWidth>
        <textarea
          placeholder="Define the core objective of this habit..."
          value={form.description}
          onChange={setValue("description")}
        />
      </FormField>

      <div className="field-row">
        <FormField label="CATEGORY">
          <select value={form.category} onChange={setValue("category")}>
            {categoryOptions.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="FREQUENCY">
          <div className="segmented-options">
            {frequencyOptions.map((frequency) => (
              <button
                key={frequency}
                type="button"
                className={form.frequency === frequency ? "segment active" : "segment"}
                onClick={() => onChange("frequency", frequency)}
              >
                {frequency}
              </button>
            ))}
          </div>
        </FormField>
      </div>

      <div className="field-row">
        <FormField label="REMINDER TIME">
          <input
            type="time"
            value={form.reminderTime}
            onChange={setValue("reminderTime")}
          />
        </FormField>

        <FormField label="START DATE">
          <input
            type="date"
            value={form.startDate}
            onChange={setValue("startDate")}
          />
        </FormField>
      </div>

      <FormField label="VISUAL ANCHOR (ICON)" fullWidth>
        <div className="icon-picker">
          {habitIcons.map((icon) => (
            <button
              key={icon.id}
              type="button"
              className={form.icon === icon.id ? "icon-option selected" : "icon-option"}
              aria-label={icon.label}
              aria-pressed={form.icon === icon.id}
              onClick={() => onChange("icon", icon.id)}
            >
              <img src={icon.src} alt="" />
            </button>
          ))}
        </div>
      </FormField>

      <div className="form-actions">
        <button type="button" className="secondary-btn" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit" className="primary-btn">
          {isEditing ? "Update Habit" : "Save Habit"}
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
