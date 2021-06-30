import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import StarRating from 'react-native-star-rating';

export default function ProfileCard(props) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar}
            source={props.picture/*{ uri: 'https://randomuser.me/api/portraits/men/28.jpg' }*/} />
          <Text style={styles.name}>{props.firstname} {props.lastname}</Text>
          <Text style={styles.userInfo}>{props.category}</Text>
          <View style={styles.rating}>
            <StarRating
              disabled={false}
              fullStarColor={'yellow'}
              maxStars={5}
              rating={props.ranking}
            />
          </View>
        </View>
      </View>
      </ScrollView>
  );
}


const styles = StyleSheet.create({

  header: {
    backgroundColor: '#DCDCDC',
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
    borderColor: '#37D596',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#37D596",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#696969',
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
