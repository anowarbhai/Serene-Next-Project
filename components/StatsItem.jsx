import CountUp from "react-countup";

export default function StatsItem({countNum, countText, text}) {
  return (
    <div className="text-center font-primary">
        <div className="text-[40px] text-accent mb-4">
            <CountUp end={countNum} delay={2.4} duration={6} />
            <span>{countText}</span>
        </div>
        <p>{text}</p>
    </div>
  )
}
