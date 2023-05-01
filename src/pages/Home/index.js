import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto Luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Pensão',
    value: '800,00',
    date: '18/09/2022',
    type: 0 //despesas
  },
  {
    id: 3,
    label: 'Serviço Manutenção',
    value: '750,00',
    date: '18/09/2022',
    type: 1 //Receitas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Fulano de Tal Santos"/>
        
        <Balance saldo="9250,90" gastos="527,00"/>

        <Text style={styles.title}>Últimas Movimentações!</Text>

        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements data={item}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },  
});
