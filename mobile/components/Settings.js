import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import StarRating from 'react-native-star-rating';

export default function Profile(props) {

  const user = {
    "id": 1,
    "email": "imcilreavy0@php.net",
    "username": "imcilreavy0",
    "password": "pdo5T2",
    "lastname": "McIlreavy",
    "firstname": "Irwinn",
    "description": "Proin eu mi.",
    "ranking": 5,
    "main_category": "lifestyle",
    "sub_category": "duobam",
    "language": "english",
    "visibility": "yes",
    "communications": "all newsletters"
    };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar}
            source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
          <Text style={styles.name}>{user.firstname} {user.lastname}</Text>
          <Text style={styles.userInfo}>{user.email}</Text>
          <View style={styles.rating}>
            <StarRating
              disabled={false}
              fullStarColor={'yellow'}
              maxStars={5}
              rating={user.ranking}
            />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.infoContent}>
          <Text style={styles.title}>My profile</Text>
            <Text style={styles.subtitle}>Category:</Text>
            <Text style={styles.info}>{user.main_category}</Text>
            <Text style={styles.subtitle}>Specialisation:</Text>
            <Text style={styles.info}>{user.sub_category}</Text>
            <Text style={styles.subtitle}>Description:</Text>
            <Text style={styles.info}>{user.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.infoContent}>
          <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Language:</Text>
            <Text style={styles.info}>{user.language}</Text>
            <Text style={styles.subtitle}>Visbility of profile:</Text>
            <Text style={styles.info}>{user.visibility}</Text>
            <Text style={styles.subtitle}>Communications: </Text>
            <Text style={styles.info}>{user.communications}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({

  header: {
    backgroundColor: '#37D596',
    marginTop: 50,
    marginRight: 'auto',
    marginBottom: 15,
    marginLeft: 'auto',
    width: '90%',
    height: 'auto',
    borderRadius: 10,
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    elevation: 6,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  rating: {
    marginTop: 15,
  },
  body: {
    backgroundColor: '#ffffff',
    marginRight: 'auto',
    marginBottom: 15,
    marginLeft: 'auto',
    width: '90%',
    height: 'auto',
    borderRadius: 10,
    shadowOpacity: 0.27,
    shadowRadius: 2.5,
    elevation: 6,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37D596',
    marginBottom: 15,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#696969',
  },
  infoContent: {
    padding: 15,
  },
  info: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
    color: '#696969',
  }
});
