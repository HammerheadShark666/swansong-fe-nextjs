
import Date from '@/lib/date';

type IProps = {    
  label: string;
  date: string
};

export default function DateField({label, date} : IProps){ 
  return (
    <div className="grid grid-cols-12 text-xs pt-1"> 
      <div className="col-span-7 font-semibold">{label}: </div>
      <div className="col-span-5">
        <Date dateString={date} />
      </div>
    </div> 
)};