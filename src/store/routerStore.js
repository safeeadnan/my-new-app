// routerStore.js
import create from 'zustand';

const useRouteStore = create((set) => {
  // Get current page from browser storage or set a default
  const currentPage = localStorage.getItem('currentPage') || '/main_window';

  return {
    currentPage: currentPage,
    setCurrentPage: (page) => {
      // Update current page in browser storage
      localStorage.setItem('currentPage', page);
      set({ currentPage: page });
    },
  };
});

export default useRouteStore;
