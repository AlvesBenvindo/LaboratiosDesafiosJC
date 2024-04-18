// import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity, Text, View, TextInput, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Task } from "../home";

export default function Item () {

  const {params} = useRoute<any>();

  return (
    <>
      <View style={stylist.container}>
        <Text style={stylist.title}>{params.titulo}</Text>
        <View style={stylist.textControl}>
          <Text style={stylist.text}>{params.descricao}</Text>
        </View>
        <View style={stylist.buttonControl}>
            <TouchableOpacity 
                onPress={() => {}}
            >
                <View style={stylist.exit}>
                    <Text style={stylist.textButton}>Voltar</Text>
                </View>
            </TouchableOpacity>
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
    textControl: {
        width: 300,
        height: 'auto',
        padding: 5.5,
        borderColor: '#cccccc',
        borderWidth: 1.8,
        borderRadius: 5,
    },
    text: {
        color: 'black',
    },
    buttonControl: {
        marginTop: 10,
        marginBottom: 40,
    },
    exit: {
        backgroundColor: 'purple',
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
