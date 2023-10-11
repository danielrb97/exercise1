import { Children, FC, PropsWithChildren } from "react";

const RowList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="RowList">
      {Children.map(children, (child) => (
        <div className="Row">{child}</div>
      ))}
    </div>
  );
};

export default RowList;
