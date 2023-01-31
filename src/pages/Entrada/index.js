import { ScrollView, View, StyleSheet } from "react-native";
import CardReceita from "../../components/CardReceita";
import { receitas } from "../../receitas";
function Entrada({ navigation }) {
    return (
        <ScrollView>
            <View style={style.container}>
                {/* {receitas.entrada.map((receita, index) =>{
                    return <CardReceita navigation={navigation}  key={index} receita={receita} tipo="entrada" />
                })} */}
            </View>
        </ScrollView>

    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FBFBFB",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Entrada;