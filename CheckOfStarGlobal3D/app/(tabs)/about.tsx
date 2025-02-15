import { StyleSheet, Image, ScrollView, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Footer from "@/components/share/footer";
import { HeaderSc } from "@/components/share/header";
import { Video } from "expo-av";

export default function TabTwoScreen() {
    return (
        <ScrollView>
            <ThemedView style={styles.background}>
                <ThemedView style={styles.Top}></ThemedView>
                <HeaderSc />
                <ThemedView style={styles.container}>
                    <ThemedText style={styles.title}>Mô Tả Ứng Dụng</ThemedText>
                    <ThemedText style={styles.description}>
                        Đây là một giao diện bài kiểm tra đánh giá năng lực của
                        công ty STAR GLOBAL. Vì vấn đề thời gian nên có nhiều
                        vấn đề chưa được hoàn thiện. Em hy vọng có thể thể hiện
                        khả năng của bản thân nhiều hơn. Em cảm ơn Quý công ty
                        em qua bài làm của em ạ.
                    </ThemedText>
                    <Video
                        source={{
                            uri: "https://www.w3schools.com/html/mov_bbb.mp4",
                        }}
                        style={styles.video}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                    />
                </ThemedView>
            </ThemedView>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#66CCCC",
    },
    Top: {
        height: 32,
    },
    container: {
        padding: 20,
        alignItems: "center",
        backgroundColor: "#66CCCC",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "#333",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    video: {
        width: "100%",
        height: 250,
        borderRadius: 10,
    },
});
