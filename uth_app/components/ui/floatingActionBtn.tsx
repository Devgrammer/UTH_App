import { TouchableOpacity, Text, View } from "react-native";

interface FloatingButtonProps {
  onPress: () => void;
  label?: string;
  icon?: string;
}

export default function FloatingButton({
  onPress,
  label = "Add",
  icon = "+",
}: FloatingButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        shadowColor: "#004532",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
      }}
      className="absolute flex bottom-6 z-100 right-8 "
    >
      <View className="items-center justify-center w-12 h-12 rounded-lg text-surface-container-lowest bg-primary">
        <Text className="text-4xl font-bold text-surface-container-lowest">{icon}</Text>
      </View>
    </TouchableOpacity>
  );
}
