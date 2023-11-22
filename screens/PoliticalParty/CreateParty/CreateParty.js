import React, { useEffect, useState } from "react";
import Input from "../../common/Input/Input";
import { Button, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { createPartyStyles } from "./styles/CreateParty";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../../../fetches/Users/Users";
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'expo-image-picker';
import { party } from "../styles/PoliticalParty";
import { createParty } from "../../../fetches/PoliticalParties/PoliticalParties";

const CreateParty = ({ navigation }) => {
    const { token, rol } = useSelector(state => state.authReducer);
    const { candidates } = useSelector(state => state.usersReducer);

    const [candidateDNI, setCandidateDNI] = useState("")
    const [candidateFirstname, setCandidateFirstname] = useState("")
    const [candidateLastname, setCandidateLastname] = useState("")
    const [candidateBornDate, setCandidateBornDate] = useState("")
    const [candidateGender, setCandidateGender] = useState("")
    const [municipality, setMunicipality] = useState("")
    const [state, setState] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [neighbor, setNeighbor] = useState("")
    const [zip, setZip] = useState("")
    const [partyName, setPartyName] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [image, setImage] = useState("")
    const [proposals, setProposals] = useState([""])

    console.log("image",image)
    console.log("proposals",proposals)

    const dispatch = useDispatch()

    const removeProposal = (index) => {
      console.log("here")
        const updatedProposals = proposals.filter((_, i) => i !== index);
        setProposals(updatedProposals);
    }

    const handleCreateParty = () => {
      const newParty = {
        candidateDNI,
        candidateFirstname,
        candidateLastname,
        candidateBornDate,
        candidateGender,
        municipality,
        state,
        street,
        number,
        neighbor,
        zip,
        partyName,
        phone,
        website,
        image,
        proposals,
      }
        const { partyCreated } = dispatch(createParty(newParty, token))

        if (partyCreated) {
            navigation.navigate('PoliticalParties')
        }
    }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 2],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

  return (
    <ScrollView>
      <View>
        <View style={createPartyStyles.mainView}>
          <View style={createPartyStyles.titleView}>
            <Text style={createPartyStyles.title}>Editar partido político</Text>
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Nombre del partido político"
              placeHolder="Nombre"
              isLogged={true}
              onChange={(event) => setPartyName(event.nativeEvent.text)}
              value={partyName}
            />
          </View>
          <View style={createPartyStyles.button}>
            <Button title='Agregar logo' color='#B1B2FF' onPress={pickImage} />
            <View style={createPartyStyles.imageContainter}>
            {image && <Image source={{ uri: image }} style={{ width: 290, height: 150 }} />}
            </View>
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Sitio web"
              placeHolder="ejemplo.com"
              isLogged={true}
              onChange={(event) => setWebsite(event.nativeEvent.text)}
              value={website}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Teléfono de contacto"
              placeHolder="###-###-####)"
              isLogged={true}
              onChange={(event) => setPhone(event.nativeEvent.text)}
              value={phone}
            />
          </View>
          <View style={createPartyStyles.titleView}>
            <Text style={createPartyStyles.title}>Dirección del partido</Text>
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Municipio"
              placeHolder="Municipio"
              isLogged={true}
              onChange={(event) => setMunicipality(event.nativeEvent.text)}
              value={municipality}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Estado"
              placeHolder="Estado"
              isLogged={true}
              onChange={(event) => setState(event.nativeEvent.text)}
              value={state}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Colonia"
              placeHolder="Colonia"
              isLogged={true}
              onChange={(event) => setNeighbor(event.nativeEvent.text)}
              value={neighbor}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Calle"
              placeHolder="Calle"
              isLogged={true}
              onChange={(event) => setStreet(event.nativeEvent.text)}
              value={street}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Número"
              placeHolder="#"
              isLogged={true}
              onChange={(event) => setNumber(event.nativeEvent.text)}
              value={number}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Código postal"
              placeHolder="CP"
              isLogged={true}
              onChange={(event) => setZip(event.nativeEvent.text)}
              value={zip}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            {proposals.map((proposal, index) => (
              <View key={index}>
                <Input
                  style={createPartyStyles.textInput}
                  header={`Propuesta #${index + 1}`}
                  placeHolder={`#${index + 1}`}
                  isLogged={true}
                  onChange={(event) => {
                    const allProposals = [...proposals];
                    allProposals[index] = event.nativeEvent.text;
                    setProposals(allProposals);
                  }}
                  value={proposal}
                />
                <FontAwesome
                  name="minus"
                  size={40}
                  color="#F79BD3"
                  onPress={() => removeProposal(index)}
                />
              </View>
            ))}
            <TouchableOpacity
                style={createPartyStyles.proposalsContainer}
                onPress={() => setProposals([...proposals, ""])}
                >
                <Text style={createPartyStyles.blueText}>Agregar propuesta </Text>
                <FontAwesome
                  name="plus"
                  size={40}
                  color="#AAC4FF"
                />
            </TouchableOpacity>
          </View>
          <View style={createPartyStyles.titleView}>
            <Text style={createPartyStyles.title}>Crea al candidato a la presidencia</Text>
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="DNI del candidato"
              placeHolder="DNI"
              isLogged={true}
              onChange={(event) => setCandidateDNI(event.nativeEvent.text)}
              value={candidateDNI}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Nombres del candidato"
              placeHolder="Nombres"
              isLogged={true}
              onChange={(event) => setCandidateFirstname(event.nativeEvent.text)}
              value={candidateFirstname}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Apellidos del candidato"
              placeHolder="Apellidos"
              isLogged={true}
              onChange={(event) => setCandidateLastname(event.nativeEvent.text)}
              value={candidateLastname}
            />
          </View>
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Fecha de nacimiento del candidato"
              placeHolder="yyyy-mm-dd"
              isLogged={true}
              onChange={(event) => setCandidateBornDate(event.nativeEvent.text)}
              value={candidateBornDate}
            />
          </View>
          <View>
              <Text style={createPartyStyles.purpleText} >Sexo del candidato</Text>
              <RNPickerSelect
                  onValueChange={(value) => setCandidateGender(value)}
                  items={[
                      { label: 'Femenino', value: 'Femenino' },
                      { label: 'Masculino', value: 'Masculino' },
                  ]}
              />
          </View>

          <View style={createPartyStyles.button}>
            <Button title='CREAR PARTIDO POLÍTICO' color='#B1B2FF' onPress={handleCreateParty} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateParty;
