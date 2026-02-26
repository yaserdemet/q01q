import React from "react";
interface HeaderProps {
  header: string;
  explanation: string;
  Icon: React.ComponentType;
  children?: React.ReactNode;
  color?: string;
}
const Header = ({ header, color, explanation, Icon, children }: HeaderProps) => {
  return (
    <div className="p-8">
      <div className="flex  items-center gap-2">
        <Icon className={color} />
        <h1 className="text-3xl font-bold">{header}</h1>
      </div>

      <p className="text-gray-600 ">{explanation}</p>
      {children}
    </div>
  );
};

export default Header;
