import { useState } from "react";
import { analyzeResume } from "../api";

export default function Upload({ setResult }) {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_description", jd);

    const res = await analyzeResume(formData);
    setResult(res.data);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Upload Resume</h2>

      <input
        type="file"
        className="mb-4"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <textarea
        className="w-full border p-3 rounded-lg mb-4"
        rows="5"
        placeholder="Paste Job Description..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Analyze Resume
      </button>
    </div>
  );
}