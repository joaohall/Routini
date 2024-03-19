import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title, SubTitle, Card, CardList } from "./task.styles";
import { View } from "react-native";


export default function Task(props) {
  const [taskCounter, setTaskCounter] = useState(1);
  const [taskLimiter, setTaskLimiter] = useState(5);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];



  return (
    <SafeAreaView style={{ padding: 24, flex: 1, backgroundColor: '#f7f7f7'}}>
        <Title>Tarefas de hoje</Title>
        <SubTitle>
          ({taskCounter}/{taskLimiter}) Tarefas completas
        </SubTitle>
        <CardList
          data={DATA}
          renderItem={({ item }) => (
            <Card
              task={item.title}
              desc="Você precisa fazer tal coisa viu? loremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
            />
          )}
        />
    </SafeAreaView>
  );
}
