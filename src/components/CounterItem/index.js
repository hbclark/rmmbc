
import CountUp from 'react-countup';

export default function CounterItem({end,title}) {
  return (
    <div className="w-48 h-28 mb-4 bg-white rounded-sm shadow-md p-4 border border-goldenYellow-500">
        <h3 className="mb-5  text-xl font-bold text-center">{title}</h3>
        <p className="text-center">
    <CountUp end={end} duration={4}  />

        </p>
    </div>
  )
}

