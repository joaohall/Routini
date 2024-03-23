import ExpandButtonIcon from "../../assets/expandbutton";
import Checkbox from "expo-checkbox";
import styled from "styled-components";
import { useState } from "react";
import { Touchable, TouchableNativeFeedback, View } from "react-native";
import { TouchableOpacity } from "react-native";
import EditIcon from "../../assets/editicon";
import DoneIcon from "../../assets/doneicon";

const CardContainer = styled.View`
  background-color: #ffffff;
  height: "auto";
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 15px;
`;

const CardView = styled.View`
  overflow: hidden;
  border-radius: 10px;
  border: solid #e3e3e3 1px;
  margin-bottom: 15px;
`;
const CardTextContainer = styled.View`
  flex: 1;
`;

const CardText = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const CardDesc = styled.Text`
  color: black;
  opacity: 0.5;
`;

export const Card = (props) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <CardView>
      <TouchableNativeFeedback
        style={{ borderRadius: 10 }}
        onPress={() => setChecked(!isChecked)}
      >
        <CardContainer>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : undefined}
          ></Checkbox>
          <CardTextContainer>
            <CardText>{props.task}</CardText>
            <CardDesc>{props.desc}</CardDesc>
          </CardTextContainer>
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
        </CardContainer>
      </TouchableNativeFeedback>
    </CardView>
  );
};

export const TitlesContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;
export const SubTitle = styled.Text``;

export const CardList = styled.FlatList`
  padding: 24px;
  padding-top: 0px;
`;

export const ExpandButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonContainer = styled.View`
  padding: 12px;
  padding-left: 24px;
`;
const ButtonTitle = styled.Text`
  font-size: 20px;
`;

export function TaskView({ onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <ButtonContainer>
        <ButtonTitle>Mudar para Hábitos</ButtonTitle>
      </ButtonContainer>
    </TouchableNativeFeedback>
  );
}

export function HabitsView({ onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <ButtonContainer>
        <ButtonTitle>Mudar para Tarefas</ButtonTitle>
      </ButtonContainer>
    </TouchableNativeFeedback>
  );
}

//Habits section

const HabitsCardView = styled.View`
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 15px;
  border: solid #e3e3e3 1px;
  background-color: white;
`;

const HabitsCardContainer = styled.View`
  align-items: center;
  gap: 15px;
  flex-direction: row;
`;

const HabitsCardTite = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const HabitsCardSubtitle = styled.Text``;

const HabitsCardDate = styled.Text`
  margin-top: 10px;
  opacity: 0.5;
  text-align: right;
`;

const HabitsTitlesContainer = styled.View`
  flex:1;
  padding: 15px;
  padding-left: 10px;
`;

const HabitsConfirmButtonContainer = styled.View`
  height: 100%;
  align-items: center;
  flex-direction: row;
  padding: 15px;
  background-color: green;
`;

export function HabitsCard(props) {
  return (
    <HabitsCardView>
      <TouchableNativeFeedback>
        <HabitsCardContainer>
          <HabitsConfirmButtonContainer>
            <DoneIcon></DoneIcon>
          </HabitsConfirmButtonContainer>
          <HabitsTitlesContainer>
            <HabitsCardTite>{props.title}</HabitsCardTite>
            <HabitsCardSubtitle>{props.subtitle}</HabitsCardSubtitle>
            <HabitsCardDate> {props.date}</HabitsCardDate>
          </HabitsTitlesContainer>
        </HabitsCardContainer>
      </TouchableNativeFeedback>
    </HabitsCardView>
  );
}
