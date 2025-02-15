import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Image, StyleSheet } from "react-native";

export function HeaderSc() {
    return (
        <ThemedView style={styles.Container}>
            <ThemedView style={styles.ButtonL}>
                <Fontisto
                    style={styles.ButtonL_icon}
                    name="world-o"
                    size={22}
                />
                <ThemedText style={styles.ButtonL_text}>Tiếng Việt</ThemedText>
                <Image
                    source={require("@/assets/images/LogoCty.png")}
                    style={{
                        width: 180, // Chiều rộng 100px
                        height: 32,
                        resizeMode: "contain", // Giữ tỷ lệ, không cắt ảnh
                        alignSelf: "center",
                        left: 80,
                        // backgroundColor: "red",
                    }}
                />
            </ThemedView>
            <ThemedView style={styles.Title}>
                <ThemedText style={styles.Title_main}>
                    BÀI KIỂM TRA NĂNG LỰC ỨNG VIÊN
                </ThemedText>
                <ThemedText style={styles.Title_sub}>
                    Thực tập sinh Lập trình App Mobile
                </ThemedText>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "white",
        width: "100vw",
        height: 100,
    },
    ButtonL: {
        top: 5,
        right: 10,
        flexDirection: "row-reverse",
        backgroundColor: "transparent",
    },
    ButtonL_text: {
        fontSize: 20,
        color: "#CC0033",
    },
    ButtonL_icon: {
        marginLeft: 5,
        color: "#CC0033",
    },
    Title: {
        height: 60,
        top: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    Title_main: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000033",
        textShadow: "0px 0px 10px #77325",
    },
    Title_sub: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000033",
        paddingBottom: 10,
    },
});
