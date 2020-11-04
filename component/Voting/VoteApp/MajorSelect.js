import React, { memo } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Background from '../../AppSetting/background/background2';
import BackButton from '../../AppSetting/components/BackButton';

const { width, height } = Dimensions.get("window")

const MajorSelect = ({ navigation }) => {
    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('VoteApp')} />
            <View style={styles.container}>
                <Text style={styles.title}>학과 선택</Text>
                <View style={styles.card}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('theology')}>
                            <Text style={styles.MajorName}>신학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('chri_edu_coun')}>
                            <Text style={styles.MajorName}>기독교교육 · 상담학과</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={() => navigation.navigate('media_video_ad')}>
                            <Text style={styles.MajorName}>미디어영상광고학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('inter_manage')}>
                            <Text style={styles.MajorName}>국제경영학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('police_admin')}>
                            <Text style={styles.MajorName}>경창행정학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('inter_tour')}>
                            <Text style={styles.MajorName}>국제관광학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('english')}>
                            <Text style={styles.MajorName}>영어학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('chinese')}>
                            <Text style={styles.MajorName}>중국어학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('com_science')}>
                            <Text style={styles.MajorName}>컴퓨터공학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('ict')}>
                            <Text style={styles.MajorName}>ICT융합학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('indust_securi')}>
                            <Text style={styles.MajorName}>산업보안학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('nurs_science')}>
                            <Text style={styles.MajorName}>간호학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('social_welfare')}>
                            <Text style={styles.MajorName}>사회복지학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('music')}>
                            <Text style={styles.MajorName}>음악학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('performing_arts')}>
                            <Text style={styles.MajorName}>공연예술학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('visual_info_design')}>
                            <Text style={styles.MajorName}>시각정보디자인학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('interior_architect')}>
                            <Text style={styles.MajorName}>실내건축디자인학과</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('texti_fash_design')}>
                            <Text style={styles.MajorName}>섬유패션디자인학과</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Background>
    );
}

export default memo(MajorSelect);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
    },
    card: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 20,
        marginBottom: 10,
        width: width - 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        ...Platform.select({
            ios: {
                shadowOpacity: 0.5,
                shadowColor: "rgb(50,50,50)",
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    bottomContent: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 15
    },
    title: {
        textAlign: 'center',
        color: "#394174",
        fontSize: 30,
        marginTop: 20,
        fontWeight: "200"
    },
    MajorName: {
        textAlign: 'center',
        fontSize: 18,
        color: "#394174",
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        marginLeft: 15,
        marginRight: 15,
        width: width / 2 - 85
    }
});