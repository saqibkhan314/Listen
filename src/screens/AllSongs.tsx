import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function AllSongs({navigation}: any) {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text style={styles.logoDesign}>Listen</Text>
      </View>
      <Text style={styles.artistTitle}>All Artist</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.artistDesign}>
          <View style={styles.allartist}>
            <TouchableOpacity
              style={styles.cardDesign}
              onPress={() => {navigation.navigate('ArijitSingh')}}
            >
              <Image 
                source={{
                  uri:"https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw"
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardDesign}>
              <Image 
                source={{
                  uri:"https://imgs.search.brave.com/sZ5mglqIJTaxIA5pbrj15PBj0mIO4wlDtvIGbZKF8n8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL2Fy/dGlzdC9pbWFnZXMv/d2Vic2l0ZS9wb3N0/ZXIvbGFyZ2UvYXRp/Zi1hc2xhbS0yNTc0/Ny0yNC0wMy0yMDE3/LTE3LTM5LTAzLmpw/Zw"
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardDesign}>
              <Image 
                source={{
                  uri:"https://imgs.search.brave.com/V5ifQCHmFKCUyfwA6YXc1pP7mp36wS3qdP08jSWIkRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtaW4uYm1zY2Ru/LmNvbS9pZWRiL2Fy/dGlzdC9pbWFnZXMv/d2Vic2l0ZS9wb3N0/ZXIvbGFyZ2Uvc29u/dS1uaWdhbS0xMDIw/NC0yNC0wMy0yMDE3/LTEyLTMxLTAxLmpw/Zw" // Replace with your image URL
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardDesign}>
              <Image 
                source={{
                  uri:"https://imgs.search.brave.com/nyK7xatz6CmEjYmvv0SrILDTfFcuafEHiyq_3ZR_kNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEUXpPRGRo/WW1FdE16STNPQzAw/WWpJMkxXSmpOVEV0/WmpFNU9XTXdNV0pt/TURRNFhrRXlYa0Zx/Y0djQC5qcGc" // Replace with your image URL
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardDesign}>
              <Image 
                source={{
                  uri:"https://imgs.search.brave.com/rlXP0Q4Q710q_Ev4SI0zRPBXmSzY8GP22j9NC2kbenY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbi5i/bXNjZG4uY29tL2ll/ZGIvYXJ0aXN0L2lt/YWdlcy93ZWJzaXRl/L3Bvc3Rlci9sYXJn/ZS9yYWhhdC1mYXRl/aC1hbGkta2hhbi0x/ODQyMC0yNC0wMy0y/MDE3LTEyLTU4LTQ1/LmpwZw" // Replace with your image URL
                }}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#004953",
    flex: 1,
  },
  logoDesign: {
    fontSize: 30,
    padding: 10,
    color: "#FFF",
  },
  artistTitle: {
    fontSize: 20,
    color: "#FFF",
    padding: 10,
  },
  allartist: {
    flexDirection: "row",
    gap: 10,
  },
  cardDesign: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  artistDesign:{}
});
