import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollased] = useState(false);

  const onToggle = () => {
    setCollased((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
          <ThemeSwitcher className={cls.links}/>
      {/* <LangSwitcher/> */}
      </div>
    </div>
  );
};
