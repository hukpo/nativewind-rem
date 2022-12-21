import { View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setVariables({ "--rem": "10px" });

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* works */}
      <View className="w-remTest min-h-[10rem] bg-[#ffdd00]" />

      {/* bug, minHeight is undefined */}
      <View className="w-remTest min-h-remTest bg-[#ddff00]" />
    </View>
  );
}
