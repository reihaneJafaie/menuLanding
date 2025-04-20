import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // آرایه‌ای برای ذخیره آیتم‌ها
  }),

  getters: {
    cartCount: (state) => state.items.length, // تعداد آیتم‌های سبد خرید
  },

  actions: {
    addToCart(item) {
      this.items.push(item); // اضافه کردن آیتم به سبد خرید
    },
    removeFromCart(item) {
      const index = this.items.findIndex(i => i.id === item.id);
      if (index !== -1) {
        this.items.splice(index, 1); // حذف آیتم از سبد خرید
      }
    },
  },
});
