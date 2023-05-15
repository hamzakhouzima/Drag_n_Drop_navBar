import React from 'react';
import { useDrag, useDrop } from 'react-dnd';




const NavbarWrapper = ({ id, index, moveNavbar }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'navbar', id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'navbar',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveNavbar(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      <Navbar />
    </div>
  );
};

export default NavbarWrapper;
