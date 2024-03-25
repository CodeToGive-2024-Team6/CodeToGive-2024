import React, { useContext, createContext, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarContext = createContext();

const SideBar = ({ children, onActivateItem }) => {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState('GOALS');

  const activateItem = (itemName) => {
    setActiveItem(itemName);
    if (onActivateItem) {
      onActivateItem(itemName);
    }
  };

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-lg">
        <div className="p-4 pb-2 flex justify-between items-center mb-16">
          <Link to="/">
            <img
              src="/images/company_logo1.png"
              className={`overflow-hidden transition-all ${
                expanded ? 'w-32' : 'w-0'
              }`}
              alt=""
            />
          </Link>
          <div
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </div>
        </div>

        <SidebarContext.Provider value={{ expanded, activateItem }}>
          <ul className="flex-1 px-3 flex flex-col gap-y-6">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                active: activeItem === child.props.text,
              })
            )}
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

const SideBarItem = ({ icon, text, active, alert }) => {
  const { expanded, activateItem } = useContext(SidebarContext);

  const handleClick = () => {
    activateItem(text);
  };

  return (
    <li
      onClick={handleClick}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? 'bg-rose-100' : 'hover:bg-rose-50 text-gray-600'}
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-rose-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}
    </li>
  );
};

export { SideBar, SideBarItem };
