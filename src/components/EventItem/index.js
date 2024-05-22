import Image from 'next/image';
import clsx from 'clsx';

export default function EventItem({event}) {
  return (
    
    <div className=" border-t-8 border rounded-md shadow-md border-goldenYellow-700 rounded-t-xl  mx-auto relative flex  flex-col">
        <Image src={event.img} alt={event.title} width={400} height={500}/>
        <h3 className="my-4 pb-2 pl-2 border-b-4 border-goldenYellow-600">{event.title}</h3>
        <div className="  ">
            <ul>{
                event.schedules.map((schedule,index) => {
                    return <li 
                    className={clsx("px-2", index %2 === 0?"bg-retroBlue-100":"bg-retroBlue-200" ,"py-1 hover:bg-retroBlue-300")}
                    key={index}>
                        {schedule.time}  {schedule.activity}
                    </li>
                })
                }</ul>
        </div>
    </div>
    
  )
}
