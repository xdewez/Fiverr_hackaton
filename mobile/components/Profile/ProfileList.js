import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import ProfileCard from './ProfileCard';
import axios from 'axios';

export default function ProfileList() {

    const [user, setUser] = useState([]);


    useEffect(() => {
        /**
         const fetchUsers = async () => {
            const users = await axios.get('http://192.168.50.195:3000/users?category=design');
            const randomUsers =  await axios.get('https://randomuser.me/api/?results=20');
    
            
            console.log("users")
    
            const userWithImg = users.map((u, index) => {
                u.picture = randomUsers[index].picture.medium;
                return u;
            });
    
            setUser(userWithImg);
        }
        fetchUsers();
         */
        
        axios
            .get('http://192.168.50.195:3000/users?category=design')
            .then((response) => response.data)
            .then((data) => {
                setUser(data);
                return users;
            })
            .then((users) => {
                axios
                    .get('https://randomuser.me/api/?results=20')
                    .then((response) => response.data)
                    .then((data) => {
                        const newUsers = users.map((u, index) => {
                            u.picture = data.results[index].picture.medium;
                            return u;
                        });
                        console.log(newUsers);
                        setUser(newUsers);
                    })
            })
    }, []);

    return (
        <ScrollView>
            {user.map((item) => (
                <ProfileCard
                    id={item.id}
                    firstname={item.firstname}
                    lastname={item.lastname}
                    category={item.name}
                    ranking={item.ranking}
                />
            ))}
        </ScrollView>
    )
};