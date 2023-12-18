import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "query-string"
import {AddQueryParams, QueryParams} from "@/types/general";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateKey = () => {
  return Math.floor(Math.random() * 900) + 100;
};

export function addQueryParams({ params, keys, value }: AddQueryParams) {
  const currentUrl = qs.parse(params)

  currentUrl[keys[0]] = value

  return qs.stringifyUrl(
      {
        url: window.location.pathname,
        query: currentUrl,
      },
      { skipNull: true }
  )
}

export function removeQueryParams({ params, keys }: QueryParams) {
  const currentUrl = qs.parse(params)

  keys.forEach(key => {
    delete currentUrl[key]
  })

  return qs.stringifyUrl(
      {
        url: window.location.pathname,
        query: currentUrl,
      },
      { skipNull: true }
  )
}

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

export const handleError = (error: unknown) => {
  console.log(error)

  throw new Error(typeof error === "string" ? error : JSON.stringify(error))
}