import { useState } from "react";

export default function LumoApp() {
  const [mood, setMood] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const moodOptions = [
    { label: "עייפה", value: "tired", color: "bg-blue-200" },
    { label: "לחוצה", value: "stressed", color: "bg-red-200" },
    { label: "מבולבלת", value: "lost", color: "bg-purple-200" },
    { label: "מלאת אנרגיה", value: "energized", color: "bg-green-200" },
  ];

  const moodSuggestions = {
    tired: "נסי לעצום עיניים לדקה אחת ולהתרכז רק בנשימה.",
    stressed: "בואי נעשה ביחד תרגול נשימה קצר: נשמי פנימה ל-4 שניות, החזיקי ל-4, נשפי ל-4.",
    lost: "כתבי על דף שלושה דברים שאת כן יודעת עכשיו – אפילו קטנים.",
    energized: "בדיוק הזמן לזוז! שימי שיר טוב ורקדי דקה מול המראה."
  };

  const handleMoodSelect = (value) => {
    setMood(value);
    setSuggestion(moodSuggestions[value]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4 text-right font-sans">
      <h1 className="text-3xl font-bold mb-6">מה שלומך עכשיו?</h1>
      <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-sm">
        {moodOptions.map((m) => (
          <button
            key={m.value}
            className={`p-4 rounded-xl shadow ${m.color} hover:opacity-80`}
            onClick={() => handleMoodSelect(m.value)}
          >
            {m.label}
          </button>
        ))}
      </div>

      {suggestion && (
        <div className="bg-white rounded-xl shadow p-6 max-w-sm text-lg text-gray-700">
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}
