import { View, Text } from "react-native";


function Receita({route}){
    const {receitas} = route.params
    console.log(receitas)
    return(
        <View>
            <Text>{receitas.nome}</Text>
        </View>
    )
}

export default Receita;