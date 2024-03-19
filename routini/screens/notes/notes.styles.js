import styled from "styled-components";
import { Text, TouchableNativeFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;
export const SubTitle = styled.Text``;

export const TitlesContainer = styled.View`
  padding: 24px;
`;

const Container = styled.View`
  background-color: #ffffff;
  max-height: 250px;
  flex-direction: column;
  padding: 15px;
  align-items: flex-start;
`;
const ViewContainer = styled.View`
  height: "auto";
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px;
  border: solid #e3e3e3 1px;
`;
const NoteTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;
const NoteText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  opacity: 0.6;
`;
const NoteDate = styled.Text`
  font-weight: 600;
  opacity: 0.61;
`;

export function Note(props) {
  return (

      <ViewContainer>
        <TouchableNativeFeedback style={{ flex: 1, borderRadius: 10 }}>
          <Container>
            <NoteDate>{props.date}</NoteDate>
            <NoteTitle>{props.title}</NoteTitle>
            <NoteText>{props.note}</NoteText>
          </Container>
        </TouchableNativeFeedback>
      </ViewContainer>
  );
}
