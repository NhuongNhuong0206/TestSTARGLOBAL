import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Cần cài đặt: expo install @expo/vector-icons

const Footer: React.FC = () => {
    const openURL = (url: string) => Linking.openURL(url);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liên hệ</Text>
            <Text style={styles.text}>📞 Hotline: 1900 1000</Text>
            <Text style={styles.text}>📩 Email: support@company.com</Text>
            <Text style={styles.text}>📌 Số điện thoại: +84 912 345 678</Text>

            <View style={styles.socialIcons}>
                <TouchableOpacity
                    onPress={() => openURL("https://facebook.com/yourpage")}
                >
                    <FontAwesome5
                        name="facebook"
                        size={24}
                        color="#1877F2"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => openURL("https://zalo.me/yourzalo")}
                >
                    <FontAwesome5
                        name="comments"
                        size={24}
                        color="#0088CC"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => openURL("https://t.me/yourtelegram")}
                >
                    <FontAwesome5
                        name="telegram"
                        size={24}
                        color="#0088CC"
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => openURL("https://yourwebsite.com/privacy")}
            >
                <Text style={styles.link}>📜 Chính sách bảo mật</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => openURL("https://yourwebsite.com/terms")}
            >
                <Text style={styles.link}>📑 Điều khoản sử dụng</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f9fa",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ddd",
        // top:400,
    },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    text: { fontSize: 14, color: "#333", marginBottom: 5 },
    socialIcons: { flexDirection: "row", marginVertical: 10 },
    icon: { marginHorizontal: 10 },
    link: {
        fontSize: 14,
        color: "#007bff",
        textDecorationLine: "underline",
        marginVertical: 5,
    },
});

export default Footer;
