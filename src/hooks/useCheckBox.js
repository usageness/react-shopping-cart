import { useEffect, useState } from 'react';

export const useCheckBox = (state) => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    if (state.length > 0) {
      if (checkedList.length >= state.length) {
        setSelectAllChecked(true);
      } else {
        setSelectAllChecked(false);
      }
    }
  }, [state, checkedList]);

  const handleChecked = (productId) => {
    const prevState = [...checkedList];
    const itemIndex = checkedList.findIndex((id) => id === productId);

    if (itemIndex === -1) {
      setCheckedList([...prevState, productId]);
      return;
    }

    if (checkedList.length === 1) {
      setCheckedList([]);
      return;
    }

    setCheckedList(() => {
      prevState.splice(itemIndex, 1);
      return prevState;
    });
  };

  const isChecked = (productId) => checkedList.findIndex((id) => id === productId) !== -1;

  const checkAllSelectButton = () => {
    if (state.length <= 0) {
      setSelectAllChecked(!selectAllChecked);
      return;
    }

    if (checkedList.length >= state.length) {
      setCheckedList([]);
      setSelectAllChecked(false);
      return;
    }

    setCheckedList(state.map((item) => item.id));
    setSelectAllChecked(true);
  };

  const deleteSelectedItem = () => {
    if (checkedList <= 0) {
      return;
    }

    setCheckedList([]);
  };

  return {
    checkedList,
    selectAllChecked,
    handleChecked,
    isChecked,
    checkAllSelectButton,
    deleteSelectedItem,
  };
};