import toast from 'react-hot-toast';
import { ToastSeverity } from '../enums';

// Example with customization
export const showToast = (message: string, type: ToastSeverity) => {
    const options = {
        duration: 5000, // Duration in milliseconds
        style: {
            background: type === 'success' ? 'green' : 'red',
            color: 'white',
        },
        icon: type === 'success' ? '✅' : '❌',
    };

    switch (type) {
        case ToastSeverity.SUCCESS:
            return toast.success(message);
        case ToastSeverity.ERROR:
            return toast.error(message);
        default:
            return toast.success(message); 
    }
};