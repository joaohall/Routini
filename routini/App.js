import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import Notes from "./screens/notes/notes";
import Task from "./screens/task/task.js";
import User from "./screens/user/user";

//Icons
import AccountIcon from "./assets/account_circle";
import NotesIcon from "./assets/notes";
import TaskIcon from "./assets/tasks";

const Tab = createBottomTabNavigator();

export default function App() {
  console.log("barabens!");
  NavigationBar.setBackgroundColorAsync("#ffffff00");
  const TabsView = () => {
    return (
      <Tab.Navigator
      
        screenOptions={{
          
          animation: 'shift',
          headerShown: false,
          tabBarStyle: {
            height: 75,
            padding: 8,
            paddingBottom: 12,
            
          },
          
        }}
      >
        <Tab.Screen
          name="Tarefas"
          component={Task}
          options={{
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarIcon: ({ focused, color }) => (
              <TaskIcon color={focused ? color : "black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Notas"
          component={Notes}
          options={{
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarIcon: ({ focused, color }) => (
              <NotesIcon color={focused ? color : "black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Usuário"
          component={User}
          options={{
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarIcon: ({ focused, color }) => (
              <AccountIcon color={focused ? color : "black"} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <TabsView />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
