import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set) => ({
            cart: [],

            addProduct: (product) => set((state) => {
                const existingProduct = state.cart.find((item) => item._id === product._id);

                if (existingProduct) {
                    return {
                        cart: state.cart.map((item) =>
                            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                        ),
                    };
                } else {
                    return { cart: [...state.cart, { ...product, quantity: 1 }] };
                }
            }),

            removeProduct: (productId) => set((state) => ({
                cart: state.cart.filter((item) => item._id !== productId),
            })),

            clearCart: () => set(() => ({
                cart: [],
            })),
        }),
        {
            name: 'cart-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useCartStore;
