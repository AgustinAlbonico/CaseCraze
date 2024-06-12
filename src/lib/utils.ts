import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

//Sirve para mergear classnames, primero se pasa un string con las clases que se van a usar siempre
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
