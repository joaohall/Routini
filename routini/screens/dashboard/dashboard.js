import { SafeAreaView } from "react-native-safe-area-context";
import { ContributionGraph } from "react-native-chart-kit";
import {
  SubTitle,
  Title,
  TitlesContainer,
  SubtitleContainer,
  ChartView,
} from "./dashboard.styles";
import { View } from "react-native";
import { ScrollView } from "react-native";

export default function Dashboard() {
  const commitsData = [
    { date: "2024-01-08", count: 0 },
    { date: "2024-01-09", count: 0 },
    { date: "2024-01-10", count: 0 },
    { date: "2024-01-11", count: 0 },
    { date: "2024-01-24", count: 0 },
    { date: "2024-01-25", count: 0 },
    { date: "2024-01-26", count: 0 },
    { date: "2024-01-27", count: 5 },
    { date: "2024-01-28", count: 2 },
    { date: "2024-01-29", count: 0 },
    { date: "2024-01-30", count: 0 },
    { date: "2024-01-31", count: 0 },
    { date: "2024-02-01", count: 0 },
    { date: "2024-02-02", count: 0 },
    { date: "2024-02-03", count: 2 },
    { date: "2024-02-04", count: 4 },
    { date: "2024-02-05", count: 5 },
    { date: "2024-02-06", count: 6 },
    { date: "2024-02-07", count: 7 },
    { date: "2024-02-08", count: 0 },
    { date: "2024-02-09", count: 8 },
    { date: "2024-02-10", count: 9 },
    { date: "2024-02-11", count: 10 },
    { date: "2024-02-12", count: 2 },
    { date: "2024-02-13", count: 2 },
    { date: "2024-02-14", count: 2 },
    { date: "2024-02-15", count: 2 },
    { date: "2024-02-16", count: 2 },
    { date: "2024-02-17", count: 0 },
    { date: "2024-02-18", count: 0 },
    { date: "2024-02-19", count: 1 },
    { date: "2024-02-20", count: 1 },
    { date: "2024-02-21", count: 1 },
    { date: "2024-02-22", count: 1 },
    { date: "2024-02-23", count: 0 },
    { date: "2024-02-24", count: 0 },
    { date: "2024-02-25", count: 0 },
    { date: "2024-02-26", count: 0 },
    { date: "2024-02-27", count: 0 },
    { date: "2024-02-28", count: 1 },
    { date: "2024-02-29", count: 1 },
    { date: "2024-03-01", count: 1 },
    { date: "2024-03-02", count: 1 },
    { date: "2024-03-03", count: 1 },
    { date: "2024-03-04", count: 0 },
    { date: "2024-03-05", count: 0 },
    { date: "2024-03-06", count: 0 },
    { date: "2024-03-07", count: 0 },
    { date: "2024-03-08", count: 0 },
    { date: "2024-03-09", count: 0 },
    { date: "2024-03-10", count: 0 },
    { date: "2024-03-11", count: 0 },
    { date: "2024-03-12", count: 2 },
    { date: "2024-03-13", count: 0 },
    { date: "2024-03-14", count: 0 },
    { date: "2024-03-15", count: 6 },
    { date: "2024-03-16", count: 0 },
    { date: "2024-03-17", count: 0 },
    { date: "2024-03-18", count: 3 },
    { date: "2024-03-19", count: 0 },
    { date: "2024-03-20", count: 0 },
    { date: "2024-12-21", count: 0 },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <TitlesContainer>
        <Title>Olá, João 🎉</Title>
      </TitlesContainer>
      <ChartView
        style={{
          margin: 24,
          backgroundColor: "white",
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#e3e3e3",
        }}
      >
        <SubtitleContainer>
          <SubTitle>Gráfico mensal</SubTitle>
        </SubtitleContainer>
        <ContributionGraph
          values={commitsData}
          numDays={93}
          width={"100%"}
          height={200}
          chartConfig={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            backgroundGradientFrom: "rgba(255, 255, 255, 0)",
            backgroundGradientTo: "rgba(255, 255, 255, 0)",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 100, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 100, 255, ${opacity})`,
            propsForDots: {
              r: "6",
              strokeWidth: "2",
            },
          }}
          style={{
            borderRadius: 15,
          }}
        />
        <SubtitleContainer>
        </SubtitleContainer>
      </ChartView>
      </ScrollView>
    </SafeAreaView>
  );
}
