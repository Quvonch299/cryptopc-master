import { create } from "zustand";
import { api, apiToken } from "@/lib/axios";

export const useApiStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    // =====================
    //   TOKEN YO‘Q FUNKSIYALAR
    // =====================

    getData: async (endpoint) => {
        set({ loading: true, error: null });
        try {
            const res = await api.get(endpoint);
            set({ data: res.data });
        } catch (err) {
            set({ error: err?.response?.data || err });
        } finally {
            set({ loading: false });
        }
    },

    postData: async (endpoint, body) => {
        set({ loading: true, error: null });
        try {
            const res = await api.post(endpoint, body);
            set({ data: res.data });
            return res.data;
        } catch (err) {
            set({ error: err?.response?.data || err });
            return err;
        } finally {
            set({ loading: false });
        }
    },

    putData: async (endpoint, body) => {
        set({ loading: true, error: null });
        try {
            const res = await api.put(endpoint, body);
            set({ data: res.data });
        } catch (err) {
            set({ error: err?.response?.data || err });
        } finally {
            set({ loading: false });
        }
    },

    deleteData: async (endpoint) => {
        set({ loading: true, error: null });
        try {
            const res = await api.delete(endpoint);
            set({ data: res.data });
        } catch (err) {
            set({ error: err?.response?.data || err });
        } finally {
            set({ loading: false });
        }
    },

    // =====================
    //   TOKEN BILAN FUNKSIYALAR
    // =====================

    getDataToken: async (endpoint) => {
        set({ loading: true, error: null });
        try {
            const res = await apiToken.get(endpoint);
            set({ data: res.data });
        } catch (err) {
            set({ error: err?.response?.data || err });
        } finally {
            set({ loading: false });
        }
    },

    postDataToken: async (endpoint, body) => {
        set({ loading: true, error: null });
        try {
            const res = await apiToken.post(endpoint, body);
            set({ data: res.data });
        } catch (err) {
            set({ error: err?.response?.data || err });
        } finally {
            set({ loading: false });
        }
    },

    putDataToken: async (endpoint, body) => {
        set({ loading: true, error: null });
        try {
            const res = await apiToken.put(endpoint, body);
            set({ data: res.data });
        } catch (err) {
            set({ error: err?.response?.data || err });
        } finally {
            set({ loading: false });
        }
    },

    deleteDataToken: async (endpoint) => {
        set({ loading: true, error: null });
        try {
            const res = await apiToken.delete(endpoint);
            set({ data: res.data });
        } catch (err) {
            set({ error: err?.response?.data || err });
        } finally {
            set({ loading: false });
        }
    },
}));
