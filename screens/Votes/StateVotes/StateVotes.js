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

    const dataLength = data.datasets[0].data.length

    const chartConfig = {
        backgroundGradientFrom: "#EEF1FF",
        backgroundGradientTo: "#EEF1FF",
        color: (opacity = 1) => `#F79BD3`,
        barColors: ["#AAC4FF", "#D2DAFF", "#EEF1FF"],
        strokeWidth: 10,
        decimalPlaces: 0,
        useShadowColorFromDataset: false,
      };

    return (
        <View style={votes.container}>
          <Text style={votes.purpleText}>{props.state}</Text>
          
          <View  style={votes.chartContainer}>
            {dataLength > 0 ? 
            <BarChart
                  data={data}
                  width={345}
                  height={300}
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                  showValuesOnTopOfBars
                  withHorizontalLabels={false}
              />
              :
              <Text style={votes.pinkText}>Este estado no tiene votos por ningún partido</Text>
            }
          </View>
        </View>
    )
}

export default StateVotes;