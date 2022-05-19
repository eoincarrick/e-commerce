import React, { useState, useEffect, createContext, useContext } from 'react';

const ManageContext = createContext();

export const ManageStateContext = ({ children }) => {
  return <ManageContext.Provider value={{}}>{children}</ManageContext.Provider>;
};

const useManageContext = () => useContext(ManageContext);
