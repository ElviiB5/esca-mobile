import React from 'react';
import { Text, View } from 'react-native';

import { votes } from '../styles/Votes';
import { BarChart } from 'react-native-chart-kit';

const StateVotes = (props) => {
    const data = {
        labels: props.politicalParties,
        datasets: [
          {
            data: props.votesArray
          }
        ]
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
          <Text style={votes.purpleText}>{props.state}</Text>
           <BarChart
                data={data}
                width={345}
                height={300}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    )
}

export default StateVotes;