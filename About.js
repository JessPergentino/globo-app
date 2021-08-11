import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import imageA from "./assets/imagea.jpg";
import imageB from "./assets/imageb.jpg";
import imageC from "./assets/imagec.jpg";

const blockA = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare metus nisl, sit amet cursus velit venenatis et. Pellentesque interdum faucibus eros consequat mollis. Etiam non lacus felis. Suspendisse dapibus suscipit ante quis cursus. Nam nec ligula ut ipsum tincidunt vehicula. Aliquam vel arcu malesuada, luctus elit at, pellentesque quam. Sed a posuere justo, non euismod metus. Aenean bibendum at lacus eu blandit.
`;

const blockB = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare metus nisl, sit amet cursus velit venenatis et. Pellentesque interdum faucibus eros consequat mollis. Etiam non lacus felis. Suspendisse dapibus suscipit ante quis cursus. Nam nec ligula ut ipsum tincidunt vehicula. Aliquam vel arcu malesuada, luctus elit at, pellentesque quam. Sed a posuere justo, non euismod metus. Aenean bibendum at lacus eu blandit.
`;

export default function AboutGlobo() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>We Are Different</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>Leaders in our field</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{ width: '100%', height: 400 }} />
                <Text style={styles.heading}>We are the Experts</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingTop: 5
    },
    text: {
        fontFamily: 'OpenSans'
    }
})