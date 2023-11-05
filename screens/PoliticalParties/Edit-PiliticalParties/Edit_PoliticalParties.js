// import React, { useState } from "react";
// import Input from "../../common/Input/Input";
// import { Button,  ScrollView, Text,  View } from 'react-native';
// import { Edit_PoliticalPartiesStyle } from "./styles/Edit_PoliticalPartiesStyle";
// import { FontAwesome } from '@expo/vector-icons';

// const Edit_PoliticalParties = ({navigation}) => {
//     const [userValues, setUserValues] = useState({
//         nombre: '', 
//         descripción: '',
//         candidato: '',
//         fechaDeRegistro: '', 
//         domicilio: '',
//         telefono: '',
//         sitioWeb: '',
//         Propuesta1: '',
//         Propuesta2: '',
//         propuestas: ['']
//     })

//     const addNewPropuesta = () => {
//         setUserValues({
//           ...userValues,
//           propuestas: [...userValues.propuestas, ''] // Agrega una nueva propuesta vacía
//         });
//       };
//     const removePropuesta = (index) => {
//         const updatedPropuestas = userValues.propuestas.filter((_, i) => i !== index);
//         setUserValues({ ...userValues, propuestas: updatedPropuestas });
//     };
//     return(
//         <ScrollView>
//             <View >
//                 <View style={Edit_PoliticalPartiesStyle.mainView}>
//                     <View style={Edit_PoliticalPartiesStyle.titleView}>
//                         <Text style={Edit_PoliticalPartiesStyle.title}>Editar partido politico</Text>
//                     </View>
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         <Input 
//                         style={Edit_PoliticalPartiesStyle.textInput} 
//                         header="Nombre" 
//                         placeHolder="Nombre"
//                         isLogged={true}  
//                         onChange={(event) => {
//                         setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
//                         }
//                         value={userValues.dni}
//                         /> 
//                     </View>  
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         <Input 
//                             style={Edit_PoliticalPartiesStyle.textInput} 
//                             header="Descripción" 
//                             placeHolder="Descripción"
//                             isLogged={true} 
//                             onChange={(event) => {
//                                 setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
//                             }
//                             value={userValues.dni}
//                         /> 
//                     </View> 
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         <Input 
//                             style={Edit_PoliticalPartiesStyle.textInput} 
//                             header="Candidato" 
//                             placeHolder="Candidato"
//                             isLogged={true} 
//                             onChange={(event) => {
//                                 setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
//                             }
//                             value={userValues.dni}
//                         /> 
//                     </View>
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         <Input 
//                             style={Edit_PoliticalPartiesStyle.textInput} 
//                             header="Fecha De Registro" 
//                             placeHolder="Fecha De Registro"
//                             isLogged={true} 
//                             onChange={(event) => {
//                                 setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
//                             }
//                             value={userValues.dni}
//                         /> 
//                     </View>
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         <Input 
//                             style={Edit_PoliticalPartiesStyle.textInput} 
//                             header="Domicilio" 
//                             placeHolder="Domicilio"
//                             isLogged={true} 
//                             onChange={(event) => {
//                                 setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
//                             }
//                             value={userValues.dni}
//                         /> 
//                     </View>
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         <Input 
//                             style={Edit_PoliticalPartiesStyle.textInput} 
//                             header="Telefono" 
//                             placeHolder="Telefono"
//                             isLogged={true} 
//                             onChange={(event) => {
//                                 setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
//                             }
//                             value={userValues.dni}
//                         /> 
//                     </View>
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         <Input 
//                             style={Edit_PoliticalPartiesStyle.textInput} 
//                             header="Sitio web" 
//                             placeHolder="Sitio web"
//                             isLogged={true} 
//                             onChange={(event) => {
//                                 setUserValues({ ...userValues, 'dni': event.nativeEvent.text })}
//                             }
//                             value={userValues.dni}
//                         /> 
//                     <View style={Edit_PoliticalPartiesStyle.inputs}>
//                         {userValues.propuestas.map((propuesta, index) => (
//                     <View key={index}>
//                     <Input
//                       style={Edit_PoliticalPartiesStyle.textInput}
//                       header={`Propuesta ${index + 1}`}
//                       placeHolder={`Propuesta ${index + 1}`}
//                       isLogged={true}
//                       onChange={(event) => {
//                         const updatedPropuestas = [...userValues.propuestas];
//                         updatedPropuestas[index] = event.nativeEvent.text;
//                         setUserValues({ ...userValues, propuestas: updatedPropuestas });
//                       }}
//                       value={propuesta}
//                     />
//                     {index > 0 && ( // Solo muestra el icono de menos si hay más de una propuesta
//                       <FontAwesome
//                         name="minus"
//                         size={60}
//                         color="red"
//                         onPress={() => removePropuesta(index)}
//                       />
//                     )}
//                     </View>
//                     ))}
//                     <FontAwesome
//                     name="plus"
//                     size={60}
//                     color="green"
//                     onPress={addNewPropuesta}
//                     />
//                     </View>
//                     </View>
//                     <View style={Edit_PoliticalPartiesStyle.button}>
//                         <Button title='CAMBIAR' color='#B1B2FF' onPress={() => navigation.navigate('PoliticalParties')}/>
//                     </View>
//                 </View>            
//             </View> 
//         </ScrollView>
//     )
// }

// export default Edit_PoliticalParties;



import React, { useState } from "react";
import Input from "../../common/Input/Input";
import { Button, ScrollView, Text, View } from 'react-native';
import { Edit_PoliticalPartiesStyle } from "./styles/Edit_PoliticalPartiesStyle";
import { FontAwesome } from '@expo/vector-icons';

const Edit_PoliticalParties = ({ navigation }) => {
  const [userValues, setUserValues] = useState({
    nombre: '',
    descripción: '',
    candidato: '',
    fechaDeRegistro: '',
    domicilio: '',
    telefono: '',
    sitioWeb: '',
    propuestas: ['']
  });

  const addNewPropuesta = () => {
    setUserValues({
      ...userValues,
      propuestas: [...userValues.propuestas, ''] // Agrega una nueva propuesta vacía
    });
  };

  const removePropuesta = (index) => {
    const updatedPropuestas = userValues.propuestas.filter((_, i) => i !== index);
    setUserValues({ ...userValues, propuestas: updatedPropuestas });
  };

  return (
    <ScrollView>
      <View>
        <View style={Edit_PoliticalPartiesStyle.mainView}>
          <View style={Edit_PoliticalPartiesStyle.titleView}>
            <Text style={Edit_PoliticalPartiesStyle.title}>Editar partido político</Text>
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            <Input
              style={Edit_PoliticalPartiesStyle.textInput}
              header="Nombre"
              placeHolder="Nombre"
              isLogged={true}
              onChange={(event) => {
                setUserValues({ ...userValues, 'nombre': event.nativeEvent.text })
              }}
              value={userValues.nombre}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            <Input
              style={Edit_PoliticalPartiesStyle.textInput}
              header="Descripción"
              placeHolder="Descripción"
              isLogged={true}
              onChange={(event) => {
                setUserValues({ ...userValues, 'descripción': event.nativeEvent.text })
              }}
              value={userValues.descripción}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            <Input
              style={Edit_PoliticalPartiesStyle.textInput}
              header="Candidato"
              placeHolder="Candidato"
              isLogged={true}
              onChange={(event) => {
                setUserValues({ ...userValues, 'candidato': event.nativeEvent.text })
              }}
              value={userValues.candidato}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            <Input
              style={Edit_PoliticalPartiesStyle.textInput}
              header="Fecha De Registro"
              placeHolder="Fecha De Registro"
              isLogged={true}
              onChange={(event) => {
                setUserValues({ ...userValues, 'fechaDeRegistro': event.nativeEvent.text })
              }}
              value={userValues.fechaDeRegistro}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            <Input
              style={Edit_PoliticalPartiesStyle.textInput}
              header="Domicilio"
              placeHolder="Domicilio"
              isLogged={true}
              onChange={(event) => {
                setUserValues({ ...userValues, 'domicilio': event.nativeEvent.text })
              }}
              value={userValues.domicilio}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            <Input
              style={Edit_PoliticalPartiesStyle.textInput}
              header="Telefono"
              placeHolder="Telefono"
              isLogged={true}
              onChange={(event) => {
                setUserValues({ ...userValues, 'telefono': event.nativeEvent.text })
              }}
              value={userValues.telefono}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            <Input
              style={Edit_PoliticalPartiesStyle.textInput}
              header="Sitio web"
              placeHolder="Sitio web"
              isLogged={true}
              onChange={(event) => {
                setUserValues({ ...userValues, 'sitioWeb': event.nativeEvent.text })
              }}
              value={userValues.sitioWeb}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.inputs}>
            {userValues.propuestas.map((propuesta, index) => (
              <View key={index}>
                <Input
                  style={Edit_PoliticalPartiesStyle.textInput}
                  header={`Propuesta ${index + 1}`}
                  placeHolder={`Propuesta ${index + 1}`}
                  isLogged={true}
                  onChange={(event) => {
                    const updatedPropuestas = [...userValues.propuestas];
                    updatedPropuestas[index] = event.nativeEvent.text;
                    setUserValues({ ...userValues, propuestas: updatedPropuestas });
                  }}
                  value={propuesta}
                />
                {index > 0 && ( // Solo muestra el icono de menos si hay más de una propuesta
                  <FontAwesome
                    name="minus"
                    size={40}
                    color="red"
                    onPress={() => removePropuesta(index)}
                  />
                )}
              </View>
            ))}
            <FontAwesome
              name="plus"
              size={40}
              color="green"
              onPress={addNewPropuesta}
            />
          </View>
          <View style={Edit_PoliticalPartiesStyle.button}>
            <Button title='CAMBIAR' color='#B1B2FF' onPress={() => navigation.navigate('PoliticalParties')} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Edit_PoliticalParties;
