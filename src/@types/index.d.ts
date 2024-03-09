import { LinkProps } from "expo-router";
import { PressableProps, TouchableOpacityProps } from "react-native";

declare module "@env";

export interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export interface ButtonTextProps {
  children: React.ReactNode;
}

export interface ButtonIconProps {
  children: React.ReactNode;
}

export interface CategoryProps extends PressableProps {
  title: string;
  isSelected?: boolean;
}

export interface HeaderProps {
  title: string;
  cartQuantityItems?: number;
}

export interface LinkButtonProps extends LinkProps<string> {
  title: string;
}

export interface ProductDataProps {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
}

export interface ProductProps extends TouchableOpacityProps {
  data: ProductDataProps;
}

export interface ProductCartProps extends ProductProps {
  quantity: number;
}

export interface StateProps {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
}

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  description: string;
  cover: any;
  thumbnail: any;
  ingredients: string[];
}