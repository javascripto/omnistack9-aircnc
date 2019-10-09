import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, AsyncStorage } from 'react-native';

import logo from '../assets/logo.png';
import { SpotList } from '../components/SpotList';


export function List() {
  const [ techs, setTechs ] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs')
      .then(techs => techs && setTechs(techs.split(',').map(t => t.trim())));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <ScrollView>
          {techs.map(tech => <SpotList key={tech} tech={tech} />)}
        <View style={styles.marginBottom}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 25
  },
  marginBottom: {
    marginBottom: 30,
  },
});
