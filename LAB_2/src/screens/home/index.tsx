import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";




export default function Home () {

    const navigator = useNavigation();

  function nav (screen: String): String {
    return screen;
  }

  return (
    <>
      <View style={stylist.container}>
        <Text style={stylist.title}>Lista de Tarefas - Benvindo Alves</Text>
        <View style={stylist.container}>
          <View style={stylist.task}>
            <TouchableOpacity
              onPress={() => {navigator.navigate('ViewItem');}}
            >
              <Text style={stylist.titleTask}>Item 1</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={stylist.buttonControl}>
          <TouchableOpacity 
            onPress={() => {navigator.navigate('NewItem');}}
          >
            <View style={stylist.add}>
              <Text style={stylist.textButton}>Adicionar</Text>
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