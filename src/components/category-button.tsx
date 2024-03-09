import clsx from "clsx";
import { CategoryProps } from "@/@types";
import { Pressable, Text } from "react-native";

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      className={clsx(
        "bg-slate-800 px-4 justify-center rounded-md h-10 border-2 border-transparent",
        isSelected && "border-lime-300"
      )}
      {...rest}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
