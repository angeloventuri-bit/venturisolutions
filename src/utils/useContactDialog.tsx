import { create } from 'zustand';

interface ContactDialogStore {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useContactDialog = create<ContactDialogStore>((set) => ({
  isOpen: false,
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
}));
