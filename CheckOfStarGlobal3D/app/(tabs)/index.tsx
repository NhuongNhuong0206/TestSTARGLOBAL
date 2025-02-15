import {
    Image,
    StyleSheet,
    Platform,
    ScrollView,
    View,
    Text,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    Alert,
    TextInput,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import Fontisto from "@expo/vector-icons/Fontisto";
import { HeaderSc } from "./../../components/share/header";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Course from "@/components/share/course";
import { StackNavigationProp } from "@react-navigation/stack";
import TabTwoScreen from "./about";
import Footer from "@/components/share/footer";
import Detail from "./details";
import * as MailComposer from "expo-mail-composer";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!name || !email || !message) {
            Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin!");
            return;
        }

        setLoading(true);

        try {
            const isAvailable = await MailComposer.isAvailableAsync();
            if (isAvailable) {
                await MailComposer.composeAsync({
                    recipients: ["support@example.com"],
                    subject: `Liên hệ từ ${name}`,
                    body: `Họ tên: ${name}\nEmail: ${email}\nNội dung: ${message}`,
                });

                Alert.alert("Thành công", "Email đã được gửi!");
            } else {
                Alert.alert("Lỗi", "Thiết bị không hỗ trợ gửi email.");
            }
        } catch (error) {
            Alert.alert("Lỗi", "Có lỗi xảy ra, vui lòng thử lại!");
        }

        setLoading(false);
    };

    return (
        <ThemedView style={{ padding: 20 }}>
            <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
                Liên hệ với chúng tôi
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Họ và tên"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Nội dung"
                multiline
                value={message}
                onChangeText={setMessage}
            />

            <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSend}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text style={styles.sendButtonText}>Gửi</Text>
                )}
            </TouchableOpacity>
        </ThemedView>
    );
};

const HomeScreen = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePress = () => {
        setLoading(true); // Hiển thị icon xoay
        setTimeout(() => {
            setLoading(false);
            setIsStarted(true); // Chuyển sang màn hình chào mừng
        }, 500);
    };
    const nav = useNavigation();

    const articles = [
        {
            id: "1",
            title: "Bài viết 1",
            image: "https://cdn-media.sforum.vn/storage/app/media/anh-dep-110.jpg",
            description: "Mô tả ngắn của bài viết số 1...",
            publishedDate: "10/12/2024",
            views: 10000,
            likes: 3000,
        },
        {
            id: "2",
            title: "Bài viết 2",
            image: "https://thanhnien.mediacdn.vn/uploaded/huudat/2016_07_04/sun_shutterstock_QUGJ.jpg?width=500",
            description: "Mô tả ngắn của bài viết số 2...",
            publishedDate: "10/12/2025",
            views: 999000,
            likes: 5000,
        },
        {
            id: "3",
            title: "Bài viết 3",
            image: "https://cdn-media.sforum.vn/storage/app/media/anh-dep-102.jpg",
            description: "Mô tả ngắn của bài viết số 3...",
            publishedDate: "02/03/2025",
            views: 35700,
            likes: 1000,
        },
    ];
    return (
        <ScrollView>
            <ThemedView style={styles.background}>
                <ThemedView style={styles.Top}></ThemedView>
                <HeaderSc />
                {isStarted ? (
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>
                            Chào mừng bạn đến với chương trình của chúng tôi!
                        </Text>
                        <FlatList
                            data={articles}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Course
                                    title={item.title}
                                    image={item.image}
                                    description={item.description}
                                    publishedDate={item.publishedDate}
                                    views={item.views}
                                    likes={item.likes}
                                />
                            )}
                            nestedScrollEnabled={true}
                        />
                        <ContactForm />
                    </View>
                ) : (
                    <TouchableOpacity onPress={handlePress} disabled={loading}>
                        <ThemedView style={styles.Container_BtnStart}>
                            <ThemedView style={styles.BtnStart}>
                                {loading ? (
                                    <ActivityIndicator
                                        size="small"
                                        color="#fff"
                                    />
                                ) : (
                                    <ThemedText style={styles.BtnStart_text}>
                                        Bắt đầu
                                    </ThemedText>
                                )}
                            </ThemedView>
                        </ThemedView>
                    </TouchableOpacity>
                )}
                ;
            </ThemedView>
            <Footer />
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#66CCCC",
    },
    Top: {
        height: 32,
    },
    Container_BtnStart: {
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        top: 20,
        backgroundColor: "transparent",
    },
    BtnStart: {
        height: 100,
        width: 180,
        backgroundColor: "#000066",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    BtnStart_text: {
        fontWeight: "bold",
        backgroundColor: "transparent",
        fontSize: 24,
    },
    welcomeContainer: {
        padding: 20,
        backgroundColor: "#2ecc71",
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    sendButton: {
        backgroundColor: "#e74c3c",
        padding: 12,
        borderRadius: 5,
        alignItems: "center",
    },
    sendButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
