import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useRef, useCallback } from "react";
import styled from "styled-components";
import {
  Title,
  Avatar,
  ConfigButton,
  ConfigSwitcher,
  ButtonsList,
  TitlesContainer,
  CategoryTitle,
} from "./user.style";

export default function User(props) {
  const snapPoints = ["50% ", "70%"];
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

  const ButtonModal = styled.Button``;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
          <ButtonsList>
            <TitlesContainer>
              <Title>Olá, João</Title>
            </TitlesContainer>
            <Avatar
              source={require("../../assets/profilepictureplaceholder.jpg")}
            ></Avatar>
            <CategoryTitle>Configurações da conta</CategoryTitle>
            <ConfigButton title="Editar perfil" />
            <ConfigButton title="Mudar senha" />
            <ConfigSwitcher title="Notficações" />
            <ConfigSwitcher title="Modo escuro" />
            <CategoryTitle>Configurações adicionais</CategoryTitle>
            <ConfigButton title="Sobre nos" />
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
          ></BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
