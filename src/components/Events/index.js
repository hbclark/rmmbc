import EventItem from "../EventItem";

export default function Events() {
    const events = [
    
     
       {
       
        img: '/images/shots/the-view-below.jpg',
        title:"Saturday - 29 September",
        schedules: [
        {
          time: '8:00 AM - 10:00 AM',
          activity: 'Registration opens'
        },
        {
          time: '9：00 AM - 1：00 PM',
          activity: 'GXC'
        },
        {
          time: '1：30 PM - 2：00 PM',
          activity: 'GXC Presentation'
        },
        {
          time: '1：00 PM - 2：00 PM',
          activity: 'Registration'
        },
        {
          time: '2：30 PM - 5：30 PM',
          activity: 'DS'
        },
        {
          time: '6：00 PM - 6：30 PM',
          activity: 'DS Presentation'
        }]
     
    },
    {
        img: '/images/shots/no-helmut.jpg',
        title:"Sunday - 30 September",
        schedules:
        [{
        time: '7:30 AM - 8:30 AM',
        activity: 'Registration opens'
      },
      {
        time: '8：30 AM - 9：00 PM',
        activity: 'Kids XC Race'
      },
      {
        time: '9:00AM - 12：00 PM',
        activity: 'XCO Race'
      },
      {
        time: '8：30 AM - 12：00 PM',
        activity: 'DH Practice'
      },
      {
        time: '12：30 PM -1：30 PM',
        activity: 'XCO Presentation'
      },
      {
        time: '1：30 PM - 4：30 PM',
        activity: 'DH Race'
      },
        {
            time: '5：00 PM - 5：30 PM',
            activity: 'DH Presentation'
        },
        {
            time: '6：00 PM - 6：30 PM',
            activity: 'Overall Presentation'
        }
   
  ]}

 ]
  return (
    <div className="my-10">
        <h2 className="mb-6 text-center text-3xl font-bold">Latest Events</h2>
    <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {events.map((event, index) => (
        <EventItem  key={index} event ={event}/>   
        ))    
        }
       <li>
        <p className="text-xl font-semibold mb-4">Category</p>
       <table class="border-collpase border border-slate-500 rounded-md ">
  <thead class="bg-blue-200">
    <th  class="border border-slate-500"><p><strong>      XC </strong></p></th>
    <th valign="top" class="border border-slate-500"><p><strong>DH</strong></p></th>
    <th  class="border border-slate-500"><p><strong>GXC/DS</strong></p></th>
  </thead>
  <tr class="hover:bg-gray-100">
    <td  class="border border-slate-500" ><p>Elite</p></td>
    <td  class="border border-slate-500"><p>Elip</p></td>
      <td></td>
  </tr>
  <tr class="bg-gray-200 hover:bg-gray-100">

    <td class="border border-slate-500 "><p>Sport</p></td>
    <td  class="border border-slate-500"><p>Sport</p></td>
    <td  class="border border-slate-500"><p>Sport</p></td>
  </tr>
  <tr class="hover:bg-gray-100">
    <td  class="border border-slate-500"><p>Veteran (30-39) </p></td>
    <td  class="border border-slate-500"><p>Veteran (30-39) </p></td>
    <td  class="border border-slate-500"><p>Veteran (30-39)</p></td>
  </tr>
  <tr class="bg-gray-200 hover:bg-gray-100">
    <td  class="border border-slate-500"><p>Masters (40-49)</p></td>
    <td  class="border border-slate-500"><p>Masters (40-49)</p></td>
    <td  class="border border-slate-500"><p>Masters (40-49)</p></td>
  </tr>
  <tr class="hover:bg-gray-100">
    <td  class="border border-slate-500"><p>Super Masters (50+)</p></td>
    <td  class="border border-slate-500"><p>Super Masters (50+)</p></td>
    <td  class="border border-slate-500"><p>Super Masters (50+)</p></td>
  </tr>
  <tr class="bg-gray-200 hover:bg-gray-100">
    <td  class="border border-slate-500"><p>Single speed</p></td>
    <td  class="border border-slate-500"><p>Hardtail/Singlespeed</p></td>
    <td  class="border border-slate-500"><p>Singlespeed</p></td>
  </tr>
  <tr class="hover:bg-gray-100">
    <td class="border border-slate-500"><p>U19</p></td>
    <td  class="border border-slate-500"><p>U19</p></td>
    <td class="border border-slate-500"><p>U19</p></td>
  </tr>
  <tr class="bg-gray-200 hover:bg-gray-100">
    <td class="border border-slate-500"><p>U17</p></td>
    <td  class="border border-slate-500"><p>U17</p></td>
    <td  class="border border-slate-500"><p>U17 </p></td>
  </tr>
  <tr class="hover:bg-gray-100">
    <td  class="border border-slate-500"><p>U15</p></td>
    <td  class="border border-slate-500"><p>U15</p></td>
    <td  class="border border-slate-500"><p>U15 </p></td>
  </tr>
  <tr class="bg-gray-200 hover:bg-gray-100">
    <td  class="border border-slate-500"><p>U13</p></td>
    <td  class="border border-slate-500"><p>U13</p></td>
    <td  class="border border-slate-500"><p>U13</p></td>
  </tr>
</table>
       </li>
    </ul>
    
    
    </div>
    
    
  )
}
