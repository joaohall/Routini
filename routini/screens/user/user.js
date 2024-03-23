import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useRef, useCallback, useState } from "react";
import styled from "styled-components";
import {
  Title,
  Avatar,
  ConfigButton,
  ConfigSwitcher,
  ButtonsList,
  TitlesContainer,
  CategoryTitle,
  ChangePFP,
  PFPOptionsContainer,
  RemovePFP,
} from "./user.style";
import { TouchableWithoutFeedback } from "react-native";

export default function User(props) {
  const snapPoints = ["20% "];
  const accountSheetModalRef = useRef(null);
  function handdleAccountModal() {
    accountSheetModalRef.current?.present();
  }
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    []
  );
  const [isEnabledNotification, setIsEnabledNotification] = useState(false);
  const toggleSwitchNotification = () => setIsEnabledNotification(!isEnabledNotification);

  const [isEnabledDarkTheme, setIsEnabledDarkTheme] = useState(false);
  const toggleSwitchTheme = () => setIsEnabledDarkTheme(!isEnabledDarkTheme);


  const ButtonModal = styled.Button``;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
          <ButtonsList>
            <TitlesContainer>
              <Title>Seu perfil</Title>
            </TitlesContainer>
            <TouchableWithoutFeedback onLongPress={handdleAccountModal}>
              <Avatar
                source={require("../../assets/profilepictureplaceholder.jpg")}
              ></Avatar>
            </TouchableWithoutFeedback>
            <CategoryTitle>Configurações da conta</CategoryTitle>
            <ConfigButton title="Trocar o route" />
            <ConfigButton title="Editar perfil" />
            <ConfigButton title="Mudar senha" />
            <ConfigSwitcher
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledNotification ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchNotification}
              value={isEnabledNotification}
              title="Notificações"
            />
            <ConfigSwitcher
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabledDarkTheme ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchTheme}
              value={isEnabledDarkTheme}
              title="Modo escuro"
            />
            <CategoryTitle>Configurações adicionais</CategoryTitle>
            <ConfigButton title="Sobre nós" />
            <ConfigButton title="Politica de privacidade" />
            <ConfigButton title="Termos e condições" />
            <ConfigButton title="Sair" color="red" />
          </ButtonsList>
          <BottomSheetModal
            style={{ zIndex: 10 }}
            ref={accountSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
          >
            <PFPOptionsContainer>
              <ChangePFP />
              <RemovePFP />
            </PFPOptionsContainer>
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
