import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { votes } from '../styles/Votes';
import { BarChart, PieChart, ProgressChart } from 'react-native-chart-kit';

const GeneralVotes = ({ data = [] }) => {
  const getRandomPinkColor = () => {
    var green = Math.floor(Math.random() * 256);
    
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    
    red = Math.max(red, 200);
    blue = Math.min(blue, 150);
    
    return "rgb(" + red + "," + green + "," + blue + ")";
  }

    const generalData = data.map((party) => {
      const color = getRandomPinkColor()
      return {
        name: party.politicalParty,
        count: party.votes,
        color: color,
        legendFontColor: color,
        legendFontSize: 15
      }
    })

    const chartConfig = {
        backgroundGradientFrom: "#EEF1FF",
        backgroundGradientTo: "#EEF1FF",
        color: (opacity = 1) => `#F79BD3`,
        barColors: ["#AAC4FF", "#D2DAFF", "#EEF1FF"],
        strokeWidth: 7,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
      };

    return (
        <View style={votes.container}>
          <Text style={votes.purpleText}>Conteo Nacional</Text>
          <PieChart
            data={generalData}
            width={350}
            height={220}
            chartConfig={chartConfig}
            accessor={"count"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            absolute
          />
        </View>
    )
}

export default GeneralVotes;