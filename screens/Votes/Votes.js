import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import StateVotes from './StateVotes/StateVotes';
import GeneralVotes from './GeneralVotes/GeneralVotes'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import * as signalR from '@microsoft/signalr'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from "lottie-react-native";
import { SET_LOADING } from '../../redux/reducers/basicReducer';
import { getVotes } from '../../fetches/Votes/Votes';

const Votes = () => {
    const { generalVotes, stateVotes } = useSelector(state => state.votesReducer);
    const { isLoading } = useSelector(state => state.basicReducer);

    const dispatch = useDispatch()

    const fetchData = () => {
        dispatch(getVotes())
    }
    
    useEffect(() => {
        fetchData()
    }, []); 

    return (
        <>
        {isLoading ? 
        <LottieView source={require("../../assets/loader.json")} autoPlay loop />
        :
        <ScrollView>
            <EvilIcons onPress={fetchData} name='refresh' size={52} color={"#B1B2FF"}/>

            <GeneralVotes data={generalVotes} />

            {stateVotes?.map((stateVote) => {
                return (
                    <StateVotes 
                        key={stateVote.state}
                        state={stateVote.state} 
                        politicalParties={stateVote.countDetail.map((detail) => {
                            return detail.politicalPartyName
                        })} 
                        votesArray={stateVote.countDetail.map((detail) => {
                            return detail.count
                        })} />
                )
            })}
        </ScrollView>
        }
    </>
    )
}

export default Votes;