import { View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setVariables({ "--rem": "10px" });

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* works */}
      <View className="w-remTest min-h-[40px] bg-[#ffdd00]" />

      {/* bug */}
      <View className="w-remTest min-h-remTest bg-[#ddff00]" />
    </View>
  );
}
