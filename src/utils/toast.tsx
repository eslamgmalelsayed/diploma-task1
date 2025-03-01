import toast, { ToastOptions } from "react-hot-toast";

const defaultOptions: ToastOptions = {
  duration: 3000,
  position: "top-left",
};

export const showToast = {
  error: (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  },
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  },
  loading: (message: string, options?: ToastOptions) => {
    toast.loading(message, { ...defaultOptions, ...options });
  },
  dismiss: toast.dismiss,
};
