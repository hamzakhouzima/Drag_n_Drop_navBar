'use client'
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NavbarWrapper from './components/NavbarWrapper';

const Page = () => {
  const [navbars, setNavbars] = useState([
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Contact' },
  ]);

  const moveNavbar = (dragIndex, hoverIndex) => {
    const draggedNavbar = navbars[dragIndex];

    setNavbars((prevNavbars) => {
      const updatedNavbars = [...prevNavbars];
      updatedNavbars.splice(dragIndex, 1);
      updatedNavbars.splice(hoverIndex, 0, draggedNavbar);
      return updatedNavbars;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {navbars.map((navbar, index) => (
          <NavbarWrapper
            key={navbar.id}
            id={navbar.id}
            index={index}
            moveNavbar={moveNavbar}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default Page;
