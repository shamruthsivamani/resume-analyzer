import ATSChart from "../components/ATSChart";
import SkillChart from "../components/SkillChart";
import RadarChartComp from "../components/RadarChartComp";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-950 min-h-screen">
      <ATSChart />
      <SkillChart />
      <RadarChartComp />
    </div>
  );
}