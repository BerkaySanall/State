import React, { useState } from "react";
import { StyleSheet, View, Button, Text, SafeAreaView } from "react-native";

const App = () => {
    const [user, setUser] = useState({ id: 1, name: "Berkay" });

    const handlePress = () => {
        setUser((prev) => ({ ...prev, name: "Berkay" }));
    };

    return (
        <SafeAreaView style={StyleSheet.container}>
            <Text style={styles.text}>ID: {user.id}</Text>
            <Text style={styles.text}>Name: {user.name}</Text>

            <Button title="Click" onPress={handlePress} />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
});

export default App;