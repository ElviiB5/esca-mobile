import React from 'react';
import { ScrollView, View } from 'react-native';
import StateVotes from './StateVotes/StateVotes';
import GeneralVotes from './GeneralVotes/GeneralVotes'

const Votes = () => {
    const pp = ["Party 1", "Party 2", "Party 3"]
    const data = [
        {
          data: [20, 45, 28]
        }
    ]

    return (
        <ScrollView>
            <GeneralVotes />
            <StateVotes state={"Guanajuato"} politicalParties={pp} votesArray={data} />
            <StateVotes state={"CDMX"} politicalParties={pp} votesArray={data} />
            <StateVotes state={"Guadalajara"} politicalParties={pp} votesArray={data} />
        </ScrollView>
    )
}

export default Votes;