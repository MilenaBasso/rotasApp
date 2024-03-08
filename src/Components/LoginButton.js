import { View, Button } from 'react-native';
import { styles } from '../styles/StyleSheet';
export default function ButtonLogin() {

return (
<View style={styles.container}>

<Button
     title='Efetuar Login'
     onPress={() => {
       alert('Login Efetuado');
     }}
     color='red'
     
     
    />
</View>
);
}