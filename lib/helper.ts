export const generateKey = () => {
    return Math.floor(Math.random() * 900) + 100;
};

// export default function callToast(
//     toast: React.RefObject<Toast | null>,
//     type: boolean | string,
//     msg: string
// ) {
//     if (toast.current) {
//         toast.current?.show({
//             severity: type === "warn" ? "warn" : type ? "success" : "error",
//             summary: type === "warn" ? "Warning" : type ? "Successful" : "Error",
//             detail: msg,
//             life: 3000,
//         });
//     }
// }
