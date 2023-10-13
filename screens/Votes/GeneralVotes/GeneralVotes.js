import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { votes } from '../styles/Votes';
import { BarChart, PieChart, ProgressChart } from 'react-native-chart-kit';

const GeneralVotes = () => {
    const data = {
      labels: ["Swim", "Bike", "Run"],
      data: [0.4, 0.6, 0.8]
    };

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
          <ProgressChart
            data={data}
            width={350}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
        </View>
    )
}

export default GeneralVotes;