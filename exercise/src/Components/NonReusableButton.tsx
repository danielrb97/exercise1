type NonReusableButtonProps = {
  text: string;
  icon: string;
  elementList: string[];
};

const NonReusableRowList = ({
  text,
  icon,
  elementList,
}: NonReusableButtonProps) => {
  return (
    <div className="RowList">
      {elementList.map((child, index) => (
        <div key={`${index}${child}`} className="Row">{child}</div>
      ))}
    </div>
  );
};

export default NonReusableRowList;
