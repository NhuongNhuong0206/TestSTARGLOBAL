import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


type CourseDetailProps = {
    title: string;
    image: string;
    description: string;
    publishedDate: string;
    views: number;
    likes: number;
    setIsDetailVisible: (value: boolean) => void;
};

const Detail: React.FC<CourseDetailProps> = ({
    title,
    image,
    description,
    publishedDate,
    views,
    likes,
    setIsDetailVisible,
}) => {
    const navigation = useNavigation(); // 🛠️ Lấy navigation để điều hướng

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Ngày đăng: {publishedDate}</Text>
                <Text style={styles.infoText}>👀 {views} lượt xem</Text>
                <Text style={styles.infoText}>❤️ {likes} lượt thích</Text>
            </View>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => setIsDetailVisible(false)}
            >
                <Text style={styles.backButtonText}>Quay lại</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 15,
    },
    description: {
        fontSize: 16,
        color: "gray",
        marginTop: 10,
    },
    infoContainer: {
        marginTop: 10,
    },
    infoText: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
    backButton: {
        backgroundColor: "#e74c3c",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    },
    backButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default Detail;
