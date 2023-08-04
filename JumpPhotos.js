import { Text } from "react-native";
export default function JumpPhotos({ route }) {
  const data = route.params;

  return <Text>{data.secure_url}</Text>;
}
