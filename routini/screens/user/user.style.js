import styled from "styled-components";
import { Switch, TouchableNativeFeedback, Text } from "react-native";

export const CategoryTitle = styled.Text`
  padding: 15px;
  font-size:18px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

export const TitlesContainer = styled.View`
  align-items: center;
`;

export const ButtonsList = styled.ScrollView`
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  flex: 1;
`;

export const Avatar = styled.Image`
  margin: 40px;
  align-self: center;
  border-radius: 20000px;
  width: 150px;
  height: 150px;
`;
export const ButtonsContainer = styled.View`
margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
export function ConfigSwitcher(props) {
  return (
    <ButtonsContainer>
      <SubTitle>{props.title}</SubTitle>
      <Switch />
    </ButtonsContainer>
  );
}
export function ConfigButton(props) {
  return (
    <TouchableNativeFeedback>
      <ButtonsContainer>
        <SubTitle><Text style={{color:props.color}}>{props.title}</Text></SubTitle>
      </ButtonsContainer>
    </TouchableNativeFeedback>
  );
}
