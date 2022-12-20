import { View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setVariables({ "--rem": "10px" });

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-remTest aspect-square bg-[#ffdd00]" />
    </View>
  );
}
