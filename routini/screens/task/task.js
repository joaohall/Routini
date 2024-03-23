import { useState, useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Title,
  SubTitle,
  Card,
  CardList,
  ExpandButtonContainer,
  TaskView,
  HabitsView,
  TitlesContainer,
  HabitsCard
} from "./task.styles";
import { TouchableOpacity } from "react-native";
import ExpandButtonIcon from "../../assets/expandbutton";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

export default function Task(props) {
  const [taskCounter, setTaskCounter] = useState(1);
  const [taskLimiter, setTaskLimiter] = useState(5);
  const DATA = [
    {
      title: "Fazer compras no supermercado",
      desc: "Comprar pão, leite, ovos e frutas.",
    },
    {
      title: "Estudar para o exame de matemática",
      desc: "Rever álgebra e trigonometria.",
    },
    {
      title: "Ir à academia",
      desc: "Fazer 1 hora de cardio e 30 minutos de musculação.",
    },
    {
      title: "Preparar jantar",
      desc: "Cozinhar frango grelhado com legumes e arroz.",
    },
    {
      title: "Limpar o apartamento",
      desc: "Aspirar, limpar o banheiro e lavar a louça.",
    },
    {
      title: "Fazer revisão para a prova de história",
      desc: "Ler os capítulos 6 a 10 do livro didático e fazer resumos.",
    },
    {
      title: "Enviar e-mails pendentes",
      desc: "Responder aos e-mails dos clientes e colegas de trabalho.",
    },
    {
      title: "Fazer a lista de compras para a próxima semana",
      desc: "Planejar as refeições e listar os itens necessários.",
    },
    {
      title: "Assistir ao novo episódio da série favorita",
      desc: "Relaxar e aproveitar o tempo livre assistindo à série.",
    },
    {
      title: "Ler um capítulo do livro atual",
      desc: "Dedicar 30 minutos à leitura para relaxar antes de dormir.",
    },
    {
      title: "Organizar os documentos fiscais",
      desc: "Arquivar os documentos importantes e descartar os desnecessários.",
    },
  ];
  const DATA_HABITS = [
    {
      title: "Estudar",
      desc: "Dedicar tempo para aprender algo novo ou revisar conhecimentos.",
      date: "Diariamente",
    },
    {
      title: "Praticar exercícios físicos",
      desc: "Manter o corpo saudável através da atividade física regular.",
      date: "Três vezes por semana",
    },
    {
      title: "Beber água",
      desc: "Manter-se hidratado ao longo do dia.",
      date: "Regularmente",
    },
    {
      title: "Manter a casa organizada",
      desc: "Realizar tarefas domésticas para manter um ambiente limpo e organizado.",
      date: "Semanalmente",
    },
    {
      title: "Planejar refeições",
      desc: "Organizar as refeições para garantir uma alimentação saudável e equilibrada.",
      date: "Semanalmente",
    },
    {
      title: "Praticar momentos de lazer",
      desc: "Dedicar tempo para relaxar e desfrutar de atividades de entretenimento.",
      date: "Regularmente",
    },
    {
      title: "Cuidar da higiene pessoal",
      desc: "Realizar as atividades diárias de higiene para manter a saúde e o bem-estar.",
      date: "Diariamente",
    },
    {
      title: "Ler",
      desc: "Cultivar o hábito da leitura para expandir conhecimentos e estimular a mente.",
      date: "Diariamente",
    },
    {
      title: "Praticar meditação",
      desc: "Cultivar momentos de tranquilidade e autoconhecimento através da meditação.",
      date: "Regularmente",
    },
    {
      title: "Socializar",
      desc: "Interagir com amigos e familiares para fortalecer vínculos sociais.",
      date: "Regularmente",
    },
    {
      title: "Refletir sobre o dia",
      desc: "Dedicar um tempo para refletir sobre as experiências do dia e planejar o futuro.",
      date: "Diariamente",
    },
  ];
  
  

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

  const snapPoints = ["18% "];
  const workspaceSheetModalRef = useRef(null);
  const [page, setPage] = useState(true);

  function handdleWorkspaceModal() {
    workspaceSheetModalRef.current?.present();
  }
  function haddleWorkspaceChange(page) {
    setPage(page);
    workspaceSheetModalRef.current.close();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
        <BottomSheetModalProvider>
          <TitlesContainer>
            <ExpandButtonContainer>
              <Title>{page ? "Tarefas" : "Hábitos"}</Title>
              <TouchableOpacity
                onPress={() => handdleWorkspaceModal()}
                style={{ padding: 6 }}
              >
                <ExpandButtonIcon></ExpandButtonIcon>
              </TouchableOpacity>
            </ExpandButtonContainer>
            <SubTitle>
              ({taskCounter}/{taskLimiter}) Tarefas completas
            </SubTitle>
          </TitlesContainer>
          {page ? (
            <CardList
              data={DATA}
              renderItem={({ item }) => (
                <Card task={item.title} desc={item.desc} />
              )}
            />
          ) : (
            
            <CardList
              data={DATA_HABITS}
              renderItem={({ item }) => (
                <HabitsCard title={item.title} subtitle={item.desc} date={item.date}/>
              )}
            />
          )}

          {
            //BottomSheet configs
          }

          <BottomSheetModal
            style={{ zIndex: 10 }}
            ref={workspaceSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
          >
            <TaskView onPress={() => haddleWorkspaceChange(false)} />
            <HabitsView onPress={() => haddleWorkspaceChange(true)} />
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
