import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { home } from './styles/Home';
import { commonStyles } from '../commonStyles';
import LottieView from 'lottie-react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

const Home = () => {
    return (
        <ScrollView style={commonStyles.topContainer}>
            <View style={{ 
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={commonStyles.pinkTitle}>ESCA - Bienvenido</Text>
            </View>
            <View style={commonStyles.animationView}>
                <Text style={commonStyles.purpleTitle}>¿Quiénes somos?</Text>
                <LottieView
                    autoPlay
                    style={{
                        height: 200,
                        backgroundColor: "#FEBBCC"
                    }}
                    source={require('../../assets/animations/purpleWorld.json')}
                />
                <Text style={commonStyles.normalText}>ESCA somos una institución comprometida con la promoción y el fortalecimiento de la democracia en México.  Nuestra misión es proporcionar a los ciudadanos una plataforma segura y eficiente para ejercer su derecho al voto de manera virtual a través de nuestra aplicación móvil y plataforma web. Creemos en la importancia de la participación activa de los ciudadanos en el proceso electoral, y por eso hemos desarrollado una solución tecnológica innovadora que facilita la recolección de votos para la elección presidencial en México.
Nuestra aplicación ofrece a los usuarios una experiencia transparente y accesible, mostrando de manera clara los partidos políticos, los candidatos a la presidencia y los resultados de las votaciones en tiempo real. Nos enorgullece contribuir a la democracia mexicana al proporcionar a los ciudadanos una herramienta confiable para expresar su voluntad y, al finalizar las votaciones, anunciamos al ganador de manera imparcial y precisa. Estamos comprometidos con la integridad electoral y trabajamos incansablemente para garantizar que cada voto cuente y que el proceso sea justo y equitativo para todos los mexicanos.</Text>
            </View>

            <View style={commonStyles.animationView}>
                <Text style={commonStyles.purpleTitle}>Calendario electoral</Text>
                <Text style={commonStyles.normalText}>Aquí va el calendario</Text>
            </View>

            <View style={commonStyles.animationView}>
                <Text style={commonStyles.purpleTitle}>Contáctanos</Text>
                <View style={{ 
                    flexDirection: "row", 
                    justifyContent: "center", 
                    alignItems: "center",
                    alignContent: "center",
                    paddingLeft: 5
                }}>
                    <View style={{ marginRight: 10 }}>
                        <View style={home.contactView}>
                            <FontAwesome name='facebook-square' size={42} color={"#B1B2FF"}/>
                            <Text style={home.contactText}>ESCA</Text>
                        </View>
                        <View style={home.contactView}>
                            <FontAwesome name='instagram' size={42} color={"#B1B2FF"}/>
                            <Text style={home.contactText}>ESCA</Text>
                        </View>
                        <View style={home.contactView}>
                            <FontAwesome name='twitter' size={42} color={"#B1B2FF"}/>
                            <Text style={home.contactText}>ESCA</Text>
                        </View>
                        <View style={home.contactView}>
                            <FontAwesome name='youtube-play' size={42} color={"#B1B2FF"}/>
                            <Text style={home.contactText}>ESCA</Text>
                        </View>
                    </View>

                    <LottieView
                        autoPlay
                        style={{
                            height: 200,
                        }}
                        source={require('../../assets/animations/welcomeRobot.json')}
                    />
                </View>
            </View>

            <View style={{ 
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={commonStyles.footer}>La seguridad de tus datos es nuestra prioridad. Implementamos rigurosas medidas de protección para garantizar que tu información personal y tus votos se mantengan confidenciales y seguros en todo momento.</Text>
            </View>
        </ScrollView>
    )
}

export default Home;