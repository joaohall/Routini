import { SafeAreaView } from "react-native-safe-area-context";
import { Title, Note, TitlesContainer } from "./notes.styles";
import { LinearGradient } from "expo-linear-gradient";

import MasonryList from "@react-native-seoul/masonry-list";
import React from "react";

export default function Notes(props) {
  const DATA = [
    {
      date: "20/04",
      title: "Compromisso Urgente: Reunião de Emergência",
      note: "Compareça à reunião de emergência às 9h para discutir a crise financeira iminente e elaborar um plano de ação para estabilizar a situação. Sua presença e contribuição são essenciais para resolver essa questão crucial para o futuro da empresa.",
    },
    {
      date: "20/04",
      title: "Poema: Reflexos da Alma",
      note: "Nas águas serenas do lago, refletem-se os segredos da alma, onde os pensamentos dançam como folhas ao vento. Contemple a beleza efêmera desse espelho líquido e mergulhe na introspecção, onde a verdade se revela sob a luz do luar.",
    },
    {
      date: "20/04",
      title: "Compromisso Pessoal: Aula de Pintura",
      note: "Desperte seu lado criativo e participe da aula de pintura às 15h. Deixe a imaginação fluir através das pinceladas de cores vibrantes, criando uma obra que ecoe sua expressão única e sua visão do mundo.",
    },
    {
      date: "20/04",
      title: "Evento: Lançamento do Livro",
      note: "Celebre o lançamento do novo livro do autor renomado na livraria local. Junte-se aos entusiastas da literatura para uma noite de autógrafos e conversas inspiradoras, enquanto descobre as páginas repletas de emoção e sabedoria.",
    },
    {
      date: "20/04",
      title: "Lembrete: Aniversário da Mãe",
      note: "Prepare uma surpresa especial para comemorar o aniversário da sua mãe. Dedique um tempo para expressar seu amor e gratidão, seja preparando sua refeição favorita, presenteando-a com flores ou compartilhando momentos de carinho e afeto.",
    },
    {
      date: "20/04",
      title: "Momento de Meditação",
      note: "Reserve alguns minutos do seu dia para uma prática de meditação. Encontre um local tranquilo, feche os olhos e concentre-se na respiração, deixando que a calma envolva sua mente e seu corpo, renovando suas energias para os desafios que aguardam.",
    },
    {
      date: "20/04",
      title: "Compromisso: Consulta Odontológica",
      note: "Não se esqueça da consulta odontológica marcada para hoje às 14h. Cuide da saúde bucal e aproveite para discutir qualquer preocupação ou dúvida com seu dentista, garantindo um sorriso saudável e radiante.",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f7f7f7" }}>
      <TitlesContainer>
        <Title>Suas anotações</Title>
      </TitlesContainer>
      <MasonryList
        style={{ paddingHorizontal: 24, flex: 1, gap: 10 }}
        data={DATA}
        renderItem={({ item }) => (
          <Note date={item.date} title={item.title} note={item.note} />
        )}
      />
    </SafeAreaView>
  );
}
