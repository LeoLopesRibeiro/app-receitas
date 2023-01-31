import { View, Text } from "react-native";


function Receita({route}){
    const {receitas} = route.params
    return(
        <View>
            <Text>{receitas.nome}</Text>
        </View>
    )
}

export default Receita;