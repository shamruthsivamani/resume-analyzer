export default function Result({ result }) {
  if (!result) return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">

      <h2 className="text-xl font-semibold mb-4">Analysis Result</h2>

      {/* Score Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-xl text-center">
          <p className="text-sm text-gray-600">ATS Score</p>
          <h3 className="text-2xl font-bold text-blue-700">
            {result.ats_score}
          </h3>
        </div>

        <div className="bg-green-100 p-4 rounded-xl text-center">
          <p className="text-sm text-gray-600">Similarity</p>
          <h3 className="text-2xl font-bold text-green-700">
            {result.similarity_score}
          </h3>
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-4">
        <h3 className="font-semibold">Matched Keywords</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {result.matched_keywords.map((k, i) => (
            <span
              key={i}
              className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Missing Keywords</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {result.missing_keywords.map((k, i) => (
            <span
              key={i}
              className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <h3 className="font-semibold">Suggestions</h3>
        <ul className="list-disc pl-5 mt-2">
          {result.suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}