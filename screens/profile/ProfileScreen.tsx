import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, KeyboardAvoidingViewBase, KeyboardAvoidingView, Platform } from 'react-native'
import Appbar from '../../components/shared/appbar-header.component'
import tailwind from 'tailwind-rn'
import { ScreenProps } from '../../App'
import Container from '../../components/shared/container.component'
import { EvilIcons } from '@expo/vector-icons'
import ProfileHeader from '../../components/profile/profile-header.component'
import { useRecoilValue } from 'recoil'
import { userState } from '../../recoil/atoms/user.atom'
import { profileState } from '../../recoil/atoms/profile.atom'

const ProfileScreen: React.FunctionComponent<ScreenProps<'Profile'>> = ({ navigation }) => {
    const user = useRecoilValue(userState)
    const profileInfo = useRecoilValue(profileState) 

    return (
        <Container>
            <Appbar screenTitle="Your Profile" navigation={navigation} />
            <ScrollView style={tailwind("w-full")}>
                <View style={[tailwind("bg-white mx-3 p-2 bg-opacity-50 my-6 w-11/12")]}>
                    <ProfileHeader imageUri={profileInfo.imageUrl}/>

                    <View style={tailwind("flex-row justify-between items-end border-b-2 border-gray-400 pb-2 mb-2")}>
                        <Text style={tailwind("p-2")}>Personal Information</Text>
                        <TouchableOpacity style={tailwind("flex-row p-2 ")} onPress={() => navigation.navigate("EditPersonalInfoScreen")}>
                            <EvilIcons name="pencil" size={24} color="blue" />
                            <Text style={tailwind("text-blue-700 underline")}>Edit Personal info</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={tailwind("justify-between flex-row p-2")}>
                            <Text style={tailwind("text-blue-700")}>Username: </Text>
                            <Text style={tailwind("")}>{user.name}</Text>
                        </View>
                        <View style={tailwind("justify-between flex-row p-2")}>
                            <Text style={tailwind("text-blue-700")}>First name: </Text>
                            <Text style={tailwind("")}>{user.firstName ?? "not set"}</Text>
                        </View>
                        <View style={tailwind("justify-between flex-row p-2")}>
                            <Text style={tailwind("text-blue-700")}>Last name: </Text>
                            <Text style={tailwind("")}>{user.lastName ?? "not set"}</Text>
                        </View>
                        <View style={tailwind("justify-between flex-row p-2")}>
                            <Text style={tailwind("text-blue-700")}>Email address: </Text>
                            <Text style={tailwind("")}>{user.email}</Text>
                        </View>
                        <View style={tailwind("justify-between flex-row p-2")}>
                            <Text style={tailwind("text-blue-700")}>Phone number: </Text>
                            <Text style={tailwind("")}>{user.phoneNumber}</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={[tailwind("bg-white mx-3 p-2 bg-opacity-50 my-2 w-11/12")]}>
                    <View style={tailwind("flex-row justify-between items-end")}>
                        <Text style={tailwind("p-2")}>Profile Information</Text>
                        <TouchableOpacity style={tailwind("flex-row p-2 ")} onPress={() => navigation.navigate("EditProfile")}>
                            <EvilIcons name="pencil" size={24} color="blue" />
                            <Text style={tailwind("text-blue-700 underline")}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tailwind("border border-gray-400")}></View>
                    <View style={tailwind("p-2")}>
                            <Text style={tailwind("text-blue-700 mb-2")}>About me: </Text>
                            <Text style={tailwind("")}>{profileInfo.bio}</Text>
                        </View>
                    <View style={tailwind("w-full")}>
                        <View style={tailwind("justify-between flex-row w-full p-2")}>
                            <Text style={tailwind("text-blue-700")}>Address: </Text>
                            <Text style={tailwind("")}>{profileInfo.address}</Text>
                        </View>
                        <View style={tailwind("justify-between flex-row w-full p-2")}>
                            <Text style={tailwind("text-blue-700")}>Gender: </Text>
                            <Text style={tailwind("")}>{profileInfo.gender}</Text>
                        </View>
                    </View>
                </View>

                <View style={[tailwind("bg-white mx-3 p-2 bg-opacity-50 my-6 w-11/12")]}>
                    <View style={tailwind("flex-row justify-between items-end")}>
                        <Text style={tailwind("p-2")}>Passwords</Text>
                        <TouchableOpacity style={tailwind("flex-row p-2 ")} onPress={() => navigation.navigate("EditPassword")}>
                            <EvilIcons name="pencil" size={24} color="blue" />
                            <Text style={tailwind("text-blue-700 underline")}>edit password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tailwind("border border-gray-400")}></View>
                    <View style={tailwind("w-full")}>
                        <View style={tailwind("justify-between flex-row w-full p-2")}>
                            <Text style={tailwind("text-blue-700")}>Password: </Text>
                            <Text style={tailwind("")}>*************</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </Container>
    )
}

export default ProfileScreen
