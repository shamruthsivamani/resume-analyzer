import { useState } from "react";
import { motion } from "framer-motion";

import ATSChart from "./components/ATSChart";
import SkillChart from "./components/SkillChart";
import RadarChartComp from "./components/RadarChartComp";
import Upload from "./components/Upload";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-black-100">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h5 className="text-xl font-bold text-blue-600">
          AI Resume Analyzer
        </h5>
      </nav>

      {/* Main */}
      <div className="bg-black-100 max-w-6xl mx-auto p-6">
        <Upload setResult={setResult} />
        <Result result={result} />

      {result && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          className="mt-12 space-y-8"
        >
          {/* TOP ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

           <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0f172a] rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center"
            >
              <h2 className="text-white mb-6 font-semibold text-lg">
                ATS Score
              </h2>

              {/* Chart */}
              <div className="w-[220px] h-[220px] flex items-center justify-center">
                <ATSChart score={result.score || 75} />
              </div>

              {/* ✅ FIXED TEXT */}
              
            </motion.div>

            {/* SKILL CHART */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0f172a] rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-white mb-4 font-semibold">Skill Breakdown</h2>

              {/* ✅ FIX HEIGHT */}
              <div className="w-full h-[280px]">
                <SkillChart
                  data={
                    result.breakdown?.length
                      ? result.breakdown
                      : [
                          { name: "Skills", score: 80 },
                          { name: "Projects", score: 70 },
                          { name: "Experience", score: 65 },
                        ]
                  }
                />
              </div>
            </motion.div>
          </div>

          {/* RADAR CHART */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0f172a] rounded-2xl p-6 shadow-lg flex flex-col items-center"
          >
            <h2 className="text-white mb-6 font-semibold">Profile Analysis</h2>

            {/* ✅ CRITICAL FIX */}
            <div className="w-full max-w-[600px] h-[450px]">
              <RadarChartComp
                data={
                  result.radar?.length
                    ? result.radar
                    : [
                        { subject: "Skills", value: 80 },
                        { subject: "Experience", value: 70 },
                        { subject: "Projects", value: 60 },
                        { subject: "Education", value: 75 },
                      ]
                }
              />
            </div>
          </motion.div>
        </motion.div>
      )}
      </div>
    </div>
  );
}

export default App;