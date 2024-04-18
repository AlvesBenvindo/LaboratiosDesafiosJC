import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { TouchableOpacity, Text, View, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function NewItem () {

  const navigator = useNavigation();

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")

  let novoDado = {
    id: Math.random(),
    titulo: titulo,
    descricao: descricao
  }

  async function addTask () {
    const resposta = await AsyncStorage.getItem("@Agenda:tarefa");
    const dados = resposta ? JSON.parse(resposta) : [];
    const dados2 = [...dados, novoDado];
    await AsyncStorage.setItem("@Agenda:tarefa", JSON.stringify(dados2));
    // console.log(JSON.stringify(dados2));
    navigator.goBack();
  }


  return (
    <>
      <View style={stylist.container}>
        <Text style={stylist.title}>Nova Tarefa</Text>
        <View style={stylist.titleControl}>
          <TextInput
            autoCapitalize='none'
            style={stylist.input}
            placeholder='Digite o título'
            placeholderTextColor={'#000'}
            onChangeText={(e) => setTitulo(e)}
            value={titulo}
            >
          </TextInput>
        </View>
        <View style={stylist.titleControl}>
          <TextInput
            autoCapitalize='none'
            style={stylist.input}
            textAlignVertical="top"
            numberOfLines={5}
            multiline
            placeholder='Escreva aqui a tarefa'
            placeholderTextColor={'#000'}
            onChangeText={(e) => setDescricao(e)}
            value={descricao}
            >
            
          </TextInput>
        </View>
        <View style={stylist.buttons}>
          <View style={stylist.buttonControl}>
            <TouchableOpacity 
                onPress={addTask}
            >
              <View style={stylist.save}>
                <Text style={stylist.textButton}>Guardar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={stylist.buttonControl}>
            <TouchableOpacity 
              onPress={() => {navigator.goBack()}}
            >
              <View style={stylist.cancel}>
                <Text style={stylist.textButton}>Cancelar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const stylist = StyleSheet.create({
    container: {
        flex: 1,
        width: 350,
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        borderRadius: 10,
    },
    title: {
        color: 'black',
        fontSize: 17.5,
        fontWeight: '600',
    },
    titleControl: {
        width: 300,
        marginTop: 50,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,

    },
    textControl: {
        width: 300,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    input: {
        color: 'black',
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
    },
    buttonControl: {
        marginTop: 10,
        marginBottom: 40,
    },
    save: {
        backgroundColor: 'green',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    cancel: {
        backgroundColor: 'red',
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
