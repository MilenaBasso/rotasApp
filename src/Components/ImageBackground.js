import { ImageBackground } from 'react-native';
import { styles } from '../styles/StyleSheet';
import Imagem from '../components/LoginImage';
import Text from '../components/LoginText';
import Input from '../components/LoginInput';
import Button from '../components/LoginButton';




export default function ImagBack() {

return (
<ImageBackground source={require('../assets/imagens/fundo.png')} style={styles.fundologin}>
<Imagem/>
<Text/>
<Input />
<Button/>
</ImageBackground>
);
}