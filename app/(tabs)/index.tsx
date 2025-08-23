import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      {/* Map section */}
      <View style={styles.map}>
        <Text style={{ color: "white" }}>Map</Text>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bar}>
        <View style={styles.container}>
          {/* LEFT SIDE */}
          <View style={styles.leftSide}>
            {/* First row: time + avg speed */}
            <View style={styles.firstRow}>
              <Text style={styles.time}>2:23:30</Text>
              <Text style={styles.speed}>12km/h</Text>
            </View>

            {/* Second row: distance + top speed */}
            <View style={styles.secondRow}>
              <View style={styles.statBoxRed}>
                <Text style={styles.statValue}>19.6km</Text>
                <Text style={styles.statLabel}>distance</Text>
              </View>
              <View style={styles.statBoxGrey}>
                <Text style={styles.statValue}>34km/h</Text>
                <Text style={styles.statLabel}>top speed</Text>
              </View>
            </View>
          </View>

          {/* RIGHT SIDE (Pause button) */}
          <TouchableOpacity style={styles.rightSide}>
            {/* <TouchableOpacity style={styles.pauseBtn}>
              <Text style={styles.pauseIcon}>⏸</Text>
            </TouchableOpacity> */}
            <Text>he</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "black",
  },
  map: {
    flex: 1,
    backgroundColor: "#0a0a0a", // placeholder for map
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    padding: 20,
    backgroundColor: "#222",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    flexDirection: "row"
  },
  leftSide: {
    flex: 2,
    backgroundColor:'blue'
  },
  firstRow: {
    marginBottom: 16,
  },
  secondRow: {
    flexDirection: "row",
    gap: 12,
  },
  rightSide: {
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'yellow',
    flex:1
  },
  time: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  speed: {
    fontSize: 16,
    color: "lightgrey",
  },
  statBoxRed: {
    flex: 1,
    backgroundColor: "#E74C3C",
    borderRadius: 12,
    padding: 12,
  },
  statBoxGrey: {
    flex: 1,
    backgroundColor: "#444",
    borderRadius: 12,
    padding: 12,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  statLabel: {
    fontSize: 12,
    color: "lightgrey",
  },
  pauseBtn: {
    backgroundColor: "#E74C3C",
    paddingVertical: 24,
    paddingHorizontal: 28,
    borderRadius: 16,
  },
  pauseIcon: {
    fontSize: 28,
    color: "white",
  },
});
