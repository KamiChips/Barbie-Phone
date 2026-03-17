import { TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
}

export default function BarbieButton({
  title,
  onPress,
  variant = "primary",
}: Props) {
  const primary =
    "bg-pink-500";

  const secondary =
    "bg-white border-2 border-pink-400";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`py-4 rounded-xl mb-4 ${
        variant === "primary" ? primary : secondary
      }`}
    >
      <Text
        className={`text-center font-bold text-base ${
          variant === "primary"
            ? "text-white"
            : "text-pink-500"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}