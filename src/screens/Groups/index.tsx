import { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import EmptyList from "@components/EmptyList";
import { Button } from "@components/Button";

import { Container } from "./styles";

type RootParamList = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  };
};

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length == 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Sem turmas cadastradas :(" />
        )}
      ></FlatList>
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
