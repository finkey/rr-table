import { useState } from 'react';

const useIsOpen = (items, id) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardData, setCardData] = useState({});
  const [rowId, setRowId] = useState('');

  const handleToggle = () => {
    if (!isOpen) {
      setRowId(id);
      setIsOpen(true);
      setCardData(items);
    } else if (rowId === id) {
      setIsOpen(false);
      setRowId('');
      setCardData('');
    } else {
      setCardData(items);
    }
  };
  return handleToggle;
};

export default useIsOpen;
