import { StatusBar } from 'expo-status-bar';
import { Button, Image, Linking, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#2b4e72',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      width: '100%',
      height: '100%',
      gap: 20,
    }}>
      <Image
        style={{
          width: 230,
          height: 230,
          borderRadius: 170,
        }}
        source={require('./Images/foto_perfil.png')}></Image>
      <Text style={{
        fontSize: 28,
        textAlign: 'center',
        color: 'white'
      }}>Natan Ferreira dos Santos</Text>
      <TouchableOpacity style={{
        width: 220,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#005bbc',

      }} onPress={() => navigation.navigate("Linkedin")}>
        <Text style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          fontSize: 28,
          textAlign: 'center',
          color: 'white'
        }}>Linkedin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 229,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'black',
      }} onPress={() => navigation.navigate("GitHub")}>
        <Text style={{
          fontSize: 28,
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          color: 'white'
        }}>GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 220,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#008181',
      }} onPress={() => navigation.navigate("Email")}>
        <Text style={{
          fontSize: 28,
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          color: 'white'
        }}>E-MAIL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        width: 220,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#566981',
      }} onPress={() => navigation.navigate("Habilidades")}>
        <Text style={{
          fontSize: 28,
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
          color: 'white'
        }}>Habilidades</Text>
      </TouchableOpacity>

    </View>
  );
};
function PaginaLinkedin({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'blue',
      gap: 20,
    }}>
      <Image
        style={{
          width: 250,
          height: 250,
          borderRadius: 170,
        }}
        source={require('./Images/linkedin.webp')}></Image>
      <TouchableOpacity style={{
        width: 300,
        height: 70,
        borderRadius: 5,
        backgroundColor: 'white',
      }} onPress={() => Linking.openURL('https://www.linkedin.com/in/natan-ferreira-8055a8268/')}>
        <Text style={{
          fontSize: 28,
          textAlign: 'center',
          color: 'black',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>Ir para o Linkedin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 180,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#2b4e72',
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
          color: 'white',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }} onPress={() => navigation.navigate('Home')}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function PaginaGitHub({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      gap: 20,
    }}>
      <Image
        style={{
          width: 250,
          height: 250,
          borderRadius: 170,
        }}
        source={require('./Images/github.png')}></Image>
      <TouchableOpacity style={{
        width: 300,
        height: 70,
        borderRadius: 5,
        backgroundColor: 'black',
      }}>
        <Text style={{
          fontSize: 28,
          textAlign: 'center',
          color: 'white',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }} onPress={() => Linking.openURL('https://github.com/Natan-Ferreira23')}>Ir para o GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 180,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#2b4e72',
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
          color: 'white',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }} onPress={() => navigation.navigate('Home')}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
function PaginaEmail({ navigation }) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#d3e8e8',
      gap: 20,
    }}>
      <Image
        style={{
          width: 250,
          height: 250,
          borderRadius: 170,
        }}
        source={require('./Images/email.png')}></Image>
      <TouchableOpacity style={{
        width: 300,
        height: 70,
        borderRadius: 5,
        backgroundColor: '#008181',
      }} onPress={() => Linking.openURL('mailto:natanferreirasantoss@gmail.com')}>
        <Text style={{
          fontSize: 28,
          textAlign: 'center',
          color: 'white',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>Ir para Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 180,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#2b4e72',
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
          color: 'white',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }} onPress={() => navigation.navigate('Home')}>Home</Text>
      </TouchableOpacity>
    </View >
  );
}
function PaginaHabilidades({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#566981',
      padding: 20, // Adicionei padding para espaçamento interno
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }}>
      {/* Primeira linha */}
      <View style={{
        flexDirection: 'row',  // Alinha em linha
        alignItems: 'center',  // Alinha verticalmente no centro
        marginBottom: 20,      // Espaço entre as linhas
      }}>
        <Text style={{
          fontSize: 40,
          color: 'white',
        }}>HTML:</Text>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
      </View>

      {/* Segunda linha */}
      <View style={{
        flexDirection: 'row',  // Alinha em linha
        alignItems: 'center',  // Alinha verticalmente no centro
        marginBottom: 20,      // Espaço entre as linhas
      }}>
        <Text style={{
          fontSize: 40,
          color: 'white',
        }}>CSS:</Text>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>

      </View>
      <View style={{
        flexDirection: 'row',  // Alinha em linha
        alignItems: 'center',  // Alinha verticalmente no centro
        marginBottom: 20,      // Espaço entre as linhas
      }}>
        <Text style={{
          fontSize: 40,
          color: 'white',
        }}>JavaScript:</Text>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>

        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
      </View>
      <View style={{
        flexDirection: 'row',  // Alinha em linha
        alignItems: 'center',  // Alinha verticalmente no centro
        marginBottom: 20,      // Espaço entre as linhas
      }}>
        <Text style={{
          fontSize: 40,
          color: 'white',
        }}>PHP:</Text>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
      </View>
      <View style={{
        flexDirection: 'row',  // Alinha em linha
        alignItems: 'center',  // Alinha verticalmente no centro
        marginBottom: 20,      // Espaço entre as linhas
      }}>
        <Text style={{
          fontSize: 40,
          color: 'white',
        }}>ERP:</Text>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
        <Image style={{
          width: 50,
          height: 50,
        }} source={require('./Images/estrela.png')}></Image>
      </View>
      <TouchableOpacity style={{
        width: 180,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#2b4e72',
      }}>
        <Text style={{
          fontSize: 30,
          textAlign: 'center',
          color: 'white',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }} onPress={() => navigation.navigate('Home')}>Home</Text>
      </TouchableOpacity>
    </View>

  );
}
function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Linkedin' component={PaginaLinkedin} />
        <Stack.Screen name='GitHub' component={PaginaGitHub} />
        <Stack.Screen name='Email' component={PaginaEmail} />
        <Stack.Screen name='Habilidades' component={PaginaHabilidades} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;