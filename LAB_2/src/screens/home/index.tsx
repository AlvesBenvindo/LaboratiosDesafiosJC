import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type Task = {
  id: number;
  titulo: string;
  descricao: string;
};

export default function Home () {

  let dados: Array<Task> = new Array();

  async function getTask () {
    const resposta = await AsyncStorage.getItem("@Agenda:tarefa");
    const dados: Array<Task> = resposta ? [...JSON.parse(resposta)] : [];
    console.log(dados);
    return dados;
  }

  getTask().then(data => {
    data.forEach((element) => {
        dados.push(element)
    });
  })

  const navigator = useNavigation()

  const Item = (item: Task) => {
    console.log(item);
    return (
          <View style={stylist.task}>
            <TouchableOpacity
              onPress={() => {navigator.navigate('ViewItem', item);}}
            >
              <Text style={stylist.titleTask}>{item.titulo}</Text>
            </TouchableOpacity>
          </View>
  )
}

  return (
    <>
      <View style={stylist.container}>
        <Text style={stylist.title}>Lista de Tarefas - Benvindo Alves</Text>
        <View style={stylist.container}>
          <FlatList
            data={dados}
            keyExtractor={(item) => `${item.id}`}
            inverted={false}
            renderItem={ ({item}) => <Item id={item.id} titulo={item.titulo} descricao={item.descricao} /> }
          />
        </View>
        <View style={stylist.buttonControl}>
          <TouchableOpacity 
            onPress={()=>navigator.navigate('NewItem')}
          >
            <View style={stylist.add}>
              <Text style={stylist.textButton}>Add Tarefa</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )

}

const stylist = StyleSheet.create({

    container: {
        flex: 1,
        width: 350,
        backgroundColor: '#d5d5d5',
        alignItems: 'center',
        borderRadius: 10
    },

    title: {
        fontSize: 17.5,
        fontWeight: '900',
    },

    listTask: {
        fontSize: 17.5,
        fontWeight: '900',
    },

    task: {
        marginVertical: 5,
        flexDirection: 'row',
        width: 300,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        borderBottomStartRadius:3,
        borderBottomEndRadius: 3,
    },

    titleTask: {
        paddingLeft: 10,
        paddingVertical: 5,
    },

    dateTask: {
        paddingLeft: 10,
        paddingVertical: 5,
    },
    buttonControl: {
        marginTop: 10,
        marginBottom: 40,
    },
    add: {
        backgroundColor: 'green',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    textButton: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff'
    },

});