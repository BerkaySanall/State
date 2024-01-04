import React, { useState } from "react";
import {Stylesheet, View, Button, Text, SafeAreaView } from "react-native";

const App = () => {
    const [name, setName] = useState("Berkay");
    const [age, setAge] = useState("19");
    const [isVisible, setIsVisible] = useState(true);

    return (
        <SafeAreaView style={Stylesheet.container}>
            <Button
                title={isVisible ? "Gizle" : "Göster"}
                onPress={() => setIsVisible(!isVisible)}
            />

            {isVisible && (
                <>
                    <Text>İsim: {name}</Text>
                    <Text>Yaş:  {age}</Text>
                    <Button title="İsmi Değiştir" onPress={() => setName("Berkay")} />
                    <Button title="Yaşı Değiştir" onPress={() => setAge(19)} />
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifycontent: "center",
        alignitems: "center",
    },
});

export default App;