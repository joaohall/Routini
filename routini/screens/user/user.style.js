import styled from "styled-components";
import { Switch, TouchableNativeFeedback, Text } from "react-native";

export const CategoryTitle = styled.Text`
  opacity: 0.5;
  padding: 35px;
  font-size: 18px;
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
  padding-left: 35px;
  padding-right: 35px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
export function ConfigSwitcher(props) {
  return (
    <ButtonsContainer>
      <SubTitle>{props.title}</SubTitle>
      <Switch
        value={props.value}
        onValueChange={props.onValueChange}
        trackColor={props.trackColor}
        thumbColor={props.thumbColor}
        ios_backgroundColor={props.ios_backgroundColor}
      />
    </ButtonsContainer>
  );
}
export function ConfigButton(props) {
  return (
    <TouchableNativeFeedback>
      <ButtonsContainer>
        <SubTitle>
          <Text style={{ color: props.color }}>{props.title}</Text>
        </SubTitle>
      </ButtonsContainer>
    </TouchableNativeFeedback>
  );
}

//BottomSheetModal

export const PFPOptionsContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

//Configs for Buttons

const ChangeButtons = styled.View`
  padding: 15px;
`;

const ButtonTitle = styled.Text`
  font-size: 20px;
`;

const ButtonView = styled.View`
  width: 100%;
  border-radius: 10px;
`;

export function ChangePFP() {
  return (
    <ButtonView>
      <TouchableNativeFeedback>
        <ChangeButtons>
          <ButtonTitle>Mudar foto de perfil</ButtonTitle>
        </ChangeButtons>
      </TouchableNativeFeedback>
    </ButtonView>
  );
}

export function RemovePFP() {
  return (
    <ButtonView>
      <TouchableNativeFeedback>
        <ChangeButtons>
          <ButtonTitle>Remover foto de perfil</ButtonTitle>
        </ChangeButtons>
      </TouchableNativeFeedback>
    </ButtonView>
  );
}
