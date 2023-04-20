import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";

export default function Stats(props) {
  const { stats } = props;

  const barStyles =(num)=>{
    const color =num>49 ? "#00ac17":"#ff3e3e";
    return {
        backgroundColor: color,
        width: `${num}%`
    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.tittle}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTittle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]}/>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTittle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#bebebe",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar:{
    height:5,
    borderRadius:20
  }
});
