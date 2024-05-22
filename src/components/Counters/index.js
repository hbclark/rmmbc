import CounterItem from '../CounterItem';
// // 
export default function Counters() {
    const counters = [
        {title: 'Happy Clients', end: 10200},
        {title: 'Trails Secured', end: 200},
        {title: 'Events ', end: 300},
    ]
  return (
    <div className="z-10 relative -mt-8 w-1/2   grid grid-cols-1 md:grid-cols-3 mx-auto justify-center ">
        {counters.map((counter, index) => (
            <CounterItem key={index} {...counter}/>
        ))}
    </div>
  )
}
