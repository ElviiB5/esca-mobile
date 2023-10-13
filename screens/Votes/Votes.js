import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Votes = () => {
    const data = {
        labels: ["Party1", "Party2", "Party3", "Party4", "Party5", "Party6"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
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
        <View>
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

export default Votes;