// routerStore.js
import create from 'zustand';

const useRouteStore = create((set) => ({
  currentPage: '/main_window', // Default current page
  setCurrentPage: (page) => set({ currentPage: page }), // Function to update current page
}));

export default useRouteStore;
