import React, { useEffect, useState } from "react";
import Input from "../../common/Input/Input";
import { Button, ScrollView, Text, View } from 'react-native';
import { createPartyStyles } from "./styles/CreateParty";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "../../../fetches/Users/Users";
import RNPickerSelect from 'react-native-picker-select';

const CreateParty = ({ navigation }) => {
    const { token, rol } = useSelector(state => state.authReducer);
    const { candidates } = useSelector(state => state.usersReducer);

    const [candidateDNI, setCandidateDNI] = useState("")
    const [candidateFirstname, setCandidateFirstname] = useState("")
    const [candidateLastname, setCandidateLastname] = useState("")
    const [candidateBornDate, setCandidateBornDate] = useState("")
    const [candidateUsername, setCandidateUsername] = useState("")
    const [candidateGender, setCandidateGender] = useState("")
    const [password, setPassword] = useState("")
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
    const [proposals, setProposals] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCandidates(token))
    }, [])

    const removeProposal = (index) => {
        const updatedProposals = proposals.filter((_, i) => i !== index);
        setUserValues(updatedProposals);
    }

    const handleCreateParty = () => {
        const { partyCreated } = dispatch(createParty(token)) //FINISH

        if (partyCreated) {
            navigation.navigate('PoliticalParties')
        } else {
            console.log("Didnt work:(")
        }
    }

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
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Logo"
              placeHolder=".png / .jpg"
              isLogged={true}
              onChange={(event) => setImage(event.nativeEvent.text)}
              value={image}
            />
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
          {/* //TODO: Add select to get candidate users - DONE! not tested */}
          <View style={createPartyStyles.inputs}>
            <Input
              style={createPartyStyles.textInput}
              header="Candidato a la presidencia"
              placeHolder="Candidato"
              isLogged={true}
              onChange={(event) => setCandidateDNI(event.nativeEvent.text)}
              value={candidateDNI}
            />
          </View>
          <View style={createPartyStyles.inputs}>
              <Text style={createPartyStyles.text} >Candidato a la presidencia</Text>
              <RNPickerSelect
                  onValueChange={(value) => setCandidateDNI(value)}
                  items={candidates || []}
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
            {proposals.map((proposal, index) => {
                <Input
                style={createPartyStyles.textInput}
                header={`Propuesta #${index}`}
                placeHolder={`#${index}`}
                isLogged={true}
                onChange={(event) => {
                    const allProposals = [...proposals]
                    allProposals[index] = event.nativeEvent.text
                    setProposals(allProposals)
                }}
                value={proposal}
                />
                {index > 0 && (
                  <FontAwesome
                    name="minus"
                    size={20}
                    color="red"
                    onPress={removeProposal}
                  />
                )}
            })}
            <FontAwesome
              name="plus"
              size={20}
              color="green"
              onPress={() => setProposals([...proposals, ''])}
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
