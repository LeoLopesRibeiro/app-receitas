import { ScrollView, View, StyleSheet } from "react-native";
import CardReceita from "../../components/CardReceita";
import { receitas } from "../../receitas";

function Sobremesa({navigation}){

    return(
        <ScrollView>
            <View style={style.container}>
                {receitas.sobremesa.map((receita, index) =>{
                        return <CardReceita navigation={navigation}  key={index} receita={receita} tipo="sobremesa" />
                    })}
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

export default Sobremesa