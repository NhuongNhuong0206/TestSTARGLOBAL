import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Detail from "../../app/(tabs)/details";

type ArticleProps = {
    title: string;
    image: string;
    description: string;
    publishedDate: string;
    views: number;
    likes: number;
};

const Course: React.FC<ArticleProps> = ({
    title,
    image,
    description,
    publishedDate,
    views,
    likes,
}) => {
    const [isDetailVisible, setIsDetailVisible] = useState(false);

    return (
        <View style={styles.card}>
            {isDetailVisible ? (
                <Detail
                    title={title}
                    image={image}
                    description={description}
                    publishedDate={publishedDate}
                    views={views}
                    likes={likes}
                    setIsDetailVisible={setIsDetailVisible}
                />
            ) : (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <TouchableOpacity
                        style={styles.readMoreBtn}
                        onPress={() => setIsDetailVisible(true)}
                    >
                        <Text style={styles.readMoreText}>Đọc thêm</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    image: { width: "100%", height: 150, borderRadius: 10 },
    title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
    description: { fontSize: 14, color: "gray", marginTop: 5 },
    readMoreBtn: {
        backgroundColor: "#3498db",
        padding: 8,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    readMoreText: { color: "white", fontWeight: "bold" },
});

export default Course;
