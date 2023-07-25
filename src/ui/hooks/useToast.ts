import { toast, ToastOptions, ToastContent } from "react-toastify";

import { useRef } from "react";

export const useToast = () => {
  const ref = useRef<any>(null);

  const show = (content: ToastContent, options?: ToastOptions) => {
    ref.current = toast(content, options);
  };

  const update = (content: ToastContent, options?: ToastOptions) => {
    if (ref.current) {
      toast.update(ref.current, { render: content, ...options });
    } else {
      ref.current = toast(content, options);
    }
  };

  return { show, update };
};
