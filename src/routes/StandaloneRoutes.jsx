import { useLocation, useNavigate } from "react-router-dom";
import AddHabit from "../pages/AddHabit";
import MyHabits from "../pages/MyHabits";

export function StandaloneMyHabits() {
  const navigate = useNavigate();

  return (
    <MyHabits
      openAddHabit={() => navigate("/add-habit")}
      openEditHabit={(habit) =>
        navigate("/add-habit", { state: { habit } })
      }
    />
  );
}

export function StandaloneAddHabit() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AddHabit
      key={location.state?.habit?.id || "new"}
      editHabit={location.state?.habit || null}
      goToMyHabits={() => navigate("/habits")}
    />
  );
}