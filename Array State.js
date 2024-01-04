import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Button,
    Text,
    SafeAreaView,
    FlatList,
} from "react-native";

const App = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Berkay" },
        {
            id: 2,
            name: "Berkay",
        },
    ]);

    const handlePress = () => {
        setUsers((prev) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: Math.floor(Math.random() * 1000),
            },
            ...prev
        ]);
    };

    return (
        <SafeAreaView style={StyleSheet.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
item: {
    backgroundColor: "#eee",
    padding: 10,
    borderBottomWidth: 1,
},
text: {
    fontSize: 20,
},
});

export default App;