import {
  AutoConversationsIcon,
  Home03Icon,
  Pot02Icon,
  UserSquareIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../shared/Colors";

const TabLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarInactiveTintColor: Colors.DEFAULT,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <HugeiconsIcon
                icon={Home03Icon}
                size={size}
                color={color}
                strokeWidth={1.5}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Meals"
          options={{
            tabBarIcon: ({ color, size }) => (
              <HugeiconsIcon
                icon={Pot02Icon}
                size={size}
                color={color}
                strokeWidth={1.5}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Progress"
          options={{
            tabBarIcon: ({ color, size }) => (
              <HugeiconsIcon
                icon={AutoConversationsIcon}
                size={size}
                color={color}
                strokeWidth={1.5}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <HugeiconsIcon
                icon={UserSquareIcon}
                size={size}
                color={color}
                strokeWidth={1.5}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabLayout;
