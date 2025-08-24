import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";





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
              <View style={styles.timebox}>

              <Text style={[styles.time, ]}>2:23:30</Text>
              <View style={{display:'flex', flexDirection:"row", alignItems:'baseline'}}>
              <Text style={styles.speed}>12</Text>
              <Text style={[styles.speed, {opacity:0.6, fontSize:16}]}>Km/h</Text>

              </View>
              </View>
            </View>

            {/* Second row: distance + top speed */}
            <View style={styles.secondRow}>
              <View style={styles.statBoxRed}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'baseline'}}>

                <Text style={styles.statValue}>19.6</Text>
                <Text style={[styles.statValue, {opacity:0.8, fontSize:14}]}>km</Text>

                </View>
                <Text style={styles.statLabel}>distance</Text>
              </View>
              <View style={styles.statBoxGrey}>
                <View style={{display:'flex', flexDirection:'row', alignItems:'baseline'}}>

                  <Text style={styles.statValue}>34</Text>
                  <Text style={[styles.statValue, {opacity:0.6, fontSize:16, fontWeight:'600'}]}>km/h</Text>

                </View>
                <Text style={styles.statLabel}>top speed</Text>
              </View>
            </View>
          </View>

          {/* RIGHT SIDE (Pause button) */}
          <TouchableOpacity style={styles.rightSide}>

           <Image source={require('../../assets/images/pause.png')} style={{ width: 40, height: 40 }} />            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timebox: {
    paddingVertical: 18,
    paddingHorizontal:12,
    backgroundColor: '#505050',
    borderRadius: 8,
  },
  body: {
    flex: 1,
    backgroundColor: "black",
    fontFamily:""
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
    borderColor:'#505050',
    borderWidth:2,
    borderBottomWidth:0
  },
  container: {
    flexDirection: "row"
  },
  leftSide: {
    flex: 0.8,
  },
  firstRow: {
    marginBottom: 12,
  },
  secondRow: {
    flexDirection: "row",
    gap: 12,
  },
  rightSide: {
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#DB3552',
    borderRadius: 8,
    paddingVertical:12,
    flex:1
  },
  time: {
    fontSize: 32,
    fontWeight: '900',
    color: "white",
    fontFamily:"Inter",
    
    
  },
  speed: {
    fontSize: 20,
    fontWeight: '900',
    color: "white",
    fontFamily:"Inter",
  },
  statBoxRed: {
    flex: 1,
    backgroundColor: "#505050",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 18,
    alignItems:'center'
  },
  statBoxGrey: {
    flex: 1,
    backgroundColor: "#505050",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 18,
    alignItems:'center'
  },
  statValue: {
    fontSize: 18,
    fontWeight: "900",
    fontFamily: 'Inter',
    color: "white",
  },
  statLabel: {
    fontSize: 12,
    color: "white",
    opacity:0.8,
    fontWeight: "600",
    fontFamily: 'Inter',

  },
  pauseIcon: {
    fontSize: 28,
    color: "white",
  },
});
