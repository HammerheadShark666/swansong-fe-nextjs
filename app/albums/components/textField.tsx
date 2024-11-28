type IProps = {    
  label: string;
  text: string
};

export default function TextField({label, text} : IProps){ 
  return (
    <div className="grid grid-cols-12 text-xs  pt-1"> 
      <div className="col-span-7 font-semibold">{label}: </div>
      <div className="col-span-5">
        {text}
      </div>
    </div> 
)};