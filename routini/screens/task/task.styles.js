import Checkbox from "expo-checkbox";
import styled from "styled-components";
import { useState } from "react";
import { TouchableNativeFeedback, View } from "react-native";

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
        </CardContainer>
      </TouchableNativeFeedback>
    </CardView>
  );
};

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;
export const SubTitle = styled.Text``;

export const CardList = styled.FlatList`
  margin-top: 36px;
`;

// Add task
